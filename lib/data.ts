export const PROFILE = {
  name: "Tarun Bevara",
  title: "SDE- AI/ML",
  location: "Beaverton, Oregon (Open to Relocation)",
  phone: "+1(989)317-6067",
  email: "tarunbevara10@gmail.com",
  github: "https://github.com/TarunBevara10",
  linkedin: "https://www.linkedin.com/in/tarunbevara10/"
};

/* ── Used by the Hero (home page) ─────────────────────────────────────────── */
export const INTRO = {
  oneLiner:
    "Hi there 👋 I'm Tarun Bevara — MS CS @ Central Michigan University | Software Developer in AI/ML.",

  about: `🎓 Pursuing my Master's in Computer Science at Central Michigan University.
🛡️ Security Analyst at CMU's SOC — automating incident response & threat detection with Python and Elastic Stack.
👩‍💻 Former Software Engineer at APRG Technologies (India) — building data-driven full-stack solutions.
🚀 I love the intersection of AI, cybersecurity, and backend engineering — building systems that are secure, intelligent, and scalable.`,

  // 👇 added this field (required by Hero.tsx)
  bullets: [
    "Backend: Java, Python, FastAPI, Spring Boot",
    "Infrastructure: Docker, Kubernetes, AWS, CI/CD",
    "Frontend: React.js, Next.js, TypeScript",
    "AI/ML: TensorFlow, PyTorch, GANs, GRU",
    "Cybersecurity: SOC Automation, DFIR, Threat Detection"
  ],

  highlights: [
    "⚙️ 3+ years across ML modeling, backend APIs & security automation",
    "🤖 GANs for fashion design; AI-based acoustic threat detection",
    "☁️ AWS / Docker / Kubernetes; reliable CI/CD pipelines",
    "💬 Open to collaboration and always learning"
  ],

  ctaPrimary: { label: "Explore Projects 🚀", href: "/projects" },
  ctaSecondary: { label: "View Résumé 📄", href: "/resume" }
};

export const QUICK_STACK = [
  "Java",
  "Python",
  "FastAPI",
  "Spring Boot",
  "Kafka",
  "Docker",
  "Kubernetes",
  "AWS",
  "Next.js",
  "PostgreSQL"
];

/* ── Projects (cards) ─────────────────────────────────────────────────────── */
export const PROJECTS = [
  {
    title: "Evosys - AIOS",
    role: "Agentic AI",
    date: "2025",
    stack: [
      "OCR",
      "Ollama",
      "Speech Recognition",
      "GPT-4o", 
      "Gemini Pro Vision",
      "Claude 3",
      "LLaVa"
    ],
    highlights: [
      "An Automated Multimodal Agent for Kernel Orchestration"
    ],
    link: "https://github.com/TarunBevara10/EvoSys"
  },
  {
    title: "Database AI Agent to convert from NL to SQL ",
    role: "Agentic AI",
    date: "2025",
    stack: ["Microsoft Semantic Kernel",
      "Azure OpenAI",
      ".NET 8",
      "C#",
      "SQLite",
      "Docker",
      "MCP"],
    highlights: [
      "Database Agent with Microsoft Semantic Kernel and Azure OpenAI"
    ],
    link: "https://github.com/TarunBevara10/Database-Agent"
  },
  {
    title: "Banking AI Agent",
    role: "Agentic AI",
    date: "2025",
    stack: ["React", "TypeScript",
      "FastAPI", "Python 3.9+", "Google ADK", "WebSockets","A2A Protocol"],
    highlights: ["Banking AI agent using Google's A2A and ADK"],
    link: "https://github.com/TarunBevara10/Banking-AI-Agent"
  },
  {
    title: "Graph-Based RAG Autonomous Agent",
    role: "Agentic AI",
    date: "2025",
    stack: ["LangChain", "FAISS",
"Streamlit", "Python"],
    highlights: [
      "Graph based RAG Autonomous Agent"
    ],
    link: "https://github.com/TarunBevara10/Graph-based-RAG-Autonomous-Agent"
  },
  {
    title: "Game Dynamics Analyzer - A computer vision approach for football using YOLOv11",
    role: "Agentic AI",
    date: "2025",
    stack: ["YOLOv11","OpenCV","Scikit-learn", "Lucas–Kanade","Matplotlib","NumPy","Python"],
    highlights: ["Game Dynamics Analyzer - A computer vision approach for football using YOLOv11"],
    link: "https://github.com/TarunBevara10/Game-Dynamics-Analyzer-A-CV-tool-for-Football-using-YOLOv11"
  },
  // {
  //   title: "AI Chatbot",
  //   role: "NLP Engineer",
  //   date: "2023",
  //   stack: ["TensorFlow", "TFLearn", "NLTK"],
  //   highlights: ["Intent-based chatbot for cybersecurity FAQs"],
  //   link: "https://github.com/kalyani-25/AI-Chatbot"
  // }
];

