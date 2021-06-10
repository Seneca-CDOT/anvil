import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const data = fs.readFileSync(
  path.join(__dirname, '../../../data/anvils_network.json'),
);

router.get('/', (req, res) => {
  const { anvil_uuid } = req.query;

  const parsedData: AnvilNetwork = JSON.parse(data.toString());
  let selectedAnvil = {};

  if (typeof anvil_uuid === 'string') selectedAnvil = parsedData[anvil_uuid];
  console.log('get_network');

  res.json(selectedAnvil);
});

export default router;
