import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const savedFetch = globalThis.fetch;
const savedUrl = process.env.DEMO_WEBHOOK_URL;
const savedToken = process.env.DEMO_WEBHOOK_TOKEN;
const compiled = ts.transpileModule(readFileSync("src/lib/demo-delivery.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const exports = {};
new Function("exports", "require", compiled)(exports, (name) =>
  name === "./site" ? { siteConfig: { email: "contact@example.invalid" } } : require(name),
);

try {
  let calls = 0;
  let responseStatus = 200;
  globalThis.fetch = async (url, options) => {
    calls++;
    assert.equal(url, "https://crm.example.invalid/inbox");
    assert.equal(options.redirect, "error");
    assert(options.signal instanceof AbortSignal);
    assert.equal(options.headers.Authorization, "Bearer test-only");
    assert.equal(JSON.parse(options.body).source, "medyazekasi.com");
    return new Response("", { status: responseStatus });
  };
  delete process.env.DEMO_WEBHOOK_URL;
  let response = await exports.deliverDemoRequest({ fullName: "Synthetic Test" });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).delivered, false);
  assert.equal(calls, 0);

  process.env.DEMO_WEBHOOK_URL = "http://crm.example.invalid/inbox";
  response = await exports.deliverDemoRequest({});
  assert.equal(response.status, 502);
  assert.equal(calls, 0, "Never transmit form data over HTTP");

  process.env.DEMO_WEBHOOK_URL = "https://crm.example.invalid/inbox";
  process.env.DEMO_WEBHOOK_TOKEN = "test-only";
  response = await exports.deliverDemoRequest({ fullName: "Synthetic Test" });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).delivered, true);

  responseStatus = 500;
  response = await exports.deliverDemoRequest({});
  assert.equal(response.status, 502);
  assert.equal((await response.json()).delivered, false);

  globalThis.fetch = async () => { throw new Error("Simulated network failure"); };
  response = await exports.deliverDemoRequest({});
  assert.equal(response.status, 502);
  assert.equal((await response.json()).delivered, false);
  console.log("PASS demo delivery: unconfigured, HTTPS, accepted, rejected and network failure (all transport mocked)");
} finally {
  globalThis.fetch = savedFetch;
  if (savedUrl === undefined) delete process.env.DEMO_WEBHOOK_URL;
  else process.env.DEMO_WEBHOOK_URL = savedUrl;
  if (savedToken === undefined) delete process.env.DEMO_WEBHOOK_TOKEN;
  else process.env.DEMO_WEBHOOK_TOKEN = savedToken;
}
