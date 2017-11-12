import React, { Component } from 'react'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'
import DragPreview from './PersonDragPreview'
import {Motion, spring} from 'react-motion'

class PersonRow extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.connectPreview(getEmptyImage())
    }

    render() {
        const {style, person, connectDragSource} = this.props
        return (
            <Motion
                defaultStyle={{opacity: 0}}
                style={{opacity: spring(1)}}
            >
                {interpolatingStyle => (
                    <div style = {{...style, ...interpolatingStyle}}>
                        {connectDragSource(<h2>{person.firstName} {person.lastName}</h2>)}
                        <h3>{person.email}</h3>
                    </div>
                )}
            </Motion>
        )
    }
}

const spec = {
    beginDrag(props) {
        return {
            id: props.person.uid,
            DragPreview
        }
    },

    endDrag() {
        console.log('---', 'endDrag')
    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
})

export default DragSource('person', spec, collect)(PersonRow)