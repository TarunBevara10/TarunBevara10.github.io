import { PUBLICATIONS } from "@/lib/data";

export const metadata = {
  title: "Research — Tarun Bevara",
  description: "Peer-reviewed work and preprints."
};

export default function PublicationsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Research Work and Paper Implementations</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Research Work and Paper Reimplementations.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {PUBLICATIONS.map((pub) => (
          <article
            key={pub.title}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-card-light dark:bg-card-dark p-5"
          >
            <h3 className="font-semibold leading-snug">{pub.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pub.venue}</p>
            <a
              href={pub.link}
              target="_blank"
              className="mt-3 inline-block text-sm underline underline-offset-4"
            >
              Link
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

