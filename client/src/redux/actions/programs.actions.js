import ProgramService from '../../services/program.service';

const loadPrograms = params =>
    dispatch => ProgramService.getByCustomer(params.customerID).then(programs =>
        dispatch({
            type: 'SET_PROGRAMS',
            programs
        })
    );

export default { loadPrograms };