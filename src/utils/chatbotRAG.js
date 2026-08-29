import { resumeData } from '../data/resumeData.js';

/**
 * Knowledge Base chunks compiled directly from Nandha R's resume.
 */
const knowledgeBase = [
  {
    id: 'bio',
    category: 'profile',
    keywords: ['about', 'yourself', 'who are you', 'introduce', 'nandha', 'profile', 'bio', 'summary', 'objective', 'role', 'title', 'data scientist'],
    questionExamples: ['tell me about yourself', 'who is nandha', 'what is your background', 'what is your career objective', 'introduce yourself'],
    generateAnswer: () => ({
      text: `Hello! I'm **${resumeData.personal.name}**, a **${resumeData.personal.title}** currently working as a **${resumeData.personal.role}** in ${resumeData.personal.location}.\n\n🎯 **Career Objective:**\n"${resumeData.personal.objective}"\n\n💡 **Core Focus:**\nI specialize in architecting end-to-end Python data pipelines, building production-grade RAG AI chatbots (with ChromaDB & Ollama), and developing high-accuracy predictive ML models.`,
      action: { label: 'View About Section', targetId: 'about' }
    })
  },
  {
    id: 'experience',
    category: 'experience',
    keywords: ['experience', 'work', 'job', 'gradtwin', 'chennai', 'company', 'role', 'internship', 'career', 'data scientist role', 'employment'],
    questionExamples: ['explain your experience', 'tell me about your job at gradtwin', 'what is your current role', 'where do you work', 'tell me about your internship and work experience'],
    generateAnswer: () => ({
      text: `💼 **Experience:** **Data Scientist Intern** at **Gradtwin – Chennai** (${resumeData.experience[0].period})\n\n**Key Responsibilities & Achievements:**\n• **Data Pipelines:** Architected end-to-end Python pipelines and performed rigorous EDA on multi-source datasets to uncover actionable business insights.\n• **Predictive Modeling:** Developed regression & classification pipelines with systematic feature engineering and hyperparameter tuning.\n• **RAG AI Chatbot:** Designed & deployed a production-grade RAG chatbot integrating LLM APIs, ChromaDB vector storage, and semantic document retrieval.\n• **Data Preprocessing:** Cleaned & engineered features from complex, high-volume datasets reducing preprocessing time.\n• **Cross-functional Impact:** Collaborated with engineering & product teams to implement ML-driven operational solutions.`,
      action: { label: 'Explore Experience Timeline', targetId: 'experience' }
    })
  },
  {
    id: 'skills_general',
    category: 'skills',
    keywords: ['skill', 'skills', 'technologies', 'tech stack', 'what do you know', 'tools', 'platforms', 'strength', 'strongest skill'],
    questionExamples: ['what are your skills', 'what technologies do you use', 'what is your strongest skill', 'what tech stack do you use'],
    generateAnswer: () => ({
      text: `🧠 **Technical Skills Summary:**\n\n• **Programming Languages:** Java, Python, SQL\n• **AI & RAG:** Retrieval-Augmented Generation, ChromaDB Vector Storage, Local LLMs (Ollama), LLM APIs, Sentence Transformers & BM25 Hybrid Search\n• **Data Science & ML:** Exploratory Data Analysis (EDA), Predictive Modeling (Regression & Classification), Feature Engineering, Hyperparameter Tuning, Model Benchmarking\n• **Speech AI & NLP:** Speech Recognition (SR), Natural Language Processing (NLP), Text-to-Speech (TTS), Desktop Accessibility\n• **Frameworks & Tools:** FastAPI, Streamlit, Python Data Pipelines\n\n💪 **Strongest Areas:** Python Data Pipelines, RAG AI Architectures, and Predictive ML Modeling.`,
      action: { label: 'View Skills Matrix', targetId: 'skills' }
    })
  },
  {
    id: 'skills_languages',
    category: 'skills',
    keywords: ['programming language', 'programming languages', 'languages', 'java', 'python', 'sql', 'coding languages'],
    questionExamples: ['what programming languages do you know', 'do you know python', 'do you know java', 'do you know sql'],
    generateAnswer: () => ({
      text: `💻 **Programming Languages from Resume:**\n\n1. **Python** – Primary language for Data Science, Machine Learning, RAG AI architectures, and data pipelines.\n2. **Java** – Object-oriented programming and software engineering fundamentals.\n3. **SQL** – Database querying, data manipulation, and structured data operations.`,
      action: { label: 'See All Skills', targetId: 'skills' }
    })
  },
  {
    id: 'projects_general',
    category: 'projects',
    keywords: ['project', 'projects', 'portfolio projects', 'work done', 'show projects', 'what have you built', 'what projects have you worked on', 'all projects'],
    questionExamples: ['what projects have you worked on', 'show your projects', 'list all projects', 'tell me about your projects'],
    generateAnswer: () => ({
      text: `🚀 **Featured Projects from Resume:**\n\n1. 🧹 **AI-Powered Data Cleaning & Imputation Engine (DataClean AI)** (Aug 2026)\n   • Intelligent data preprocessing system using a 97.8% accurate Voting Ensemble (XGBoost + LightGBM + CatBoost), 13+ anomaly detection, and 10 MB chunked streaming for 3M+ rows.\n\n2. 📄 **PDF Summarizer Chatbot using RAG (PaperBrain)** (Jul 2026)\n   • Privacy-first, offline RAG system with FastAPI, Streamlit, ChromaDB, and local Ollama LLMs with Hybrid Dense + Sparse BM25 search.\n\n3. 🎙️ **The Voice Assistant with Desktop Accessibility** (Mar 2026)\n   • AI voice assistant with Speech Recognition (SR), NLP intent handling, and Text-to-Speech (TTS) for hands-free desktop control.\n\n4. 🏡 **Residential Property Valuation Using Machine Learning** (Feb 2025)\n   • ML predictive modeling and regression analysis for accurate real estate price estimation using multi-factor feature engineering.`,
      action: { label: 'Browse Projects Grid', targetId: 'projects' }
    })
  },
  {
    id: 'project_dataclean',
    category: 'projects',
    keywords: ['dataclean', 'data clean', 'cleaning', 'imputation', 'xgboost', 'lightgbm', 'catboost', 'voting ensemble', '97.8', 'anomalies', 'outliers', 'profiling', 'streaming', 'docker', 'automl', 'data cleaning engine'],
    questionExamples: ['tell me about dataclean ai', 'what is the data cleaning and imputation engine', 'tell me about your automl project', 'which project achieves 97.8 accuracy', 'how does dataclean ai work'],
    generateAnswer: () => ({
      text: `🧹 **AI-Powered Data Cleaning and Imputation Recommendation Engine (DataClean AI)** [Aug 2026]\n\n• **Objective:** Intelligent, automated data preprocessing and quality enhancement system for tabular datasets.\n• **Tech Stack:** FastAPI, React.js, Scikit-learn, XGBoost, LightGBM, CatBoost, and Docker.\n• **Core Highlights:**\n  - **Automated Quality Detection:** Autonomously detects 13+ data anomalies (MCAR/MAR missingness, IQR/Z-score/MAD outliers, distribution skewness, class imbalance).\n  - **Hybrid AI Recommendation:** Combines 30+ domain heuristic rules with a Voting Ensemble classifier (XGBoost + LightGBM + CatBoost) achieving **97.8% accuracy** across 25 cleaning techniques.\n  - **Scalable Streaming Engine:** 10 MB chunked multipart upload pipeline handling multi-gigabyte datasets (3M+ rows) with zero-OOM memory streaming and automated PDF audit reporting.`,
      action: { label: 'View DataClean AI Project', targetId: 'projects' }
    })
  },
  {
    id: 'project_rag',
    category: 'projects',
    keywords: ['rag', 'pdf', 'summarizer', 'paperbrain', 'ollama', 'chromadb', 'hybrid search', 'dense', 'bm25', 'ai project', 'document qa'],
    questionExamples: ['tell me about paperbrain', 'which project is related to ai', 'tell me about your rag project', 'what is the pdf summarizer chatbot'],
    generateAnswer: () => ({
      text: `📄 **PDF Summarizer Chatbot Using RAG (PaperBrain)** [Jul 2026]\n\n• **Objective:** A privacy-first, fully offline RAG chatbot for querying PDF documents.\n• **Tech Stack:** Python, FastAPI, Streamlit, ChromaDB, Ollama, Sentence Transformers, BM25.\n• **Key Architecture:**\n  - 100% Local & Private: No data leaves your machine.\n  - Hybrid Search: Fuses dense vector similarity (Sentence Transformers) with sparse BM25 keyword matching for superior context retrieval.\n  - Vector Storage: ChromaDB for fast indexing & semantic lookup.`,
      action: { label: 'View Project Details', targetId: 'projects' }
    })
  },
  {
    id: 'project_voice',
    category: 'projects',
    keywords: ['voice', 'assistant', 'speech recognition', 'nlp', 'text to speech', 'tts', 'desktop accessibility', 'speech', 'audio'],
    questionExamples: ['tell me about the voice assistant', 'how does the desktop accessibility project work', 'explain your voice assistant project'],
    generateAnswer: () => ({
      text: `🎙️ **The Voice Assistant with Desktop Accessibility** [Mar 2026]\n\n• **Objective:** Transforming desktop interaction through accessible, hands-free AI.\n• **Technologies:** Python, Speech Recognition (SR), Natural Language Processing (NLP), Text-to-Speech (TTS), Desktop Automation.\n• **Functionality:** Converts spoken input into text, applies NLP to interpret user intent, and provides responsive audio feedback via TTS for complete hands-free navigation.`,
      action: { label: 'View Project Details', targetId: 'projects' }
    })
  },
  {
    id: 'project_ml',
    category: 'projects',
    keywords: ['property', 'valuation', 'house price', 'real estate', 'machine learning project', 'regression', 'residential property'],
    questionExamples: ['tell me about residential property valuation', 'how did you predict house prices', 'tell me about your machine learning project'],
    generateAnswer: () => ({
      text: `🏡 **Residential Property Valuation Using Machine Learning** [Feb 2025]\n\n• **Objective:** Accurate property price estimation overcoming traditional manual appraisal bottlenecks.\n• **Approach:** Leveraged Machine Learning (ML) on large real estate data collections to uncover patterns across location, square footage, room count, and amenities.\n• **Techniques:** Systematic Exploratory Data Analysis (EDA), feature engineering, and predictive regression modeling.`,
      action: { label: 'View Project Details', targetId: 'projects' }
    })
  },
  {
    id: 'education',
    category: 'education',
    keywords: ['education', 'degree', 'college', 'university', 'vinayaka mission', 'kirupananda', 'salem', 'school', 'marks', 'percentage', 'be', 'bachelor', 'cse', 'hsc', 'sslc', 'qualification', 'academic'],
    questionExamples: ['what are your education details', 'where did you study', 'what is your degree', 'what is your college name and score', 'tell me about your educational qualifications'],
    generateAnswer: () => ({
      text: `🎓 **Educational Qualifications:**\n\n1. **Bachelor of Engineering in Computer Science and Engineering (BE CSE)**\n   • **Institution:** Vinayaka Mission's Kirupananda Variyar Engineering College, Salem, Tamil Nadu\n   • **Duration:** 2022 – 2026 | **Score:** **73.76%**\n\n2. **Higher Secondary School Examination (HSC)**\n   • **Institution:** Government Higher Secondary School, Salem, Tamil Nadu\n   • **Duration:** 2021 – 2022 | **Score:** **52.8%**\n\n3. **Secondary School Examination (SSLC)**\n   • **Institution:** Government Higher Secondary School, Salem, Tamil Nadu\n   • **Duration:** 2019 – 2020 | **Score:** **72.5%**`,
      action: { label: 'View Education Timeline', targetId: 'education' }
    })
  },
  {
    id: 'certifications',
    category: 'certifications',
    keywords: ['certificate', 'certificates', 'certifications', 'achievement', 'achievements', 'award', 'awards', 'prize', 'iiit kottayam', 'edunet', 'kongu', 'ipl auction', 'ksr', 'paper presentation', 'green skill'],
    questionExamples: ['what certifications do you have', 'what are your achievements', 'tell me about the ipl auction prize', 'what training programs did you attend'],
    generateAnswer: () => ({
      text: `🏆 **Certifications & Key Achievements:**\n\n1. 🥇 **1st Prize Winner – Kongu Engineering College IPL AUCTION 2025**\n2. 📜 **Data Science in Python Training Program** – IIIT KOTTAYAM Engineering College\n3. 🌿 **Green Skill and AI Course Completed (2025)** – Edunet Foundation\n4. 📑 **Paper Presentation (2023)** on *IOT in Military Security* – KSR Engineering College`,
      action: { label: 'View Certifications', targetId: 'certifications' }
    })
  },
  {
    id: 'contact',
    category: 'contact',
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'get in touch', 'linkedin', 'github', 'mobile', 'call', 'location', 'where are you based'],
    questionExamples: ['how can i contact you', 'what is your email', 'what is your phone number', 'give me your linkedin and github', 'where are you located'],
    generateAnswer: () => ({
      text: `📞 **Contact & Location Details for Nandha R:**\n\n• **Location:** ${resumeData.personal.location}\n• **Availability:** Open to full-time Data Science & AI roles (Relocation / Remote)\n• **Email:** [${resumeData.personal.email}](mailto:${resumeData.personal.email})\n• **Phone:** [${resumeData.personal.phone}](tel:${resumeData.personal.phone.replace(/[^0-9+]/g, '')})\n• **LinkedIn:** [${resumeData.personal.linkedinUsername}](${resumeData.personal.linkedin})\n• **GitHub:** [${resumeData.personal.githubUsername}](${resumeData.personal.github})\n\nFeel free to send a message through the contact form below!`,
      action: { label: 'Open Contact Form', targetId: 'contact' }
    })
  },
  {
    id: 'greetings',
    category: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good evening', 'who are you', 'help'],
    questionExamples: ['hi', 'hello', 'hey there', 'good morning'],
    generateAnswer: () => ({
      text: `👋 Hello! I am **Ask Me**, Nandha R's AI Portfolio Assistant. I have complete knowledge of Nandha's background in Data Science, AI/ML projects (DataClean AI, PaperBrain RAG, Voice Assistant, Property Valuation), technical skills, education, and certifications.\n\nHow can I help you today? You can choose a quick question below or ask anything about Nandha's background!`,
      action: null
    })
  }
];

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'about',
  'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'can', 'could', 'would', 'should', 'will', 'shall', 'do', 'does', 'did',
  'have', 'has', 'had', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
  'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'whom', 'where',
  'when', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most',
  'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
  'than', 'too', 'very', 's', 't', 'just', 'don', 'now'
]);

