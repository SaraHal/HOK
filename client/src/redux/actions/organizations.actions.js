import OrganizationService from '../../services/organization.service';
const loadOrganization = (params) =>
    dispatch => OrganizationService.get(params.organizationID).then(res =>
        dispatch({
            type: 'SET_CURRENT_ORGANIZATION',
            current: res
        })
    );


const loadOrganizations = () =>
    dispatch => OrganizationService.getList().then(organizations =>
        dispatch({
            type: 'SET_ORGANIZATIONS',
            organizations
        })
    );



export default { loadOrganizations, loadOrganization };