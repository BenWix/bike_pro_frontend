import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchBike, addRepair, updateMiles} from '../actions/customerActions'
import RepairList from '../components/RepairList'
import RepairForm from '../components/RepairForm'
import BikeInfo from '../components/BikeInfo'

class BikeContainer extends Component {
    
    componentDidMount(){
        this.props.fetchBike(this.props.match.params.id)
    }

    // renderRepairs = this.props.bike.repairs.map(repair => 
    //     <li key={repair.id}>
    //         {repair.repair_type}
    //     </li>
    // )
    
    render() {

        return (
            <div>
                <BikeInfo bike={this.props.bike} updateMiles={this.props.updateMiles} />
                <RepairList repairs={this.props.bike.repairs}/>
                <RepairForm addRepair={this.props.addRepair} miles={this.props.bike.miles} bike_id={this.props.bike.id}/>
            </div>
        )
    
    }
}

const mapStateToProps = state => {
    return {
        bike: state.bike,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchBike, addRepair, updateMiles})(BikeContainer) 