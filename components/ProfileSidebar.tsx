import Image from "next/image";
import { PROFILE } from "@/lib/data";

export default function ProfileSidebar() {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-card-light dark:bg-card-dark p-5">
      <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border border-slate-300 dark:border-slate-700 shadow">
        <Image src="/avatar.jpg" alt={`${PROFILE.name} avatar`} width={144} height={144} className="h-full w-full object-cover" />
      </div>
      <h2 className="mt-4 text-lg font-semibold">{PROFILE.name}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300">{PROFILE.title}</p>
      <div className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
        <p>📍 {PROFILE.location}</p>
        <a href={`mailto:${PROFILE.email}`} className="block hover:text-sky-600">✉️ {PROFILE.email}</a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-sky-600">🔗 LinkedIn</a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="block hover:text-sky-600">💻 GitHub</a>
      </div>
    </div>
  );
}
