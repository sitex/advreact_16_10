import React, { Component } from 'react'
import {selectedEventsSelector} from '../../ducks/events'
import SelectedEventCard from './SelectedEventCard'
import {connect} from 'react-redux'
import {spring, TransitionMotion} from 'react-motion'

class SelectedEvents extends Component {
    static propTypes = {

    };

    render() {
        return (
            <TransitionMotion
                styles = {this.getSyles()}
                willEnter = {this.willEnter}
                willLeave = {this.willLeave}
            >
                {
                    interpolatedData => (
                        <div>
                            {interpolatedData.map(element =>
                                <div key = {element.key} style={element.style}>
                                    <SelectedEventCard event = {element.data} />
                                </div>
                            )}
                        </div>
                    )
                }
            </TransitionMotion>
        )
    }

    willEnter() {
        return {
            opacity: 0
        }
    }

    willLeave() {
        return {
            opacity: spring(0, { stiffness: 50, damping: 20})
        }
    }

    getSyles() {
        return this.props.events.map(event => ({
            key: event.uid,
            style: {
                opacity: spring(1, { stiffness: 10 })
            },
            data: event
        }))
    }
}

export default connect(state => ({
    events: selectedEventsSelector(state)
}))(SelectedEvents)