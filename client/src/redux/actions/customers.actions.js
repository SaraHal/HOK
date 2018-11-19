import CustomersService from '../../services/customer.service';
import OrganizationService from '../../services/organization.service';

const loadCustomer = params =>
    dispatch => CustomersService.get(params.customerID).then((res) =>
        dispatch({
            type: 'SET_CURRENT_CUSTOMER',
            current: res
        }));


const loadCustomers = params =>
    dispatch => OrganizationService.getCustomers(params.organizationID).then(customers =>
        dispatch({
            type: 'SET_CUSTOMERS',
            customers
        })
    );



export default { loadCustomers, loadCustomer };