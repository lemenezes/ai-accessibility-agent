import type { Finding } from "../types/accessibility";

interface FindingsListProps {
  findings: Finding[];
  title: string;
  impactLabel: string;
  suggestedFixLabel: string;
  beforeCodeLabel: string;
  suggestedCodeLabel: string;
  criticalLabel: string;
  mediumLabel: string;
  lowLabel: string;
}

function severityStyle(severity: Finding["severity"]) {
  if (severity === "HIGH") {
    return "severity-badge severity-badge-critical";
  }

  if (severity === "MEDIUM") {
    return "severity-badge severity-badge-medium";
  }

  return "severity-badge severity-badge-low";
}

function severityCardStyle(severity: Finding["severity"]) {
  if (severity === "HIGH") {
    return "finding-card finding-card-critical";
  }

  if (severity === "MEDIUM") {
    return "finding-card finding-card-medium";
  }

  return "finding-card finding-card-low";
}

function severityLabel(
  severity: Finding["severity"],
  criticalLabel: string,
  mediumLabel: string,
  lowLabel: string
) {
  if (severity === "HIGH") {
    return criticalLabel;
  }

  if (severity === "MEDIUM") {
    return mediumLabel;
  }

  return lowLabel;
}

export function FindingsList({
  findings,
  title,
  impactLabel,
  suggestedFixLabel,
  beforeCodeLabel,
  suggestedCodeLabel,
  criticalLabel,
  mediumLabel,
  lowLabel
}: FindingsListProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="font-display text-xl text-slate-100">{title}</h2>
      <div className="mt-4 space-y-4">
        {findings.map(item => (
          <article
            key={item.id}
            className={`rounded-xl border border-slate-800 bg-slate-950/70 p-5 ${severityCardStyle(item.severity)}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.08em] ${severityStyle(item.severity)}`}>
                {severityLabel(
                  item.severity,
                  criticalLabel,
                  mediumLabel,
                  lowLabel
                )}
              </span>
              <span className="text-sm font-medium text-slate-300">
                {item.wcagCriterion}
              </span>
            </div>

            <p className="mt-4 text-base font-medium text-slate-100">
              {item.description}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-100">
                {impactLabel}
              </span>{" "}
              {item.impact}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-100">
                {suggestedFixLabel}
              </span>{" "}
              {item.suggestedFix}
            </p>

            {item.beforeCode && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {beforeCodeLabel}
                </p>
                <pre className="mt-1 overflow-x-auto rounded-lg border border-slate-700 bg-slate-900/80 p-3 text-xs text-slate-200">
                  <code>{item.beforeCode}</code>
                </pre>
              </div>
            )}

            {item.suggestedCode && (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {suggestedCodeLabel}
                </p>
                <pre className="mt-1 overflow-x-auto rounded-lg border border-cyan-300/25 bg-slate-900/80 p-3 text-xs text-cyan-100">
                  <code>{item.suggestedCode}</code>
                </pre>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
