import React from 'react'
import {Link} from 'react-router-dom'

const BikeList = ({bikes, customer_name, deleteBike}) => {
    const renderBikes = bikes.map(bike => 
        <li key={bike.id}>
            <Link key={bike.id} to={`/bikes/${bike.id}`}>{bike.name}</Link>
            <button onClick={() => deleteBike(bike.id)}>Delete Bike</button>
        </li>
    )

    return (
        <React.Fragment>
            <h3>{customer_name}'s bikes.</h3>  
            <ul>
                {renderBikes}    
            </ul>  
        </React.Fragment>
    )
}

export default BikeList