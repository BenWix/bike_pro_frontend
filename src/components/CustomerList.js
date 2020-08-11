import React from 'react'
import { Link } from 'react-router-dom'

const CustomerList = ({customers}) => {
    const renderCustomers = Object.keys(customers).map(custID => 
        <li key={custID}>
            <Link key={custID} to={`/customers/${custID}`}>{customers[custID].name}</Link>
        </li>
    )

    return ( 
        <React.Fragment>
        <h3>Choose a customer from the list below</h3>
        <ul>
            {renderCustomers}
        </ul>
        </React.Fragment>

    )
}

export default CustomerList