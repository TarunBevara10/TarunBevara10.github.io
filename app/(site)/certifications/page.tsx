import { CERTIFICATIONS } from "@/lib/data";

export const metadata = { title: "Articles — Tarun Bevara" };

export default function CertificationsPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold">Articles</h1>

      <ul className="mt-6 space-y-4">
        {CERTIFICATIONS.map((c) => (
<li
  key={c.title}
  className="flex items-center gap-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/5 p-4"
>
  {/* Image on the left side */}
  {c.image && (
    <img
      src={c.image}
      alt={c.title}
      className="w-12 h-12 rounded-md object-contain bg-white/10 p-1"
    />
  )}

  {/* Text content */}
  <div className="flex-1">
    <div className="flex items-baseline justify-between gap-4">
      <p className="font-medium">
        {c.title} — <span className="text-slate-300">{c.issuer}</span>
      </p>
      <span className="text-sm text-slate-400">{c.year}</span>
    </div>

    {c.link && (
      <a
        href={c.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm text-sky-400 underline underline-offset-4"
      >
        Read
      </a>
    )}
  </div>
</li>

        ))}
      </ul>
    </article>
  );
}
