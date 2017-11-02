import React from 'react'
import {shallow} from 'enzyme'
import {EventsTable} from './EventsTable'
import Loader from '../common/Loader'
import events from '../../mocks/conferences'

const eventList = events.map((event, index) => ({...event, uid: index}))

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