import { EDUCATION } from "@/lib/data";

export const metadata = { title: "Education — Tarun Bevara" };

export default function EducationPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold">Education</h1>

      <ul className="mt-6 space-y-4">
        {EDUCATION.map((e) => (
          <li
            key={e.degree + e.school}
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/5 p-4"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium">
                {e.degree} — <span className="text-slate-300">{e.school}</span>
              </p>
              <span className="text-sm text-slate-400">
                {e.start}–{e.end}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-400">{e.location}</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
