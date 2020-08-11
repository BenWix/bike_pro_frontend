export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CUSTOMERS'})
        fetch('http://localhost:3001/user')
        .then(resp => resp.json())
        .then(customers => dispatch({type: 'ADD_CUSTOMERS', customers}))
    }
}

export const addCustomer = (customer) => {
    return {
        type: 'ADD_CUSTOMER',
        customer
    }
}