export const dynamic = "force-static";

export default function ResumePage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Résumé</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Download the PDF or preview inline.
      </p>

      <div className="mt-4 flex items-center gap-3 text-sm">
        <a className="rounded-lg border px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
           href="/resume.pdf" download>
          Download PDF
        </a>
        <a className="underline underline-offset-4" href="/resume.pdf" target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </div>

      <div className="mt-6 w-full aspect-[8.5/11] rounded-xl overflow-hidden
                      border border-slate-200 dark:border-slate-800">
        <iframe src="/resume.pdf" className="h-full w-full" />
      </div>
    </section>
  );
}
