// import {combineReducers} from 'redux'
// import bikeReducer from './bikeReducer'
// import customerReducer from './customerReducer'

// const rootReducer = combineReducers({
//     customers: customerReducer,
//     bikes: bikeReducer
// })

// export default rootReducer

export default function(state = {customers: [], loading: false}, action) {
    let idx
    switch (action.type) {
        case 'LOADING_CUSTOMERS':
            console.log('Loading all Customers')
            return {customers: [...state.customers], loading: true}

        case 'CUSTOMERS_LOADED':
            return {customers: [...action.customers], loading: false}

        case 'LOADING_CUSTOMER':
            console.log('Loading customer details')
            return {...state, loading: true}

        case 'CUSTOMER_LOADED':
            idx = state.customers.findIndex(customer => customer.id === action.customer.id)
            return {customers: [...state.customers.slice(0,idx), action.customer, ...state.customers.slice(idx+1)], loading: false}

        case 'ADD_CUSTOMER':
           return {...state, customers: [...state.customers, action.customer], loading: false}
        
        default: 
            return state
    }
}