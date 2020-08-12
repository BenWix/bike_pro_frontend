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
            return {...state, customers: [...state.customers], loading: true}

        case 'ADD_CUSTOMERS':
            return {...state, customers: [...action.customers], loading: false}

        case 'ADD_CUSTOMER':
           return {...state, customers: [...state.customers, action.customer], loading: false}
        default: 
            return state
    }
}