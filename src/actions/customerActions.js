export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CUSTOMERS'})
        fetch('http://localhost:3001/users')
        .then(resp => resp.json())
        .then(customers => dispatch({type: 'CUSTOMERS_LOADED', customers}))
    }
}

export const fetchCustomer = (id) => {
    return (dispatch) => {
        console.log('loading customer')
        dispatch({type: 'LOADING_CUSTOMER'})
        fetch(`http://localhost:3001/users/${id}`)
        .then(resp => resp.json())
        .then(customer => dispatch({type: 'CUSTOMER_LOADED', customer}))
    }
}

export const addCustomer = (customer) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_CUSTOMER_STARTED'})
           
        let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(customer)
        };

        console.log(configObj.body)

        fetch('http://localhost:3001/users', configObj)
        .then(resp => resp.json())
        .then(customer => dispatch({type: 'ADD_CUSTOMER', customer}))
    }
}