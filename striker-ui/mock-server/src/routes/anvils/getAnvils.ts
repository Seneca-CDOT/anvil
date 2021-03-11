import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// console.log(path.join(__dirname, '../../../data/anvils.json'));
const data = fs.readFileSync(path.join(__dirname, '../../../data/anvils.json'));

router.get('/', (req, res) => {
  res.json(JSON.parse(data.toString()));
});

export default router;
