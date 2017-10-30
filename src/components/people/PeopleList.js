import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List} from 'react-virtualized'
import {fetchAll, peopleListSelector} from '../../ducks/people'

class PeopleList extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.fetchAll()
    }

    render() {
        return (
            <List
                rowCount={this.props.people.length}
                height={200}
                width={500}
                rowHeight={100}
                rowRenderer={this.rowRenderer}
            />
        )
    }

    rowRenderer = ({ index, key, style }) => {
        const person = this.props.people[index]

        return <div key = {key} style = {style}>{person.email}</div>
    }
}

export default connect(state => ({
    people: peopleListSelector(state)
}), { fetchAll })(PeopleList)