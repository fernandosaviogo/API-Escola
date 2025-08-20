import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequire from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequire, alunoController.store);
router.put('/:id', loginRequire, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequire, alunoController.delete);

export default router;
