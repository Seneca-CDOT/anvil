import express from 'express';
import path from 'path';

import anvils from './anvils';

const router = express.Router();

router.use('/', express.static(path.join(__dirname, '../../build')));
router.use('/anvils', anvils);

export default router;
