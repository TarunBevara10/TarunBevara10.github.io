import { SKILLS } from "@/lib/data";

export const metadata = { title: "Skills — Tarun Bevara" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-slate-300 dark:border-slate-700 px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold">Skills</h1>

      <div className="mt-6 space-y-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <section key={group} className="border-t border-slate-800/60 pt-6 first:border-0 first:pt-0">
            <h2 className="text-lg font-semibold capitalize">
              {group.replace(/([A-Z])/g, " $1")}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {(items as string[]).map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
