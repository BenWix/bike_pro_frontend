// import {combineReducers} from 'redux'
// import bikeReducer from './bikeReducer'
// import customerReducer from './customerReducer'

// const rootReducer = combineReducers({
//     customers: customerReducer,
//     bikes: bikeReducer
// })

// export default rootReducer

export default function(state = {customers: [], loading: false}, action) {
    // let idx
    switch (action.type) {
        case 'LOADING_CUSTOMERS':
            return {customers: [...state.customers], loading: true}

        case 'CUSTOMERS_LOADED':
            return {customers: [...action.customers], loading: false}

        case 'LOADING_CUSTOMER':
            return {customer: {}, loading: true}

        case 'CUSTOMER_LOADED':
            return {customer: {...action.customer}, loading: false}

        case 'ADD_CUSTOMER':
           return {...state, customers: [...state.customers, action.customer], loading: false}
        
        default: 
            return state
    }
}