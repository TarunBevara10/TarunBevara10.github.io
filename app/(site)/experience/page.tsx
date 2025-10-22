import { EXPERIENCE } from "@/lib/data";

export const metadata = { title: "Work Experience — Tarun Bevara" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-slate-300 dark:border-slate-700 px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

export default function ExperiencePage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold">Work Experience</h1>

      <ul className="mt-6 space-y-5">
        {EXPERIENCE.map((role) => (
          <li
            key={`${role.title}-${role.company}-${role.start}`}
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/5 p-4"
          >
            {/* Header: title / dates */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold">
                {role.title} — <span className="text-slate-300">{role.company}</span>
              </h2>
              <span className="text-sm text-slate-400">
                {role.start} – {role.end}
              </span>
            </div>

            {/* Location (optional) */}
            {role.location && (
              <p className="text-sm text-slate-400">{role.location}</p>
            )}

            {/* Tech stack pills */}
            {role.stack && role.stack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {role.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            )}

            {/* Bullet points */}
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[15px] leading-7 text-slate-200">
              {role.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
