import express, { json } from 'express';
import router from './routes/index.js';
import cors from 'cors';
import connectTodb from './utils/connectToDB.js';

const PORT = process.env.PORT || 5002;
const app = express();
app.use(cors());

app.use(json());
app.use(router);

app.get('/', (_, res) => {
  res.json({ message: 'Felicidades haz hecho tu primer endpoint' });
});

app.listen(PORT, () => {
  console.log('App funcionando correctamente');
  connectTodb();
});
