import { MongoClient } from 'https://deno.land/x/mongo/mod.ts';
import { load } from 'https://deno.land/x/tiny_env/mod.ts';

load();
const client = new MongoClient();
const MONGO_URI = Deno.env.get('MONGO_URI');

await client.connect(MONGO_URI);
const db = client.database('deno');

export default db;
