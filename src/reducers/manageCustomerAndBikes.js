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
    let cust_id
    switch (action.type) {
        case 'LOADING_CUSTOMERS':
            return {...state, customers: [...state.customers], loading: true}

        case 'CUSTOMERS_LOADED':
            return {...state, customers: [...action.customers], loading: false}

        case 'ADD_CUSTOMER':
           return {...state, customers: [...state.customers, action.customer], loading: false}
        
        case 'LOADING_BIKE':
            return {...state, loading: true}

        case 'BIKE_LOADED':
            return {...state, bike: action.bike, loading: false}

        case 'ADD_BIKE_STARTED': 
            return {...state, customers: [...state.customers], loading: true}

        case 'ADD_BIKE': 
            idx = state.customers.findIndex(customer => customer.id === action.bike.user_id)
            return {...state,
                customers: 
                    [...state.customers.slice(0,idx),
                        {...state.customers[idx], bikes: state.customers[idx].bikes.concat(action.bike)},
                         ...state.customers.slice(idx+1)], 
                loading: false}
        
        case 'DELETE_BIKE_STARTED':
            return {...state, loading: true}

        case 'DELTE_BIKE':
            idx = state.customers.findIndex(customer => customer.id === action.bike.user_id)
            return {...state, 
                    customers: 
                        [...state.customers.slice(0,idx),
                            {...state.customers[idx], 
                                bikes: state.customers[idx].bikes.filter(bike => bike.id !== action.bike.id)},
                            ...state.customers.slice(idx+1)],
                    loading: false
            }
        
        case 'ADD_REPAIR_STARTED':
            return {...state, loading: true}

        case 'ADD_REPAIR':
            return {...state,bike: {...state.bike, repairs: [...state.bike.repairs, action.repair]}, loading: false}

        default: 
            return state
    }
}