import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {add} from '../../ducks/people'
import Add from '../people/Add'

class PeoplePage extends Component {
    render() {
        const {people} = this.props
        const peopleList = people.map((person) => <li key={person.id}>
            {person.firstName} {person.lastName} - {person.email}
        </li>)

        return (
            <div>
                <h2>People</h2>
                <ul>{peopleList}</ul>
                <Route path='/people' render={() => <Add onSubmit={this.handleAdd}/>}/>
            </div>
        )
    }

    handleAdd = (values) => this.props.add(values)
}

export default connect(state => ({
    people: state.people.entities.valueSeq()
}), {add})(PeoplePage)