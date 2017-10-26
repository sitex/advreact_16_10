import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import ProtectedRoute from './common/ProtectedRoute'
import AdminPage from './routes/Admin'
import AuthPage from './routes/Auth'
import PersonPage from './routes/PersonPage'
import EventsPage from './routes/EventsPage'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <ul>
                    <li><NavLink to='/admin' activeStyle = {{color: 'red'}}>admin</NavLink></li>
                    <li><NavLink to='/people' activeStyle = {{color: 'red'}}>people</NavLink></li>
                    <li><NavLink to='/events' activeStyle = {{color: 'red'}}>events</NavLink></li>
                </ul>
                <ProtectedRoute path = '/admin' component = {AdminPage}/>
                <ProtectedRoute path = '/people' component={PersonPage}/>
                <ProtectedRoute path = '/events' component={EventsPage}/>
                <Route path = '/auth' component = {AuthPage}/>
            </div>
        )
    }
}

export default App