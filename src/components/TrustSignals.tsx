import { CheckCircle2 } from "lucide-react";

interface TrustSignalsProps {
  signals: string[];
}

export function TrustSignals({ signals }: TrustSignalsProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {signals.map(signal => (
          <article
            key={signal}
            className="trust-signal-chip flex items-center gap-2 rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2.5">
            <CheckCircle2
              className="h-4 w-4 shrink-0 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-emerald-100">{signal}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
