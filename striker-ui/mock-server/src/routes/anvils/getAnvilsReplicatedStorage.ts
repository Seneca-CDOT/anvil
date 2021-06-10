import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const data = fs.readFileSync(
  path.join(__dirname, '../../../data/server_resources.json'),
);

router.get('/', (req, res) => {
  const { server_uuid } = req.query;

  const parsedData: AnvilsReplicatedStorage = JSON.parse(data.toString());
  let selectedAnvil = {};

  if (typeof server_uuid === 'string') selectedAnvil = parsedData[server_uuid];
  console.log('get_replicated_storage');

  res.json(selectedAnvil);
});

export default router;
