import { embeddings } from './services/embbedings.js';
import { getVectorStore } from './services/rag.js';
import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  const vectorStore = await getVectorStore();
  const embedding = await embeddings.embedQuery('The mission of BEON.tech?');
};

main();
