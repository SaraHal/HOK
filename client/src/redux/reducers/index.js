import { combineReducers } from 'redux'
import organizations from './organizations.reducer'
import customers from './customers.reducer'

export default combineReducers({
    organizations, 
    customers
})