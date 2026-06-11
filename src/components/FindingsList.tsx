import type { Finding } from "../types/accessibility";

interface FindingsListProps {
  findings: Finding[];
}

function severityStyle(severity: Finding["severity"]) {
  if (severity === "HIGH") {
    return "border-rose-400/30 bg-rose-400/10 text-rose-100";
  }

  if (severity === "MEDIUM") {
    return "border-amber-300/30 bg-amber-300/10 text-amber-100";
  }

  return "border-emerald-300/30 bg-emerald-300/10 text-emerald-100";
}

function severityLabel(severity: Finding["severity"]) {
  if (severity === "HIGH") {
    return "CRITICAL";
  }

  return severity;
}

export function FindingsList({ findings }: FindingsListProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="font-display text-xl text-slate-100">Findings</h2>
      <div className="mt-4 space-y-4">
        {findings.map(item => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.08em] ${severityStyle(item.severity)}`}>
                {severityLabel(item.severity)}
              </span>
              <span className="text-sm font-medium text-slate-300">
                {item.wcagCriterion}
              </span>
            </div>

            <p className="mt-4 text-base font-medium text-slate-100">
              {item.description}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-100">Impact:</span>{" "}
              {item.impact}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-100">
                Suggested fix:
              </span>{" "}
              {item.suggestedFix}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
