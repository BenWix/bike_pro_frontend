import React from 'react'

const RepairList = ({repairs}) => {


    if (repairs !== undefined) {
        
        return (
            <React.Fragment>
                <h3>Repair Log: </h3>  
                <ul>
                    {repairs.map(repair => <li key={repair.id}>{repair.repair_type} - Miles: {repair.miles} - {repair.date}</li>)}    
                </ul>  
            </React.Fragment>
        )
    } else {
        return (<div>Loading Repairs</div>)
    }
}

export default RepairList