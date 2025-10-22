// app/(site)/about/page.tsx
import ProfileSidebar from "@/components/ProfileSidebar";

export const metadata = { title: "About — Tarun Bevara" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT: Sidebar (sticky) */}
        <aside className="md:w-80 md:shrink-0 md:sticky md:top-24 self-start">
          <ProfileSidebar />
        </aside>

        {/* RIGHT: Content card with its own scroll */}
        <div className="flex-1 min-w-0">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card-light dark:bg-card-dark shadow-sm">
            <div className="h-[calc(100vh-12rem)] overflow-y-auto px-6 sm:px-8 md:px-10 py-8">
              <ArticleBody />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Your “About” content (same text you liked) -------- */
function ArticleBody() {
  return (
<article className="max-w-3xl">
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
    Hi, I’m Tarun Bevara <span className="align-[2px]">👋</span>
  </h1>

  <p className="mt-4 text-[15px] leading-7 text-white">
    I’m an <strong className="text-white">AI/ML - Software Engineer</strong><strong className="text-white"></strong>, and <strong className="text-white">Researcher</strong> with over three years of experience designing scalable, agentic machine learning systems across cloud platforms. I currently work as an AI/ML - Security Analyst & Research Assistant at Central Michigan University, where I pioneer multi-agent RL frameworks and advanced MLOps pipelines to support robust cyber-defense and AI orchestration for real-world deployment.
  </p>

  <div className="mt-6 space-y-4 text-[15px] leading-7">
    <p>
      My journey spans <strong>applied AI engineering, cloud-native infrastructure, and cutting-edge research</strong>. At Tiger Analytics, I engineered ML solutions for global names like McDonald’s and PepsiCo, optimizing both data pipelines and model serving. I thrive on tackling “from scratch” re-implementations—whether it’s transformer architectures or advanced computer vision models.
    </p>
    <p>
      I have led and contributed to multiple research projects, notably building an AI-powered movement tracker for ecological studies (<em>YOLOv11 & BoTSORT</em>), and developing a sketch-to-fashion pipeline using <em>Vision Transformer (VIT) with VQ-VAE</em>. My portfolio also features agentic solutions such as a <strong>EvoSys - AIOS</strong>, <strong>Graph-based RAG Autonomous Agent</strong>, and <strong>Game Dynamics Analyzer</strong> for sports analytics. On GitHub, I actively implement and open-source advanced ML papers—from foundational transformer models to multimodal agents, ensuring reproducibility and practical benchmarks for the community.
    </p>
    <p>
      Deeply curious about future technology, my current research is expanding into <strong>quantum computing</strong>—where I explore its intersection with machine learning, and how quantum algorithms can revolutionize computational efficiency and optimization.
    </p>
  </div>

  <section className="mt-10 border-t border-slate-800/60 pt-6">
    <h2 className="text-xl font-semibold">Beyond the Code</h2>
    <p className="mt-3 text-[15px] leading-7">
      Outside of engineering, I’m passionate about collaborative exploration and sharing technical insights. You’ll often find me analyzing the latest AI, ML, and quantum computing papers, publishing reproducible implementations and practical tutorials, and contributing to open-source initiatives. I believe in building solutions that pair rigorous technical depth with creative impact.
    </p>
  </section>

  <p className="mt-10 text-[15px] leading-7">
    Open to collaboration in <strong>AI engineering</strong>, <strong>cloud-native architectures</strong>, <strong>multi-agent systems</strong>, <strong>quantum computing</strong>, and <strong>paper implementations for real-world applications</strong>. Let’s build the next wave of intelligent technology together!
  </p>
</article>


  );
}
