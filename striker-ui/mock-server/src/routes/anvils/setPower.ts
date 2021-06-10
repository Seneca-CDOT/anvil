import express from 'express';

const router = express.Router();

router.put('/', (req, res) => {
  console.log('set_power');
  console.log(req.body);
  res.json({ endpoint: 'set_power', ...req.body });
});

export default router;
