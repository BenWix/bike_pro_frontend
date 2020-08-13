// import {combineReducers} from 'redux'
// import bikeReducer from './bikeReducer'
// import customerReducer from './customerReducer'

// const rootReducer = combineReducers({
//     customers: customerReducer,
//     bikes: bikeReducer
// })

// export default rootReducer

export default function(state = {customers: [], bike: {}, loading: false}, action) {
    let idx
    switch (action.type) {
        case 'LOADING_CUSTOMERS':
            // console.log('Loading all Customers')
            return {...state, customers: [...state.customers], loading: true}

        case 'CUSTOMERS_LOADED':
            return {...state, customers: [...action.customers], loading: false}

        // case 'LOADING_CUSTOMER':
        //     console.log('Loading customer details')
        //     return {...state, customers: [...state.customers], loading: true}

        // case 'CUSTOMER_LOADED':
        //     idx = state.customers.findIndex(customer => customer.id === action.customer.id)
        //     return {customers: [...state.customers.slice(0,idx), action.customer, ...state.customers.slice(idx+1)], loading: false}

        case 'ADD_CUSTOMER':
           return {...state, customers: [...state.customers, action.customer], loading: false}
        
        case 'LOADING_BIKE':
            return {...state, loading: true}

        case 'BIKE_LOADED':
            debugger
            return {...state, bike: action.bike, loading: false}



        case 'ADD_BIKE_STARTED': 
            return {...state, customers: [...state.customers], loading: true}

        case 'ADD_BIKE': 
            // console.log('Made it to the reducer')
            idx = state.customers.findIndex(customer => customer.id === action.bike.user_id)
            // debugger
            return {...state,customers: [...state.customers.slice(0,idx),{...state.customers[idx], bikes: state.customers[idx].bikes.concat(action.bike)}, ...state.customers.slice(idx+1)], loading: false}
            

        default: 
            return state
    }
}