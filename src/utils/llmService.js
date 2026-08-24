import { resumeData } from '../data/resumeData.js';
import { queryResumeBot } from './chatbotRAG.js';

/**
 * System prompt that enforces strict grounding on Nandha R's resume.
 */
const SYSTEM_PROMPT = `You are "Ask Me", the official AI Portfolio Assistant for Nandha R.
Your job is to answer questions from recruiters and visitors about Nandha R's skills, projects, experience, education, certifications, and contact information.

STRICT RULES:
1. Use ONLY the provided resume context and portfolio information below.
2. Do NOT invent, assume, or hallucinate information that is not explicitly stated in the context.
3. If the user asks anything outside the resume/portfolio (such as general knowledge, politics, recipes, weather, unrelated code, personal life not mentioned in the resume), you MUST respond with this exact sentence:
   "I don't have that information in the portfolio. Please contact the portfolio owner directly for more details."
4. Be polite, professional, concise, and recruiter-friendly. Highlight Nandha's strengths in Data Science, Python, RAG AI, ChromaDB, and Machine Learning when relevant.
5. Format your answers neatly using bullet points and bold highlights where appropriate.

--- RESUME CONTEXT ---
Name: ${resumeData.personal.name}
Role: ${resumeData.personal.role}
Title: ${resumeData.personal.title}
Location: ${resumeData.personal.location}
Email: ${resumeData.personal.email}
Phone: ${resumeData.personal.phone}
LinkedIn: ${resumeData.personal.linkedin}
GitHub: ${resumeData.personal.github}
Objective: "${resumeData.personal.objective}"

Experience:
- Role: Data Scientist at Gradtwin, Chennai (June 2026 – Present)
  Highlights:
  * Architected end-to-end Python data pipelines, performing rigorous EDA on multi-source datasets to uncover actionable business insights for client use cases.
  * Developed and optimized predictive modeling workflows—including regression and classification pipelines—improving forecasting accuracy through systematic feature engineering, hyperparameter tuning, and model benchmarking.
  * Designed and deployed a production-grade RAG AI chatbot integrating LLM APIs, ChromaDB vector storage, and semantic document retrieval, enabling automated query resolution over large document corpora.
  * Cleaned, transformed, and engineered features from complex, high-volume datasets, reducing data preprocessing time and enabling reliable data-driven strategy deployment.
  * Collaborated cross-functionally with engineering and product teams to implement ML-driven solutions that directly improved operational efficiency and business outcomes.

Projects:
1. PDF Summarizer Chatbot using RAG (PaperBrain) [Jul 2026]
   - Objective: Privacy-first, fully offline RAG chatbot for querying PDF documents. Powered by FastAPI, Streamlit, ChromaDB, and local LLMs via Ollama. PaperBrain: AI-Powered PDF Question Answering System.
   - Architecture: 100% Local & Private offline processing (no data leaves machine). Local embeddings, ChromaDB vector storage, Ollama local LLMs. Hybrid Search (Dense Sentence Transformers + Sparse BM25) for highly accurate context retrieval.
   - GitHub: https://github.com/nandha0911/Paperbrain-PDF-Summarizer-chatbot-using-RAG

2. The Voice Assistant with Desktop Accessibility [Mar 2026]
   - Objective: AI-Powered Voice Assistant with Desktop Accessibility transforming how users interact with desktops.
   - Features: Speech Recognition (SR) to convert spoken commands into text, NLP to interpret commands, Text-to-Speech (TTS) for clear responsive voice feedback delivering hands-free desktop experience.
   - GitHub: https://github.com/nandha0911

3. Residential Property Valuation Using Machine Learning [Feb 2025]
   - Objective: Real estate house price prediction estimating property prices based on location, area, rooms, amenities.
   - Techniques: Machine Learning assessing large data collections, discovering elusive patterns, systematic EDA, feature engineering, regression modeling.
   - GitHub: https://github.com/nandha0911

Education:
- Bachelor of Engineering in Computer Science and Engineering (2022–2026), Vinayaka Mission's Kirupananda Variyar Engineering College, Salem, Tamil Nadu (73.76%)
- Higher Secondary School Examination (2021–2022), Government Higher Secondary School, Salem, Tamil Nadu (52.8%)
- Secondary School Examination (2019–2020), Government Higher Secondary School, Salem, Tamil Nadu (72.5%)

Technical Skills:
- Programming Languages: Java, Python, SQL
- AI & Machine Learning: RAG, ChromaDB, Ollama, Predictive Modeling, Regression, Classification, Feature Engineering, Hyperparameter Tuning, Benchmarking, EDA
- Speech & NLP: Speech Recognition (SR), NLP, Text-to-Speech (TTS), Sentence Transformers, BM25 Hybrid Search
- Frameworks & Tools: FastAPI, Streamlit, Python Data Pipelines

Certifications & Achievements:
1. Participated in IIIT KOTTAYAM Engineering College on training program (Data Science in Python).
2. Participated in KSR Engineering college Paper Presentation 2023 (IOT in military security).
3. Won 1st prize in Kongu Engineering college IPL AUCTION 2025.
4. Course Completed in Edunet Foundation 2025 (Green Skill and AI).
----------------------`;

