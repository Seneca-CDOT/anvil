import express from 'express';

const router = express.Router();

router.put('/', (req, res) => {
  console.log('set_membership');
  console.log(req.body);
  res.json({ endpoint: 'set_membership', ...req.body });
});

export default router;
