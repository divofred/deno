import { MongoClient } from 'https://deno.land/x/mongo/mod.ts';

const client = new MongoClient();
const MONGO_URI =
  'mongodb+srv://admin:admin@deno.7hf2tpd.mongodb.net/deno?authMechanism=SCRAM-SHA-1';
console.log(MONGO_URI);
await client.connect(MONGO_URI);
const db = client.database('deno');

export default db;
