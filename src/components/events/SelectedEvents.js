import React, { Component } from 'react'
import {selectedEventsSelector} from '../../ducks/events'
import SelectedEventCard from './SelectedEventCard'
import {connect} from 'react-redux'

class SelectedEvents extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                {this.props.events.map(event => <SelectedEventCard key = {event.uid} event = {event} />)}
            </div>
        )
    }
}

export default connect(state => ({
    events: selectedEventsSelector(state)
}))(SelectedEvents)