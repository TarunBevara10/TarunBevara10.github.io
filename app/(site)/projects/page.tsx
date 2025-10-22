import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Projects - AI/ML</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">A mix of full-stack, backend, and ML work.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-card-light dark:bg-card-dark p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.role} • {p.date}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((s: string) => (
                <span key={s} className="text-xs rounded-full border px-2 py-0.5 border-slate-300 dark:border-slate-700">{s}</span>
              ))}
            </div>
            <ul className="mt-2 text-sm list-disc ml-5 text-slate-700 dark:text-slate-300">
              {p.highlights.map((h: string) => <li key={h}>{h}</li>)}
            </ul>
            <a href={p.link} target="_blank" className="mt-3 inline-block text-sm underline underline-offset-4">Repository</a>
          </article>
        ))}
      </div>
    </section>
  );
}
