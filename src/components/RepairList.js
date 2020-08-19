import React from 'react'

const RepairList = ({repairs}) => {


    if (repairs !== undefined) {
        
        return (
            <React.Fragment>
                <h3>Repair Log: </h3>  
                <table>
                    <tr>
                        <th>Repair Type</th>
                        <th>Miles</th>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {repairs.map(repair => {
                        // <li key={repair.id}>{repair.repair_type} - Miles: {repair.miles} - {repair.date}</li>
                        return (
                            <tr>
                                <th>{repair.repair_type}</th>
                                <th>{repair.miles}</th>
                                <th>{repair.date}</th>
                                <th>{repair.description}</th>
                            </tr>
                        )
                    })}    
                </table>  
            </React.Fragment>
        )
    } else {
        return (<div>Loading Repairs</div>)
    }
}

export default RepairList