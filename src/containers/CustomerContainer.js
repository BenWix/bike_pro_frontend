import React, { Component } from 'react'

const CustomerContainer = ({match, customers}) => {
    return (
        <div>
            <h3>{customers[match.params.custId].name}'s Page</h3>
        </div>
    )
}

export default CustomerContainer
