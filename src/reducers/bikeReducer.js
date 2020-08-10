export default function(state = [], action) {
    let idx
    switch (action.type) {
        case 'ADD_BIKE':
           return [...state, action.bike]
        default: 
        return state
    }
}