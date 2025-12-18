import { Router } from 'express';
import userRoutes from './users';
import todoRoutes from './todos';

const router = Router();

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);

export default router;

