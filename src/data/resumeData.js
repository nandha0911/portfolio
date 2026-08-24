/**
 * Strictly extracted information from Nandha R's Resume.
 * No fabricated data added.
 */

export const resumeData = {
  personal: {
    name: "Nandha R",
    title: "Data Scientist & AI / ML Engineer",
    role: "Data Scientist at Gradtwin-Chennai",
    location: "Chennai (Current) & Dharmapuri (Native), Tamil Nadu",
    currentLocation: "Chennai, Tamil Nadu, India",
    nativeLocation: "Dharmapuri, Tamil Nadu, India",
    phone: "+91-9080086811",
    email: "krnandha143@gmail.com",
    linkedin: "https://linkedin.com/in/nandha-k-r",
    linkedinUsername: "nandha-k-r",
    github: "https://github.com/nandha0911",
    githubUsername: "nandha0911",
    avatar: "/profile.jpg",
    objective: "To work in an environment offering challenging career opportunities where I can apply and enhance my skills for solving diverse technical problems.",
    summary: "Data Scientist and Computer Science Engineer with hands-on expertise in architecting end-to-end Python data pipelines, building production-grade RAG AI chatbots, and training predictive machine learning models. Experienced in offline AI architectures, vector search with ChromaDB, hybrid dense+sparse retrieval, and turning complex datasets into high-impact operational solutions."
  },

  skills: {
    categories: [
      {
        name: "Programming Languages",
        icon: "Code2",
        skills: [
          { name: "Python", level: 92, badge: "Primary Language" },
          { name: "Java", level: 80, badge: "Core & OOP" },
          { name: "SQL", level: 85, badge: "Data Querying" }
        ]
      },
      {
        name: "AI, RAG & LLMs",
        icon: "Bot",
        skills: [
          { name: "RAG (Retrieval-Augmented Generation)", level: 92, badge: "Production Deployed" },
          { name: "ChromaDB Vector Storage", level: 90, badge: "Dense Vector Search" },
          { name: "Local LLMs via Ollama", level: 88, badge: "Privacy-First AI" },
          { name: "LLM APIs Integration", level: 90, badge: "Multi-Provider" },
          { name: "Sentence Transformers & BM25", level: 86, badge: "Hybrid Search" }
        ]
      },
      {
        name: "Machine Learning & Data Science",
        icon: "BrainCircuit",
        skills: [
          { name: "Exploratory Data Analysis (EDA)", level: 94, badge: "Multi-source Datasets" },
          { name: "Predictive Modeling", level: 88, badge: "Regression & Classification" },
          { name: "Systematic Feature Engineering", level: 90, badge: "Optimization" },
          { name: "Hyperparameter Tuning", level: 85, badge: "Benchmarking" },
          { name: "Data Cleaning & Transformation", level: 92, badge: "High-Volume Datasets" }
        ]
      },
      {
        name: "Speech AI & NLP",
        icon: "Mic",
        skills: [
          { name: "Speech Recognition (SR)", level: 86, badge: "Voice-to-Text" },
          { name: "Natural Language Processing (NLP)", level: 88, badge: "Intent & Semantics" },
          { name: "Text-to-Speech (TTS)", level: 84, badge: "Audio Synthesis" },
          { name: "Desktop Accessibility Automation", level: 85, badge: "Hands-Free UX" }
        ]
      },
      {
        name: "Frameworks & Deployment",
        icon: "Layers",
        skills: [
          { name: "FastAPI", level: 88, badge: "High-Performance APIs" },
          { name: "Streamlit", level: 90, badge: "Interactive AI Apps" },
          { name: "Python Data Pipelines", level: 92, badge: "End-to-End ETL" }
        ]
      }
    ]
  },

  experience: [
    {
      role: "Data Scientist",
      company: "Gradtwin",
      location: "Chennai, Tamil Nadu",
      period: "June 2026 – Present",
      status: "Current Role",
      highlights: [
        "Architected end-to-end Python data pipelines, performing rigorous EDA on multi-source datasets to uncover actionable business insights for client use cases.",
        "Developed and optimized predictive modeling workflows—including regression and classification pipelines—improving forecasting accuracy through systematic feature engineering, hyperparameter tuning, and model benchmarking.",
        "Designed and deployed a production-grade RAG AI chatbot integrating LLM APIs, ChromaDB vector storage, and semantic document retrieval, enabling automated query resolution over large document corpora.",
        "Cleaned, transformed, and engineered features from complex, high-volume datasets, reducing data preprocessing time and enabling reliable data-driven strategy deployment.",
        "Collaborated cross-functionally with engineering and product teams to implement ML-driven solutions that directly improved operational efficiency and business outcomes."
      ],
      technologies: ["Python", "RAG", "LLM APIs", "ChromaDB", "EDA", "Predictive Modeling", "Feature Engineering", "Data Pipelines"]
    }
  ],

  projects: [
    {
      id: "paperbrain-rag",
      title: "PDF Summarizer Chatbot Using RAG (PaperBrain)",
      date: "Jul 2026",
      category: "RAG & GenAI",
      subtitle: "PaperBrain: AI-Powered PDF Question Answering System",
      objective: "A privacy-first, fully offline RAG (Retrieval-Augmented Generation) chatbot for querying PDF documents. Powered by FastAPI, Streamlit, ChromaDB, and local LLMs via Ollama.",
      description: "Local and Private: No documents or chats leave your machine. Embeddings, vector storage, and language generation (via Ollama) run locally. Hybrid Search (Dense + Sparse): Fuses dense vector similarity search (Sentence Transformers) with BM25 keyword matching to deliver highly accurate context retrieval.",
      keyFeatures: [
        "100% Offline & Private AI – all embeddings and LLM generation run locally via Ollama.",
        "Hybrid Search Engine – Combines dense embeddings (Sentence Transformers) with sparse BM25 keyword matching.",
        "Vector Storage – Persistent index management using ChromaDB for sub-second semantic retrieval.",
        "Modern Stack – Powered by high-speed FastAPI backend and interactive Streamlit UI.",
        "Accurate Context Retrieval – Contextual chunking and reranking for document question answering."
      ],
      technologies: ["Python", "FastAPI", "Streamlit", "ChromaDB", "Ollama", "Sentence Transformers", "BM25", "RAG"],
      githubUrl: "https://github.com/nandha0911/Paperbrain-PDF-Summarizer-chatbot-using-RAG",
      liveDemoUrl: null,
      featured: true,
      badge: "Flagship RAG Project"
    },
    {
      id: "voice-assistant-desktop",
      title: "The Voice Assistant with Desktop Accessibility",
      date: "Mar 2026",
      category: "Voice & Speech AI",
      subtitle: "AI-Powered Voice Assistant with Hands-Free Desktop Control",
      objective: "Creating accessible and intuitive technology is crucial for enhancing user experiences in today’s digital world. This project harnesses advanced artificial intelligence (AI) to transform how users interact with their desktops.",
      description: "The assistant features state-of-the-art Speech Recognition (SR) to seamlessly convert spoken commands into text, and Natural Language Processing (NLP) to understand and interpret these commands. With Text-to-Speech (TTS) technology, it provides clear and responsive voice feedback, delivering a complete hands-free desktop experience.",
      keyFeatures: [
        "Speech Recognition (SR) – Real-time voice-to-text conversion with high transcription accuracy.",
        "Natural Language Processing (NLP) – Intent detection and semantic command routing.",
        "Text-to-Speech (TTS) – Responsive voice feedback for hands-free audio confirmation.",
        "Desktop Accessibility – Voice-guided desktop automation assisting accessibility and productivity.",
        "End-to-end Python Integration – Low-latency audio stream processing and system execution."
      ],
      technologies: ["Python", "Speech Recognition (SR)", "NLP", "Text-to-Speech (TTS)", "Desktop Automation", "Audio Processing"],
      githubUrl: "https://github.com/nandha0911",
      liveDemoUrl: null,
      featured: true,
      badge: "Accessibility AI"
    },
    {
      id: "property-valuation-ml",
      title: "Residential Property Valuation Using Machine Learning",
      date: "Feb 2025",
      category: "Machine Learning",
      subtitle: "Predictive Real Estate Valuation & Price Forecasting",
      objective: "House price prediction is a widely researched area in the field of data science and machine learning due to its practical importance in the real estate industry. Developing models that accurately estimate property prices based on location, area, number of rooms, and nearby amenities.",
      description: "Historically, house price approximation was based chiefly on professional assessments, past performances analysis, and manual comparisons. These traditional means tend to bog down when processing increasing depth and volume of real estate information. Machine Learning (ML) prevails by assessing large data collections, discovering elusive patterns, and providing precise forecasting.",
      keyFeatures: [
        "Predictive Modeling – Regression algorithms for property valuation.",
        "Exploratory Data Analysis (EDA) – Rigorous distribution analysis and outlier detection.",
        "Feature Engineering – Geo-spatial location scoring, room ratios, and amenity proximity metrics.",
        "Pattern Discovery – Identifies non-linear valuation patterns across high-volume real estate datasets.",
        "Benchmarked Evaluation – Model validation using standard accuracy and regression metrics."
      ],
      technologies: ["Python", "Machine Learning", "Regression Pipelines", "EDA", "Feature Engineering", "Scikit-Learn", "Data Analytics"],
      githubUrl: "https://github.com/nandha0911",
      liveDemoUrl: null,
      featured: true,
      badge: "ML Forecasting"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Vinayaka Mission's Kirupananda Variyar Engineering College",
      location: "Salem, Tamil Nadu",
      duration: "2022 – 2026",
      score: "73.76%",
      type: "Undergraduate Degree",
      icon: "GraduationCap",
      details: "Comprehensive training in computer science, software engineering, algorithms, data structures, and applied AI/ML systems."
    },
    {
      degree: "Higher Secondary School Examination (HSC)",
      institution: "Government Higher Secondary School",
      location: "Salem, Tamil Nadu",
      duration: "2021 – 2022",
      score: "52.8%",
      type: "Higher Secondary",
      icon: "School",
      details: "Higher secondary curriculum with strong focus on science and foundational mathematics."
    },
    {
      degree: "Secondary School Examination (SSLC)",
      institution: "Government Higher Secondary School",
      location: "Salem, Tamil Nadu",
      duration: "2019 – 2020",
      score: "72.5%",
      type: "Secondary School",
      icon: "Award",
      details: "Secondary school education building core academic fundamentals."
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Data Science in Python Training Program",
      issuer: "IIIT KOTTAYAM Engineering College",
      year: "2024",
      category: "Data Science",
      description: "Participated in an intensive training program on Python for Data Science covering data analysis, preprocessing, and statistical modeling.",
      badge: "IIIT Training"
    },
    {
      id: 2,
      title: "Green Skill and AI Course Certification",
      issuer: "Edunet Foundation",
      year: "2025",
      category: "Artificial Intelligence",
      description: "Successfully completed course certification in Green Skills and Artificial Intelligence fundamentals and applied methodologies.",
      badge: "Certified Course"
    },
    {
      id: 3,
      title: "1st Prize Winner - Kongu IPL AUCTION 2025",
      issuer: "Kongu Engineering College",
      year: "2025",
      category: "Competition & Strategy",
      description: "Secured 1st prize in the competitive analytical IPL Auction event demonstrating strategic resource allocation, valuation, and bidding optimization.",
      badge: "1st Prize Winner 🏆"
    },
    {
      id: 4,
      title: "Paper Presentation on 'IOT in Military Security'",
      issuer: "KSR Engineering College",
      year: "2023",
      category: "Research & Presentation",
      description: "Participated in technical paper presentation on Internet of Things (IoT) applications and protocols in modern military security frameworks.",
      badge: "Paper Presentation"
    }
  ],

  contact: {
    email: "krnandha143@gmail.com",
    phone: "+91-9080086811",
    location: "Dharmapuri, Tamil Nadu",
    workplace: "Chennai, Tamil Nadu",
    linkedin: "https://linkedin.com/in/nandha-k-r",
    github: "https://github.com/nandha0911",
    availableFor: "Data Science, Machine Learning, RAG/AI Solutions & Technical Collaboration"
  }
};
