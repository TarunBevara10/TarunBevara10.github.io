import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/* ───────────────── SEO / Social ───────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Tarun Bevara — SDE Portfolio",
    template: "%s · Tarun Bevara",
  },
  description: "Minimal, fast portfolio showcasing projects, publications, and résumé.",
  keywords: ["Tarun Bevara", "SDE", "Software Engineer", "Portfolio", "Projects", "AI/ML", "Security"],
  authors: [{ name: "Tarun Bevara" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tarun Bevara — SDE Portfolio",
    description: "Projects, publications, résumé, and contact.",
    url: "/",
    siteName: "Tarun Bevara Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tarun Bevara — SDE Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Bevara — SDE Portfolio",
    description: "Projects, publications, résumé, and contact.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* ─────────────── Viewport / Theme Color ─────────────── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1220", // fixed dark color
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Force dark mode by setting the "dark" class on <html>
    <html lang="en" className="dark scroll-smooth">
      <body
        className={[
          inter.className,
          "antialiased",
          // dark-only base colors
          "bg-bg-dark text-slate-100",
          // nicer text selection in dark
          "selection:bg-sky-400/25 selection:text-slate-50",
        ].join(" ")}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-sky-600 px-3 py-1 text-white"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="content" className="min-h-[calc(100vh-56px)]">
          {children}
        </main>

        <footer className="mx-auto max-w-6xl px-6 pb-12 pt-10 text-xs text-center text-slate-500">
          © {new Date().getFullYear()} Tarun Bevara · Built with Next.js + Tailwind
        </footer>
      </body>
    </html>
  );
}