/* ── Publications ─────────────────────────────────────────────────────────── */
export const PUBLICATIONS = [
  {
    title:
      "PIT Tag Impact on Lamprey Movement Using AI Driven Tracking under Low Light",
    venue: "Research Work",
    link: "https://drive.google.com/file/d/1ztBxSHBaMzKCXxFnh3ltyRX9Tpp2Vx_B/view?usp=sharing"
  },
  {
    title: "Paligemma Implementation (Vision Language Model) from Scratch",
    venue: "Paper Implementation",
    link: "https://github.com/TarunBevara10/Vision-Transformer-Paligemma-from-Scratch"
  },
  {
    title:
      "Creating a Tranformer From Scratch",
    venue: "Paper Implementation",
    link: "https://github.com/TarunBevara10/Creating-a-Transformer-From-Scratch"
  }
];
/* ── Education ─────────────────────────────────────────────────────────── */
export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "Central Michigan University",
    location: "Mount Pleasant, MI, USA",
    start: " Jan 2024",
    end: "Dec 2025",
    highlights: [
      "GPA: 3.95/4.0",
      "Coursework: Machine Learning, Artificial Intelligence, Data Mining and Pattern Recognition, Software and Data Modeling, Database and Management System, Applied Data Engineering, Cloud Computing, Design & Analysis of Algorithms",
      "Working as a Security Analyst–AI/ML , Office of Information Technology"
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "GITAM University",
    location: "Hyderabad, India",
    start:"June 2018",
    end: "May 2022",
    highlights: [        "GPA: 8.71/10",

      "Coursework: Coursework: Data Structures, Object Oriented Programming, Probability and Statisics, Computer Organization and Architecture, Operating Systems, Computer Networks, Database Management Systems, Design and Analysis of Algorithms, Data Mining and Data Warehousing, Artificial Intelligence, Compiler Design, Machine Learning, Cryptography and Network Security"],

  },
];

/* ── Skills ────────────────────────────────────────────────────────────── */
export const SKILLS = {
  Languages: [" Python", "C++", "C#", "Java", "JavaScript", "SQL", ".NET", "CUDA"],
  webDev: [    "FastAPI",
    "Flask",
    "REST",
    "GraphQL",
    "WebSockets",
    "OpenAPI",
    "ReactJS",
    "React Native",
    "Angular"],
  Database: [   "PostgreSQL",
    "MySQL",
    "Qdrant",
    "Redis",
    "Azure SQL",
    "Elastic Stack (Elasticsearch, Kibana, Logstash)"],
  Visualization: [    "Tableau",
    "Plotly",
    "Seaborn",
    "Matplotlib",
    "Pandas",
    "NumPy",
    "Grafana"],
  Deployment: [    "Jenkins Pipeline",
    "Docker",
    "Kubernetes",
    "Vertex AI Pipelines",
    "Google Cloud Run",
    "Google Kubernetes Engine"],
  security: ["Microsoft 365 Defender", "Elastic Stack (ELK)", "SIEM", "DFIR", "Threat Hunting"],
  AI_ML: [    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "LangChain",
    "Hugging Face Transformers",
    "vLLM",
    "Ollama",
    "Optuna",
    "ONNX Runtime",
    "Nvidia Triton",
    "TensorFlow Lite",
    "Gemini Models",
    "Google ADK",
    "A2A Protocol",
    "AWS Sagemaker"],
  Cybersecurity: ["Microsoft Defender","Elastic Stack","Dockerized Sandboxing", "Wireshark","Nmap","Metasploit"],
  CoreCS:["Data Structures","Algorithms","Operating Systems","Distributed Systems","Systems Programming"],
  CloudDevops: [    "Microsoft Azure",
    "Azure AI Foundry",
    "Azure OpenAI",
    "Azure Functions",
    "Docker",
    "Azure Kubernetes Services",
    "Jenkins",
    "GitHub Actions",
    "Google Cloud Platform (Vertex AI, TPU VMs, Cloud Storage, Matching Engine, Speech-to-Text/TTS)",
    "AWS (SageMaker, Lambda, ECS)"],
    other: [    "PowerShell",
    "Terraform",
    "App Dynamics",
    "Grafana",
    "CI/CD Automation"]
};

