import React from 'react'

const CustomerInfo = ({customer}) => {
    return (
        <React.Fragment>
            <h3>{customer.name}</h3>
            <ul>
                <li>Email: {customer.email}</li>
                <li>Phone Number: {customer.phone}</li>
            </ul>
        </React.Fragment>
    )
}

export default CustomerInfo