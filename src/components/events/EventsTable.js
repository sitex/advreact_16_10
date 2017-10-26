import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchAllEvents} from '../../ducks/events'

class EventsTable extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.fetchAllEvents()
        console.log('---', 'load events')
    }

    render() {
        return (
            <div>
                <h1>Events</h1>
            </div>
        )
    }
}

export default connect(null, { fetchAllEvents })(EventsTable)