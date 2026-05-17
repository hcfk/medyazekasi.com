type WorkflowStepProps = {
  index: number;
  title: string;
  description: string;
};

export function WorkflowStep({ index, title, description }: WorkflowStepProps) {
  return (
    <div className="rounded-[1.7rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
      <div className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f4c81,#10bcd4)] text-sm font-semibold text-white">
        {index}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
    </div>
  );
}
