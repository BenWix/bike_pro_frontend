import React from 'react'
import {Link} from 'react-router-dom'



const CustomerList = ({customers}) => {
    const renderCustomers = customers.map(cust => 
        <li key={cust.id}>
            <Link key={cust.id} to={`/customers/${cust.id}`}>{cust.name} - {cust.email}</Link>
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