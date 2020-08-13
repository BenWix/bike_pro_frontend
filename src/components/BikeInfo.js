import React from 'react'

const BikeInfo = ({bike}) => {
    return (
        <div>
            <h3>{bike.name}</h3>
            <ul>
                <li>Bike Type: {bike.bike_type}</li>
                <li>Miles Ridden: {bike.miles}</li>
                <li>Date Purchased: {bike.date_purchase ? bike.date_purchase : 'unknown'}</li>
            </ul>
        </div>
    )
}

export default BikeInfo