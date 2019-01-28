
import { Router } from 'express';
import OrganizationController from '../controlles/organization.controller';

const router = Router();

router
    .get('/', OrganizationController.get)
    .get('/:id', OrganizationController.getById)
    .post('/', OrganizationController.create)
    .put('/:id', OrganizationController.update);
   
module.exports = router;
