
import { Router } from 'express';
import ProgramController from '../controlles/program.controller';

const router = Router();

router
    .get('/', ProgramController.get)
    .get('/:id', ProgramController.getById)
    .post('/', ProgramController.create)
    .put('/:id', ProgramController.update);

module.exports = router;