/**
 * Call Google Gemini API
 */
async function callGeminiAPI(apiKey, userQuery, history = []) {
  const modelName = 'gemini-1.5-flash';
  const cleanKey = apiKey.trim();
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(cleanKey)}`;

  // Format conversation history for Gemini API
  const contents = [
    {
      role: 'user',
      parts: [{ text: `${SYSTEM_PROMPT}\n\nPlease acknowledge your instructions.` }]
    },
    {
      role: 'model',
      parts: [{ text: "Understood! I am Ask Me, Nandha R's AI Assistant. I will strictly answer using only the provided resume context and reject any out-of-scope queries with the exact required disclaimer." }]
    }
  ];

  // Add recent history
  for (const msg of history.slice(-6)) {
    contents.push({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    });
  }

  // Add current query
  contents.push({
    role: 'user',
    parts: [{ text: userQuery }]
  });

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': cleanKey
    },
    body: JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 600
      }
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    const errMsg = errData.error?.message || `Gemini API returned status ${response.status}`;
    throw new Error(errMsg);
  }

  const data = await response.json();
  const answerText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!answerText) {
    throw new Error("No answer generated by Gemini API");
  }

  // Determine section navigation link if relevant
  const localRAGResult = queryResumeBot(userQuery);

  return {
    text: answerText,
    action: localRAGResult.action,
    provider: 'Google Gemini (Live API)'
  };
}

/**
 * Call OpenAI API
 */
async function callOpenAIAPI(apiKey, userQuery, history = []) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const cleanKey = apiKey.trim();

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT }
  ];

  for (const msg of history.slice(-6)) {
    messages.push({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    });
  }

  messages.push({ role: 'user', content: userQuery });

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cleanKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.2,
      max_tokens: 600
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    const errMsg = errData.error?.message || `OpenAI API returned status ${response.status}`;
    throw new Error(errMsg);
  }

  const data = await response.json();
  const answerText = data.choices?.[0]?.message?.content;
  if (!answerText) {
    throw new Error("No answer generated by OpenAI API");
  }

  const localRAGResult = queryResumeBot(userQuery);

  return {
    text: answerText,
    action: localRAGResult.action,
    provider: 'OpenAI GPT-4o-mini (Live API)'
  };
}

/**
 * Master Router: Calls configured API Key or falls back to Smart Local RAG
 */
export async function generateAIResponse({ query, apiKey, provider = 'gemini', history = [] }) {
  const cleanKey = apiKey ? apiKey.trim() : '';

  // Check if API key is provided
  if (cleanKey) {
    try {
      if (provider === 'gemini') {
        return await callGeminiAPI(cleanKey, query, history);
      } else if (provider === 'openai') {
        return await callOpenAIAPI(cleanKey, query, history);
      }
    } catch (err) {
      console.warn(`[AI Service] Live API call failed (${err.message}). Falling back to Smart Local RAG.`, err);
      // Fallback with notification
      const localResult = queryResumeBot(query);
      return {
        ...localResult,
        warning: `Live API (${err.message}). Seamlessly answered via Local RAG Engine.`,
        provider: 'Local RAG (Fallback)'
      };
    }
  }

  // If no API key is set, use the built-in instant Local RAG Engine
  const localResult = queryResumeBot(query);
  return {
    ...localResult,
    provider: 'Local RAG Engine'
  };
}
