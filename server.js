import { Application, Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import {
  viewEngine,
  ejsEngine,
  oakAdapter,
} from 'https://deno.land/x/view_engine@v10.5.1/mod.ts';
// import db from './utils/database.js';

const app = new Application();
const router = new Router();
app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${
      hostname ?? 'localhost'
    }:${port}`
  );
});
app.use(
  viewEngine(oakAdapter, ejsEngine, {
    viewRoot: './views',
  })
);

app.use(router.routes());
app.use(router.allowedMethods());
// const collection = db.collection('deno');
router
  .get('/', ctx => {
    ctx.response.body = 'Hello World';
    // const data = await collection.find().toArray();
    // ctx.render('index.ejs', { data });
  })
  .post('/post', ctx => {
    // const value = await ctx.request.body('json').value;
    // collection.insertOne({ note: value.note });
    ctx.response.status = 201;
    ctx.response.body = { message: 'Created' };
  });

await app.listen({ port: 8000 });
