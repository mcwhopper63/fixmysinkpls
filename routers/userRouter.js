import { Router } from 'express';
import { authorizePermissions } from '../middleware/authMiddleware.js';

import {
    getCurrentUser,
    getApplicationStats,
    updateUser,
} from '../controllers/userController.js';
const router = Router();

router.get('/current-user', getCurrentUser);
router.get(
    '/admin/app-stats',
    authorizePermissions('admin'),
    getApplicationStats
);
router.patch('/update-user', updateUser);

export default router;
