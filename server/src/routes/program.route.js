import { Router } from 'express';
import ProgramController from '../controlles/program.controller';

const router = Router();

router.post('/', ProgramController.create)
    .put('/:id', ProgramController.update)
    .get('/:id', ProgramController.getById);

module.exports = router;
