import express from 'express';

import root from './root';
import anvils from './anvils';

const router = express.Router();

router.use('/', root);
router.use('/anvils', anvils);

export default router;
