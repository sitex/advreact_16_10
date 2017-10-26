import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {EventsTable} from './EventsTable'
import Loader from '../common/Loader'
import events from '../../mocks/conferences'

const eventList = events.map((event, index) => ({...event, uid: index}))

Enzyme.configure({ adapter: new Adapter()})

it('should render loader', () => {
    const container = shallow(<EventsTable
        loading
        fetchAllEvents = {() => ({})}
    />)

    expect(container.contains(<Loader />))
})


it('should render rows', () => {
    const container = shallow(<EventsTable
        events = {events}
        fetchAllEvents = {() => ({})}
        selected = {[]}
    />)

    const rows = container.find('.test__events_row')

    expect(rows.length).toEqual(events.length)
})

it('should select event', () => {
    let selected = null

    const selectEvent = uid => selected = uid

    const container = shallow(<EventsTable
        events = {events}
        fetchAllEvents = {() => ({})}
        selectEvent = {selectEvent}
        selected = {[]}
    />)

    container.find('.test__events_row').first().simulate('click')

    expect(selected).toEqual(events[0].uid)
})