import React from 'react'
import { Link } from 'react-router-dom'

const CustomerList = ({customers}) => {
    const renderCustomers = Object.keys(customers).map(custID) => 
    <React.Fragment>
        <Link key={custId} to={`/customers/${custId}`}>{customers[custId].name}</Link>
    </React.Fragment>

    return ( 
        <div>
            {renderCustomers}
        </div>
    )
}