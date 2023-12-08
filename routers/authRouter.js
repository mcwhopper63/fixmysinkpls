import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';
import {
    validateRegisterInput,
    validateLoginInput,
} from '../middleware/validationMiddleware.js';

const router = Router();

// router.get('/', getAllUsers);

router.get('/logout', logout);
router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);

// router.route('/').get(getAllUsers).post(createUser);

// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
