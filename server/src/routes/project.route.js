import { Router } from 'express';
import ProjectController from '../controlles/project.controller';

const router = Router();

router
.post('/', ProjectController.create)
.put('/:id', ProjectController.update)
.get('/:id', ProjectController.getById);


module.exports = router;
