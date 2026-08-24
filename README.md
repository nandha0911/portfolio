# 🌟 Nandha R — Data Scientist & AI/ML Engineer Portfolio

A modern, high-performance, and responsive personal portfolio website crafted for **Nandha R** (Data Scientist at Gradtwin Chennai & Computer Science Engineer).

All personal, technical, educational, and professional details are strictly derived from Nandha R's uploaded resume without fabrication.

---

## 🔑 API Key Integration & Dual Mode AI Assistant

This project supports **Dual-Mode AI Operation** with full API Key integration:

### 1. 🤖 Live LLM Mode (Google Gemini & OpenAI)
- **Supported Providers:**
  - **Google Gemini API** (`gemini-1.5-flash`) — Free from [Google AI Studio](https://aistudio.google.com)
  - **OpenAI API** (`gpt-4o-mini`) — From [OpenAI Platform](https://platform.openai.com)
- **Strict Grounding:** Injected with Nandha R's complete resume context and system prompt enforcing a strict rule: any out-of-scope question returns:
  > *"I don't have that information in the portfolio. Please contact the portfolio owner directly for more details."*
- **Two Ways to Set the API Key:**
  1. **In `.env` file:** Set `VITE_GEMINI_API_KEY=your_key_here` (or `VITE_OPENAI_API_KEY`).
  2. **Directly in UI:** Click the **🔑 Key Icon** inside the floating chatbot header to enter, change, or disconnect your API key at any time (stored securely in browser `localStorage`).

### 2. ⚡ Offline Smart RAG Mode (Zero API Key Needed)
- If no API key is provided, the chatbot automatically operates in **Local RAG Mode** using a client-side semantic retrieval and intent-matching engine over the resume knowledge graph.

### 3. 📬 Live Contact Form API (Web3Forms)
- Optional `VITE_WEB3FORMS_ACCESS_KEY` to forward contact messages directly to `krnandha143@gmail.com`.

---

## 🚀 Key Features

* **⚡ Modern UI/UX:** Built with React 18, Vite, and Tailwind CSS with smooth gradients, glassmorphism, and responsive typography.
* **🤖 Floating AI Chatbot ("Ask Me"):**
  * Live LLM API reasoning (Gemini / OpenAI) or built-in Local RAG engine.
  * Instant suggested query chips for fast recruiter discovery.
  * Direct action navigation links within AI replies that jump straight to relevant sections.
* **🌌 Interactive Neural Network Background:** Custom HTML5 Canvas rendering animated nodes and synaptic connections responding to mouse movements.
* **🌓 Dark & Light Mode Toggle:** Seamless theme switching with persistence in `localStorage`.
* **💼 Experience Timeline:** Interactive showcase of current Data Scientist role at **Gradtwin – Chennai** with deliverables, data pipeline architecture, and ML accomplishments.
* **🚀 Filterable Projects & Deep-Dive Modal:**
  * **PaperBrain: PDF Summarizer Chatbot using RAG** (Offline AI, FastAPI, Streamlit, ChromaDB, Ollama, Hybrid Dense + BM25 search)
  * **The Voice Assistant with Desktop Accessibility** (Speech Recognition, NLP, TTS, Desktop automation)
  * **Residential Property Valuation Using Machine Learning** (Predictive regression modeling, EDA, feature engineering)
  * Search by technology or keywords, category filter pills, GitHub links, and architectural breakdown modal.
* **🧠 Skills Matrix:** Categorized interactive skill cards with proficiency indicators (Python, Java, SQL, RAG, ChromaDB, ML, Speech AI, FastAPI, Streamlit).
* **🎓 Education & Certifications:**
  * BE in CSE from Vinayaka Mission's Kirupananda Variyar Engineering College (73.76%)
  * 1st Prize in Kongu Engineering College IPL AUCTION 2025
  * IIIT Kottayam Data Science in Python training program
  * Edunet Foundation Green Skill & AI course
  * KSR Engineering College Paper Presentation (IoT in military security)
* **📄 Interactive Resume Viewer & Download:** In-browser formatted printable resume preview and direct JSON export.
* **📬 Interactive Contact Section:** Email/Phone one-click copy, direct links, and validated message form.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18 (JSX) + Vite |
| **Styling & Theme** | Tailwind CSS 3, Custom Glassmorphism, CSS Animations |
| **Icons & Visuals** | Lucide React, HTML5 Canvas AI Particles, SVG Brand Icons |
| **LLM & RAG** | Google Gemini API, OpenAI API, Local RAG Engine (`chatbotRAG.js`, `llmService.js`) |
| **Contact API** | Web3Forms Public Submission API |
| **State & Persistence** | React Hooks, LocalStorage |

---

## 💻 Local Development Setup

### Steps to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **(Optional) Configure API Keys in `.env`:**
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` to view the live portfolio.

---

## 🚢 Building & Deployment

### Build for Production
```bash
npm run build
```

The output files will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.
