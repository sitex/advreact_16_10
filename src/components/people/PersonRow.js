import React, { Component } from 'react'
import {DragSource} from 'react-dnd'

class PersonRow extends Component {
    static propTypes = {

    };

    render() {
        const {style, person, connectDragSource, isDragging} = this.props
        return (
            <div style = {{...style, opacity: isDragging ? 0.1 : 1}}>
                {connectDragSource(<h2>{person.firstName} {person.lastName}</h2>)}
                <h3>{person.email}</h3>
            </div>
        )
    }
}

const spec = {
    beginDrag(props) {
        return {
            id: props.person.uid
        }
    },

    endDrag() {
        console.log('---', 'endDrag')
    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
})

export default DragSource('person', spec, collect)(PersonRow)