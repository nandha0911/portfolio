import { queryResumeBot } from './src/utils/chatbotRAG.js';

const testQueries = [
  'Tell me about yourself',
  'What are your skills?',
  'What projects have you worked on?',
  'Explain your experience',
  'What programming languages do you know?',
  'What are your education details?',
  'What technologies do you use?',
  'Tell me about your internship',
  'Which project is related to AI?',
  'What is your strongest skill?',
  'How can I contact you?',
  'Tell me about PaperBrain and ChromaDB',
  'Where did you go to college?',
  'What awards have you won?',
  // Out-of-scope queries (must trigger fallback)
  'What is your favorite food?',
  'What is the weather today?',
  'Can you write a poem about apples?'
];

console.log('=== TESTING RAG CHATBOT QUERIES ===\n');

for (const q of testQueries) {
  const result = queryResumeBot(q);
  console.log(`[Q]: "${q}"`);
  console.log(`[A]: ${result.text.substring(0, 100)}...`);
  if (result.action) {
    console.log(`[Action]: ${result.action.label} -> #${result.action.targetId}`);
  }
  console.log('--------------------------------------------------');
}
