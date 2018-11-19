import ProjectsService from '../../services/project.service';
import OrganizationService from '../../services/organization.service';

const loadProject = params =>
    dispatch => ProjectsService.get(params.projectID).then(res =>
        dispatch({
            type: 'SET_CURRENT_PROJECT',
            current: res
        }));


const loadProjects = params =>
    dispatch => OrganizationService.getProjects(params.organizationID).then(projects =>
        dispatch({
            type: 'SET_PROJECTS',
            projects
        })
    );



export default { loadProjects, loadProject };