/**
 * Clean & tokenize text for retrieval.
 */
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1 && !STOPWORDS.has(t));
}

/**
 * Strict Out-Of-Scope filter to ensure the AI NEVER invents information.
 */
const FORBIDDEN_OR_OUT_OF_SCOPE_WORDS = [
  'weather', 'capital of', 'president', 'movie', 'song', 'joke', 'recipe', 'cooking',
  'football', 'cricket match', 'stock price', 'bitcoin', 'crypto', 'politics',
  'favorite food', 'girlfriend', 'boyfriend', 'religion', 'horoscope', 'write code for',
  'calculate', 'solve this math', 'poem', 'story', 'sing', 'dance', 'game', 'play'
];

/**
 * Client-Side RAG Retrieval Engine
 */
export function queryResumeBot(userQuery) {
  const query = userQuery.trim();
  if (!query) {
    return {
      text: "Please type a question about Nandha's skills, projects, experience, education, or contact details!",
      action: null
    };
  }

  const queryLower = query.toLowerCase();
  const queryTokens = tokenize(queryLower);

  // Check out-of-scope patterns
  const isOutOfScope = FORBIDDEN_OR_OUT_OF_SCOPE_WORDS.some(term => queryLower.includes(term));
  if (isOutOfScope) {
    return {
      text: "I don't have that information in the portfolio. Please contact the portfolio owner directly for more details.",
      action: { label: 'Contact Nandha R', targetId: 'contact' }
    };
  }

  // Handle direct greetings
  if (/^(hi|hello|hey|greetings|hola|namaste|good\s(morning|afternoon|evening))\b/i.test(queryLower) && queryTokens.length <= 2) {
    const greetingChunk = knowledgeBase.find(c => c.id === 'greetings');
    return greetingChunk.generateAnswer();
  }

  // If after stopword filtering no significant tokens remain, fallback
  if (queryTokens.length === 0) {
    return {
      text: "I don't have that information in the portfolio. Please contact the portfolio owner directly for more details.",
      action: { label: 'Contact Nandha R', targetId: 'contact' }
    };
  }

  // Score knowledge chunks based on keyword matching + exact phrase matching
  let bestChunk = null;
  let highestScore = 0;

  for (const chunk of knowledgeBase) {
    if (chunk.id === 'greetings') continue;

    let score = 0;

    // Check keyword tokens (exact word boundary)
    for (const kw of chunk.keywords) {
      const regex = new RegExp(`\\b${kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      if (regex.test(queryLower)) {
        score += kw.length > 5 ? 4 : 2.5;
      }
    }

    // Check similarity with example questions
    for (const ex of chunk.questionExamples) {
      if (queryLower.includes(ex) || ex.includes(queryLower)) {
        score += 6;
      }
      // Common token overlap
      const exTokens = tokenize(ex);
      const overlap = queryTokens.filter(t => exTokens.includes(t)).length;
      score += overlap * 2.0;
    }

    if (score > highestScore) {
      highestScore = score;
      bestChunk = chunk;
    }
  }

  // Strict Threshold Check: If score is too low, strictly output fallback message
  if (!bestChunk || highestScore < 3.0) {
    return {
      text: "I don't have that information in the portfolio. Please contact the portfolio owner directly for more details.",
      action: { label: 'Contact Nandha R', targetId: 'contact' }
    };
  }

  return bestChunk.generateAnswer();
}
