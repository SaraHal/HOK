
import { Router } from 'express';
import OrganizationController from '../controlles/organization.controller';

const router = Router();

router
    .get('/', OrganizationController.get)
    .get('/:id', OrganizationController.getById)
    .get('/:id/customer', OrganizationController.getCustomers)
    .get('/:id/project', OrganizationController.getPrograms)
    .post('/', OrganizationController.create)
    .put('/:id', OrganizationController.update);

module.exports = router;
