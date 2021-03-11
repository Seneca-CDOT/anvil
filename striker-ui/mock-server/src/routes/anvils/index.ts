import express from 'express';
import getAnvils from './getAnvils';
import getAnvilsCPU from './getAnvilsCPU';
import getAnvilsMemory from './getAnvilsMemory';
import getAnvilsSharedStorage from './getAnvilsSharedStorage';

const router = express.Router();

router.use('/get_anvils', getAnvils);
router.use('/get_cpu', getAnvilsCPU);
router.use('/get_memory', getAnvilsMemory);
router.use('/get_shared_storage', getAnvilsSharedStorage);

router.get('/', (req, res) => {
  res.send('Hello world!');
});

export default router;
