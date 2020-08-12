import React from 'react'
import {Link} from 'react-router-dom'

const BikeList = ({bikes, customer}) => {
    const renderBikes = bikes.map(bike => 
        <li key={bike.id}>
            <Link key={bike.id} to={`bikes/${bike.id}`}>{bike.name}</Link>
        </li>
    )

    return (
        <React.Fragment>
            <h3>Here are all of customer's bikes.</h3>  
            <ul>
                {renderBikes}    
            </ul>  
        </React.Fragment>
    )
}

export default BikeList