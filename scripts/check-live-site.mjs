import http from "node:http";
import https from "node:https";

const defaultBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://medyazekasi.com";

const publicRoutes = [
  "/",
  "/platform",
  "/mobil-uygulama",
  "/kamu-kurumlari",
  "/belediyeler",
  "/basin-yayin",
  "/ozellikler",
  "/guvenlik",
  "/demo",
  "/iletisim",
  "/insights",
];

const articleRoutes = [
  "/insights/desifre-transkripsiyon-kamu-veri-guvenligi",
  "/insights/belediye-meclis-tutanagi",
];

function parseArgs(argv) {
  const options = {
    baseUrl: defaultBaseUrl,
    delaySeconds: 0,
  };

  for (const arg of argv) {
    if (arg.startsWith("--url=")) {
      options.baseUrl = arg.slice("--url=".length);
    } else if (arg.startsWith("--delay=")) {
      options.delaySeconds = Number(arg.slice("--delay=".length)) || 0;
    }
  }

  return options;
}

function normalizeBaseUrl(url) {
  return url.replace(/\/+$/, "");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractAll(source, regex) {
  return [...source.matchAll(regex)];
}

function hasMatch(source, regex) {
  return regex.test(source);
}

function getTextMatch(source, regex) {
  const match = source.match(regex);
  return match?.[1]?.trim() || "";
}

async function fetchText(url, expectedContentType) {
  const response = await requestText(url);
  const text = response.body;
  const contentType = response.headers["content-type"] || "";

  const result = {
    url,
    ok: response.statusCode >= 200 && response.statusCode < 300,
    status: response.statusCode,
    contentType,
    text,
    issues: [],
  };

  if (!result.ok) {
    result.issues.push(`HTTP ${result.status}`);
  }

  if (expectedContentType && !contentType.includes(expectedContentType)) {
    result.issues.push(`Unexpected content-type: ${contentType}`);
  }

  return result;
}

function requestText(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === "https:" ? https : http;

    const request = client.request(
      parsedUrl,
      {
        method: "GET",
        headers: {
          "user-agent": "MedyaZekasiLiveCheck/1.0",
          accept: "text/html,application/xml,text/plain,*/*",
        },
        rejectUnauthorized: false,
      },
      (response) => {
        const statusCode = response.statusCode || 0;
        const location = response.headers.location;

        if (
          location &&
          statusCode >= 300 &&
          statusCode < 400 &&
          redirectCount < 5
        ) {
          response.resume();
          const nextUrl = new URL(location, parsedUrl).toString();
          resolve(requestText(nextUrl, redirectCount + 1));
          return;
        }

        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          resolve({
            statusCode,
            headers: response.headers,
            body,
          });
        });
      },
    );

    request.on("error", reject);
    request.end();
  });
}

function validateRobots(result, baseUrl) {
  const checks = [];
  checks.push({
    label: "robots status",
    ok: result.ok,
    detail: `HTTP ${result.status}`,
  });
  checks.push({
    label: "allow all",
    ok: /Allow:\s*\/\s*/i.test(result.text),
    detail: "Allow: /",
  });
  checks.push({
    label: "sitemap reference",
    ok: result.text.includes(`${baseUrl}/sitemap.xml`),
    detail: `${baseUrl}/sitemap.xml`,
  });
  return checks;
}

function validateSitemap(result, baseUrl) {
  const locMatches = extractAll(result.text, /<loc>(.*?)<\/loc>/gi).map((match) => match[1]);
  const checks = [];
  checks.push({
    label: "sitemap status",
    ok: result.ok,
    detail: `HTTP ${result.status}`,
  });
  checks.push({
    label: "xml root",
    ok: /<urlset[\s>]/i.test(result.text) || /<sitemapindex[\s>]/i.test(result.text),
    detail: "urlset/sitemapindex",
  });
  checks.push({
    label: "home present",
    ok: locMatches.includes(`${baseUrl}/`),
    detail: `${baseUrl}/`,
  });
  checks.push({
    label: "platform present",
    ok: locMatches.includes(`${baseUrl}/platform`),
    detail: `${baseUrl}/platform`,
  });
  checks.push({
    label: "insights present",
    ok: locMatches.includes(`${baseUrl}/insights`),
    detail: `${baseUrl}/insights`,
  });
  checks.push({
    label: "desifre article present",
    ok: locMatches.includes(`${baseUrl}/insights/desifre-transkripsiyon-kamu-veri-guvenligi`),
    detail: `${baseUrl}/insights/desifre-transkripsiyon-kamu-veri-guvenligi`,
  });
  checks.push({
    label: "url count",
    ok: locMatches.length >= 12,
    detail: `${locMatches.length} URL`,
  });
  return checks;
}

