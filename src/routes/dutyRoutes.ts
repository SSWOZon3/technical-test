import express from 'express';
import * as dutyController from '../controllers/dutyController';

const router = express.Router();

router.get('/', dutyController.getDuties);
router.post('/', dutyController.createDuty);
router.put('/:id', dutyController.updateDuty);

export default router;
