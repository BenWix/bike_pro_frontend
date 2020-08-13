import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <p>Bike Shop Pro is the one stop shop for bike repair logging.

                It was designed so that bikes could be entered and then users 
                would be alerted when a bike needs a specific type of maintenance.
                The maintenance required is based off of the date and miles ridden. 
                The distance of the bike can be manually updated, or it can be linked 
                to a Strava account, to keep an accurate and automatically updated record
                of the mileage on the bike.</p>
                
                <p>As the app progresses, we hope to have the maintenance be more specific, 
                    and give more accurate alerts based off of bike type and other factors. 
                    This app is work in progress and will continue to evolve
                </p>

                <p>App was designed by Ben Wichser</p>

            </div>
        )
    }
}
