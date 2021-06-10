import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const data = fs.readFileSync(path.join(__dirname, '../../../data/anvils.json'));

router.get('/', (req, res) => {
  console.log('get_anvils');
  res.json(JSON.parse(data.toString()));
});

export default router;
