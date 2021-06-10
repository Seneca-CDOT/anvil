import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const data = fs.readFileSync(
  path.join(__dirname, '../../../data/anvils_servers.json'),
);
const sleep = (ms: number) =>
  new Promise((res) => setTimeout(() => res('waiting'), ms));

router.get('/', async (req, res) => {
  const { anvil_uuid } = req.query;

  const parsedData: AnvilsServer = JSON.parse(data.toString());
  let selectedAnvil = {};

  if (typeof anvil_uuid === 'string') selectedAnvil = parsedData[anvil_uuid];
  console.log('get_servers');

  await sleep(2000);

  res.json(selectedAnvil);
});

export default router;