/* ── Certifications (edit years/links as needed) ───────────────────────── */
export const CERTIFICATIONS = [
   {
    title: "The Transformer Paradigm: Rethinking Sequence Modeling Through Attention",
    issuer: "",
    year: "2025",
    link: "https://medium.com/@tarunbevara10/the-transformer-paradigm-rethinking-sequence-modeling-through-attention-6df9d3111935",
    image: "transformer.png"

  },
  {
    title: "Inside PaliGemma: Building an Open, Transferable 3B Vision-Language Model",
    issuer: "",
    year: "2025",
    link: "https://medium.com/@tarunbevara10/inside-paligemma-building-an-open-transferable-3b-vision-language-model-adb43c8ea3d4",
    image: "VIT.png"
  },
    {
    title: "Less Is More: My Deep Dive into Recursive Reasoning with Tiny Networks",
    issuer: "",
    year: "2025",
    link: "https://medium.com/@tarunbevara10/less-is-more-my-deep-dive-into-recursive-reasoning-with-tiny-networks-824885b6f9db",
    image: "Less.png"
  },
];

/* ──────────────────────────────────────────────────────────────
   EXPERIENCE
────────────────────────────────────────────────────────────── */
export const EXPERIENCE = [
  {
    title: "Security Analyst – AI/ML ",
    company: "Central Michigan University",
    location: "Mount Pleasant, MI, USA",
    start: "June 2025",
    end: "Present",
    stack: [""],
    bullets: [
      // "Engineered scalable event-driven backend frameworks using Python, Kafka, and Microsoft Graph API to automate multi-tenant data flows, enhancing system performance, observability, and scalability while reducing manual triage workload by 70%",
      // "Designed Kafka-based data pipelines integrating multi-source event streams into Elastic Stack, enabling real-time analytics (10K+ events/day) with sub-second latency",
      // "Built Python anomaly detection system using pandas, OOP, and ML algorithms, achieving 90% accuracy on large-scale event streams",
      // "Automated ETL and CI/CD workflows on AWS and Azure boosting data throughput by 30% and ensuring reliable real-time deployments",
      // "Applied LLMs and agent frameworks to integrate AI-driven analytics and workflow automation into real-time systems"
    ],
  },
    {
    title: "Research Assistant ",
    company: "Central Michigan University",
    location: "Mount Pleasant, MI, USA",
    start: "Jan 2025",
    end: "Present",
    stack: [""],
    bullets: [
      // "Engineered scalable event-driven backend frameworks using Python, Kafka, and Microsoft Graph API to automate multi-tenant data flows, enhancing system performance, observability, and scalability while reducing manual triage workload by 70%",
      // "Designed Kafka-based data pipelines integrating multi-source event streams into Elastic Stack, enabling real-time analytics (10K+ events/day) with sub-second latency",
      // "Built Python anomaly detection system using pandas, OOP, and ML algorithms, achieving 90% accuracy on large-scale event streams",
      // "Automated ETL and CI/CD workflows on AWS and Azure boosting data throughput by 30% and ensuring reliable real-time deployments",
      // "Applied LLMs and agent frameworks to integrate AI-driven analytics and workflow automation into real-time systems"
    ],
  },
  {
    title: "Senior Analyst - Machine Learning Engineer",
    company: "Tiger Analytics",
    location: "India",
    start: "June 2023",
    end: "Dec 2023",
    stack: [""],
    bullets: [
    
      // "Designed REST APIs and microservices in Java/Python, containerized with Docker + Kubernetes for large-scale applications with high availability, load balancing, and fault tolerance",
      // "Built AI-powered services on AWS (EC2, Lambda, SageMaker) with real-time inference, reducing response latency by 50%",
      // "Developed CI/CD pipelines and automated test suites with GitHub Actions and Kubernetes, cutting release cycles by 65% while ensuring secure, performance-tested deployments",
      // "Optimized backend systems using data structures, concurrency techniques, and OOP refactoring, achieving 3× throughput, reduced costs, and improved scalability",
      // "Integrated NLP modules with FastAPI/Flask into production APIs, enhancing information retrieval and real-time classification inscalable software services",
    ],
  },
   {
    title: " Analyst - Machine Learning Engineer",
    company: "Tiger Analytics",
    location: "India",
    start: "June 2022",
    end: "June 2023",
    stack: [""],
    bullets: [
    
      // "Designed REST APIs and microservices in Java/Python, containerized with Docker + Kubernetes for large-scale applications with high availability, load balancing, and fault tolerance",
      // "Built AI-powered services on AWS (EC2, Lambda, SageMaker) with real-time inference, reducing response latency by 50%",
      // "Developed CI/CD pipelines and automated test suites with GitHub Actions and Kubernetes, cutting release cycles by 65% while ensuring secure, performance-tested deployments",
      // "Optimized backend systems using data structures, concurrency techniques, and OOP refactoring, achieving 3× throughput, reduced costs, and improved scalability",
      // "Integrated NLP modules with FastAPI/Flask into production APIs, enhancing information retrieval and real-time classification inscalable software services",
    ],
  },
    {
    title: "Data Analyst",
    company: "Tiger Analytics",
    location: "India",
    start: "Jan 2022",
    end: "May 2022",
    stack: [""],
    bullets: [
    
      // "Designed REST APIs and microservices in Java/Python, containerized with Docker + Kubernetes for large-scale applications with high availability, load balancing, and fault tolerance",
      // "Built AI-powered services on AWS (EC2, Lambda, SageMaker) with real-time inference, reducing response latency by 50%",
      // "Developed CI/CD pipelines and automated test suites with GitHub Actions and Kubernetes, cutting release cycles by 65% while ensuring secure, performance-tested deployments",
      // "Optimized backend systems using data structures, concurrency techniques, and OOP refactoring, achieving 3× throughput, reduced costs, and improved scalability",
      // "Integrated NLP modules with FastAPI/Flask into production APIs, enhancing information retrieval and real-time classification inscalable software services",
    ],
  },
    {
    title: "Data Scientist",
    company: "Smart Knower",
    location: "India",
    start: "Jan 2021",
    end: "Dec 2021",
    stack: [""],
    bullets: [
    
      // "Designed REST APIs and microservices in Java/Python, containerized with Docker + Kubernetes for large-scale applications with high availability, load balancing, and fault tolerance",
      // "Built AI-powered services on AWS (EC2, Lambda, SageMaker) with real-time inference, reducing response latency by 50%",
      // "Developed CI/CD pipelines and automated test suites with GitHub Actions and Kubernetes, cutting release cycles by 65% while ensuring secure, performance-tested deployments",
      // "Optimized backend systems using data structures, concurrency techniques, and OOP refactoring, achieving 3× throughput, reduced costs, and improved scalability",
      // "Integrated NLP modules with FastAPI/Flask into production APIs, enhancing information retrieval and real-time classification inscalable software services",
    ],
  },
];
/* ──────────────────────────────────────────────────────────────
   EXPORT EVERYTHING
────────────────────────────────────────────────────────────── */
export default {
  PROFILE,
  EDUCATION,
  SKILLS,
  CERTIFICATIONS,
  EXPERIENCE,
};