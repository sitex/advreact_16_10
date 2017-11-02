import React, { Component } from 'react'

class SelectedEventCard extends Component {
    static propTypes = {

    };

    render() {
        const {event} = this.props
        return (
            <div style = {{width: 300, height: 100, border: '1px solid black'}}>
                <h2>{event.title}</h2>
                <h3>{event.when}</h3>
            </div>
        )
    }
}

export default SelectedEventCard