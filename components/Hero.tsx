import Image from "next/image";
import Link from "next/link";
import { PROFILE, INTRO as INTRO_DATA, QUICK_STACK as STACK_DATA } from "@/lib/data";

// Safe fallbacks so UI never crashes
const INTRO = {
  oneLiner: INTRO_DATA?.oneLiner ?? "",
  about: INTRO_DATA?.about ?? "",
  bullets: Array.isArray(INTRO_DATA?.bullets) ? INTRO_DATA!.bullets : [],
  ctaPrimary: INTRO_DATA?.ctaPrimary ?? { label: "Projects", href: "/projects" },
  ctaSecondary: INTRO_DATA?.ctaSecondary ?? { label: "Résumé", href: "/resume" }
};
const QUICK_STACK = Array.isArray(STACK_DATA) ? STACK_DATA : [];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-card-light dark:bg-card-dark px-6 py-10 md:px-10 md:py-14">
      {/* subtle background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_40%,transparent_70%)]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 20%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(50% 60% at 30% 80%, rgba(168,85,247,0.12), transparent 70%)"
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        {/* Avatar (optional) */}
        <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border border-slate-300 dark:border-slate-700 shadow">
          <Image
            src="/avatar.jpg"
            alt={`${PROFILE?.name ?? "Profile"} avatar`}
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Name + role */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {PROFILE?.name ?? "Your Name"}
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
          {PROFILE?.title ?? "Software Development Engineer"}
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {PROFILE?.location ?? ""}
        </p>

        {/* One-liner */}
        {INTRO.oneLiner && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-700 dark:text-slate-300">
            {INTRO.oneLiner}
          </p>
        )}

        {/* Quick bullets (inline) */}
        {INTRO.bullets.length > 0 && (
          <ul className="mt-3 inline-flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
            {INTRO.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={INTRO.ctaPrimary.href}
            className="rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            {INTRO.ctaPrimary.label}
          </Link>
          <Link
            href={INTRO.ctaSecondary.href}
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {INTRO.ctaSecondary.label}
          </Link>
          <a
            href={PROFILE?.github ?? "#"}
            target="_blank"
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href={PROFILE?.linkedin ?? "#"}
            target="_blank"
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            LinkedIn
          </a>
        </div>

        {/* Quick stack chips */}
        {QUICK_STACK.length > 0 && (
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {QUICK_STACK.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full border border-slate-300 dark:border-slate-700 px-2.5 py-1 text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
