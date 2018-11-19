import { combineReducers } from 'redux'
import organizations from './organizations.reducer'
import customers from './customers.reducer'
import projects from './projects.reducer'
import programs from './programs.reducer'

export default combineReducers({
    organizations,
    customers,
    projects,
    programs
})