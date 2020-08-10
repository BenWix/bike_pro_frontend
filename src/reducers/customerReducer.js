export default function(state = [], action) {
    let idx
    switch (action.type) {
        case 'ADD_CUSTOMER':
           return [...state, action.customer]
        default: 
        return state
    }
}