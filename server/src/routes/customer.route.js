import { Router } from 'express';
import CustomerController from '../controlles/customer.conroller';

const router = Router();

router
.get('/:id', CustomerController.getById)
.get('/:id/program', CustomerController.getPrograms)
.post('/', CustomerController.create)
.put('/:id', CustomerController.update)
.delete('/:id', CustomerController.delete);

module.exports = router;
