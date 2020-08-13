const url = 'http://localhost:3001'

export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CUSTOMERS'})
        fetch(`${url}/users`)
        .then(resp => resp.json())
        .then(customers => dispatch({type: 'CUSTOMERS_LOADED', customers}))
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

        fetch(`${url}/users`, configObj)
        .then(resp => resp.json())
        .then(customer => dispatch({type: 'ADD_CUSTOMER', customer}))
    }
}

export const fetchBike = id => {
    return (dispatch) => {
        dispatch({type: 'LOADING_BIKE'})
        fetch(`${url}/bikes/${id}`)
        .then(resp => resp.json())
        .then(bike => dispatch({type: 'BIKE_LOADED', bike}))
    }
}

export const addBike = bike => {
    return (dispatch) => {
        dispatch({ type: 'ADD_BIKE_STARTED'})
           
        let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bike)
        };

        fetch(`${url}/bikes`, configObj)
        .then(resp => resp.json())
        .then(bike => dispatch({type: 'ADD_BIKE', bike}))
    }
}

export const deleteBike = id => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_BIKE_STARTED'})

        fetch(`${url}/bikes/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(bike => dispatch({type: 'DELTE_BIKE', bike}))
    }
}

export const addRepair = repair => {
    return (dispatch) => {
        dispatch({ type: 'ADD_REPAIR_STARTED'})

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(repair)
            };

            console.log('sending to database')
            fetch(`${url}/repairs`, configObj)
            .then(resp => resp.json())
            .then(repair => dispatch({type: 'ADD_REPAIR', repair}))
    }
}