import express from 'express';
import route from './routes';

const app = express();

const port = 8080;

app.use('/', route);

app.use((req, res) => {
  /* eslint-disable no-console */
  console.log(`Attempted to access the following unknown URL: ${req.url}`);
  res.status(404).redirect(`/error?status=404`);
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`server started at http://localhost:${port}`);
});
