export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CUSTOMERS'})
        fetch('https://localhost:3001/user')
        .then(resp => resp.json)
        .then(customers => dispatch({type: 'ADD_CUSTOMERS', customers}))
    }
}