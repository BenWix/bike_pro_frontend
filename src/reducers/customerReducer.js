export default function(state = {customers: [], loading: false}, action) {
    let idx
    switch (action.type) {
        case 'LOADING_CUSTOMERS':
            return {...state, customers: [...state.customers], loading: true}
        case 'ADD_CUSTOMERS':
            
        case 'ADD_CUSTOMER':
           return {...state, customers: [...state, action.customer], loading: false}
        default: 
        return state
    }
}