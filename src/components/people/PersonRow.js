import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PersonRow extends Component {
    static propTypes = {

    };

    render() {
        const {style, person} = this.props
        return (
            <div style = {style}>
                <h2>{person.firstName} {person.lastName}</h2>
                <h3>{person.email}</h3>
            </div>
        )
    }
}

export default PersonRow