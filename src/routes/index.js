import { Router } from 'express';
import taskRouter from './tasks.routes.js';

const router = Router();

router.use('/api/tasks', taskRouter);

export default router;
