import React, { Component } from 'react'
import {DropTarget} from 'react-dnd'

class SelectedEventCard extends Component {
    static propTypes = {

    };

    render() {
        const {event, connectDropTarget, canDrop, hovered} = this.props
        const borderColor = canDrop
            ? hovered
                ? 'green'
                : 'red'
            : 'black'

        return connectDropTarget(
            <div style = {{width: 300, height: 100, border: `1px solid ${borderColor}`}}>
                <h2>{event.title}</h2>
                <h3>{event.when}</h3>
            </div>
        )
    }
}

const spec = {
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver()
})

export default DropTarget(['person'], spec, collect)(SelectedEventCard)