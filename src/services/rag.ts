import { PGVectorStore } from '@langchain/community/vectorstores/pgvector';
import { embeddings } from './embbedings.js';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

const data = [
  'BEON.tech mission is to place the brightest tech talent in the most disruptive and innovative U.S. companies.',
  'BEON.tech offer IT staff augmentation services for every modern tech need from backend and frontend to AI, machine learning, DevOps and QA.',
  "At BEON.tech, building software means far more than just filling roles — it's about creating strong relationships, empowering careers and helping people grow.",
];

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const allSplits = await textSplitter.createDocuments(data);

export const vectorStore = await PGVectorStore.initialize(embeddings, {
  tableName: 'beon_tech_embeddings',
  postgresConnectionOptions: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'beon',
  },
});

export const getVectorStore = async () => {
  await vectorStore.addDocuments(allSplits);
  return vectorStore;
};
