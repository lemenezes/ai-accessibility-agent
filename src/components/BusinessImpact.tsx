import { CheckCircle2 } from "lucide-react";

interface BusinessImpactProps {
  title: string;
  description: string;
  bullets: string[];
}

export function BusinessImpact({
  title,
  description,
  bullets
}: BusinessImpactProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="font-display text-xl text-slate-100">{title}</h2>
      <p className="mt-2 text-sm text-slate-300">{description}</p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {bullets.map(item => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
            <CheckCircle2
              className="h-4 w-4 shrink-0 text-emerald-300"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
