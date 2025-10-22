import type { ReactNode } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-72 md:shrink-0 md:sticky md:top-20 self-start">
          <ProfileSidebar />
        </aside>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </section>
  );
}