function validateHtmlPage(result, route, baseUrl) {
  const title = getTextMatch(result.text, /<title>(.*?)<\/title>/is);
  const description = getTextMatch(
    result.text,
    /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i,
  );
  const canonical = getTextMatch(result.text, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  const h1Count = extractAll(result.text, /<h1\b/gi).length;
  const imgTags = extractAll(result.text, /<img\b[^>]*>/gi);
  const imgWithoutAlt = imgTags.filter((tag) => !/\salt=/i.test(tag));
  const checks = [];

  checks.push({
    label: `${route} status`,
    ok: result.ok,
    detail: `HTTP ${result.status}`,
  });
  checks.push({
    label: `${route} html`,
    ok: result.contentType.includes("text/html"),
    detail: result.contentType,
  });
  checks.push({
    label: `${route} lang=tr`,
    ok: /<html[^>]*lang=["']tr["']/i.test(result.text),
    detail: "lang=tr",
  });
  checks.push({
    label: `${route} title`,
    ok: title.length > 10,
    detail: title || "missing",
  });
  checks.push({
    label: `${route} meta description`,
    ok: description.length > 70,
    detail: description || "missing",
  });
  checks.push({
    label: `${route} canonical`,
    ok: canonical === `${baseUrl}${route === "/" ? "" : route}` || canonical === `${baseUrl}/`,
    detail: canonical || "missing",
  });
  checks.push({
    label: `${route} single h1`,
    ok: h1Count === 1,
    detail: `${h1Count} h1`,
  });
  checks.push({
    label: `${route} landmarks`,
    ok: hasMatch(result.text, /<main\b/i) && hasMatch(result.text, /<header\b/i) && hasMatch(result.text, /<nav\b/i),
    detail: "main/header/nav",
  });
  checks.push({
    label: `${route} structured data`,
    ok: hasMatch(result.text, /application\/ld\+json/i),
    detail: "JSON-LD",
  });
  checks.push({
    label: `${route} images alt`,
    ok: imgWithoutAlt.length === 0,
    detail: imgTags.length === 0 ? "no raster img tags" : `${imgTags.length} img / ${imgWithoutAlt.length} missing alt`,
  });

  return checks;
}

function validateArticlePage(result, route) {
  return [
    {
      label: `${route} article schema`,
      ok: hasMatch(result.text, /"@type":"Article"/),
      detail: "Article JSON-LD",
    },
    {
      label: `${route} faq schema`,
      ok: hasMatch(result.text, /"@type":"FAQPage"/),
      detail: "FAQPage JSON-LD",
    },
    {
      label: `${route} breadcrumb schema`,
      ok: hasMatch(result.text, /"@type":"BreadcrumbList"/),
      detail: "BreadcrumbList JSON-LD",
    },
  ];
}

function printChecks(title, checks) {
  console.log(`\n${title}`);
  for (const check of checks) {
    const prefix = check.ok ? "OK" : "FAIL";
    console.log(`- [${prefix}] ${check.label}: ${check.detail}`);
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const baseUrl = normalizeBaseUrl(options.baseUrl);

  if (options.delaySeconds > 0) {
    console.log(`Waiting ${options.delaySeconds}s before live checks...`);
    await sleep(options.delaySeconds * 1000);
  }

  console.log(`Checking live site: ${baseUrl}`);

  const robots = await fetchText(`${baseUrl}/robots.txt`, "text/plain");
  const sitemap = await fetchText(`${baseUrl}/sitemap.xml`, "xml");
  const pageResults = [];

  for (const route of publicRoutes) {
    pageResults.push({
      route,
      result: await fetchText(`${baseUrl}${route === "/" ? "" : route}`, "text/html"),
    });
  }

  const articleResults = [];
  for (const route of articleRoutes) {
    articleResults.push({
      route,
      result: await fetchText(`${baseUrl}${route}`, "text/html"),
    });
  }

  const allChecks = [
    ...validateRobots(robots, baseUrl),
    ...validateSitemap(sitemap, baseUrl),
    ...pageResults.flatMap(({ route, result }) => validateHtmlPage(result, route, baseUrl)),
    ...articleResults.flatMap(({ route, result }) => validateArticlePage(result, route)),
  ];

  printChecks("Robots", validateRobots(robots, baseUrl));
  printChecks("Sitemap", validateSitemap(sitemap, baseUrl));

  for (const { route, result } of pageResults) {
    printChecks(`Page ${route}`, validateHtmlPage(result, route, baseUrl));
  }

  for (const { route, result } of articleResults) {
    printChecks(`Article ${route}`, validateArticlePage(result, route));
  }

  const failed = allChecks.filter((check) => !check.ok);

  console.log(`\nSummary: ${allChecks.length - failed.length}/${allChecks.length} checks passed.`);

  if (failed.length > 0) {
    console.error("Live site verification failed.");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Live site verification crashed.");
  console.error(error);
  process.exit(1);
});
