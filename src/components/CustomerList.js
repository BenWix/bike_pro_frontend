import React from 'react'
import {Link} from 'react-router-dom'



const CustomerList = ({customers, deleteCustomer}) => {
    const renderCustomers = customers.map(cust => 
        <tr>
            <th><Link key={cust.id} to={`/customers/${cust.id}`}>{cust.name} </Link></th>
            <th>{cust.email}</th>
            <th><button onClick={() => deleteCustomer(cust.id)}>X</button></th>
        </tr>
    )

    return ( 
        <React.Fragment>
        <h3>Choose a customer from the list below</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
            {renderCustomers}
        </table>
        </React.Fragment>

    )
}

export default CustomerList