import {combineReducers} from 'redux'
import bikeReducer from './bikeReducer'
import customerReducer from './customerReducer'

const rootReducer = combineReducers({
    customers: customerReducer,
    bikes: bikeReducer
})

export default rootReducer