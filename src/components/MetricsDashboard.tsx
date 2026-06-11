import { AlertTriangle, BarChart3, FileCode2, ShieldAlert } from "lucide-react";
import type { AnalysisMetric, ReportSummary } from "../types/accessibility";

interface MetricsDashboardProps {
  summary: ReportSummary;
  labels: {
    title: string;
    metricBadge: string;
    scoreLabel: string;
    criticalIssues: string;
    mediumIssues: string;
    lowIssues: string;
    filesAnalyzed: string;
  };
}

function getMetrics(
  summary: ReportSummary,
  labels: MetricsDashboardProps["labels"]
): AnalysisMetric[] {
  return [
    {
      label: labels.criticalIssues,
      value: String(summary.criticalIssues),
      tone: "critical"
    },
    {
      label: labels.mediumIssues,
      value: String(summary.mediumIssues),
      tone: "warning"
    },
    {
      label: labels.lowIssues,
      value: String(summary.lowIssues),
      tone: "neutral"
    },
    {
      label: labels.filesAnalyzed,
      value: String(summary.analyzedFiles),
      tone: "success"
    }
  ];
}

function toneClasses(tone: AnalysisMetric["tone"]) {
  if (tone === "critical") {
    return "border-rose-400/30 bg-rose-400/10 text-rose-100";
  }

  if (tone === "warning") {
    return "border-amber-300/30 bg-amber-300/10 text-amber-100";
  }

  if (tone === "neutral") {
    return "border-slate-600/60 bg-slate-800/80 text-slate-200";
  }

  if (tone === "success") {
    return "border-emerald-300/30 bg-emerald-300/10 text-emerald-100";
  }

  return "border-cyan-300/30 bg-cyan-300/10 text-cyan-100";
}

function iconForMetric(tone: AnalysisMetric["tone"]) {
  if (tone === "critical") {
    return <ShieldAlert className="h-4 w-4" aria-hidden="true" />;
  }

  if (tone === "success") {
    return <FileCode2 className="h-4 w-4" aria-hidden="true" />;
  }

  return <AlertTriangle className="h-4 w-4" aria-hidden="true" />;
}

export function MetricsDashboard({ summary, labels }: MetricsDashboardProps) {
  const metrics = getMetrics(summary, labels);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="font-display text-xl text-slate-100">{labels.title}</h2>

      <article className="mt-4 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-cyan-300/20 via-cyan-200/10 to-slate-950 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100">
            <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
            {labels.metricBadge}
          </span>
          <p className="mt-3 font-display leading-none text-cyan-50 text-[clamp(7rem,26vw,19rem)]">
            {summary.score}
          </p>
          <p className="mt-2 text-base font-semibold uppercase tracking-[0.14em] text-cyan-100 sm:text-lg">
            {labels.scoreLabel}
          </p>
        </div>
      </article>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(metric => (
          <article
            key={metric.label}
            className={`rounded-xl border p-4 transition ${toneClasses(metric.tone)}`}>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em] opacity-80">
              <span>{metric.label}</span>
              {iconForMetric(metric.tone)}
            </div>
            <p className="mt-4 text-3xl font-semibold">{metric.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
