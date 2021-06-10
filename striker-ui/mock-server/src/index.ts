import express from 'express';
import cors from 'cors';
import route from './routes';

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use('/', route);

app.use((req, res) => {
  console.log(`Attempted to access the following unknown URL: ${req.url}`);
  res.status(404).send('Error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
