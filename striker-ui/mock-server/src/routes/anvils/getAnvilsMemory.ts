import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const data = fs.readFileSync(
  path.join(__dirname, '../../../data/anvils_memory.json'),
);

router.get('/', (req, res) => {
  const { anvil_uuid } = req.query;

  const parsedData: AnvilsMemory = JSON.parse(data.toString());
  let selectedAnvil = {};

  if (typeof anvil_uuid === 'string') selectedAnvil = parsedData[anvil_uuid];
  console.log('get_memory');

  res.json(selectedAnvil);
});

export default router;
