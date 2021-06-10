import express from 'express';
import getAnvils from './getAnvils';
import getAnvilsCPU from './getAnvilsCPU';
import getAnvilStatus from './getAnvilStatus';
import getAnvilsMemory from './getAnvilsMemory';
import getAnvilsSharedStorage from './getAnvilsSharedStorage';
import getAnvilsServers from './getAnvilsServers';
import getAnvilsNetwork from './getAnvilsNetwork';
import getReplicatedStorage from './getAnvilsReplicatedStorage';

import setPower from './setPower';
import setMembership from './setMembership';

const router = express.Router();

router.use('/get_anvils', getAnvils);
router.use('/get_cpu', getAnvilsCPU);
router.use('/get_memory', getAnvilsMemory);
router.use('/get_shared_storage', getAnvilsSharedStorage);
router.use('/get_servers', getAnvilsServers);
router.use('/get_status', getAnvilStatus);
router.use('/get_networks', getAnvilsNetwork);
router.use('/get_replicated_storage', getReplicatedStorage);

router.use('/set_power', setPower);
router.use('/set_membership', setMembership);

export default router;
