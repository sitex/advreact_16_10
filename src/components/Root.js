import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../redux'
import App from './App'
//import {BrowserRouter as Router} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'
import {DragDropContextProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Root extends Component {
    static propTypes = {};

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <DragDropContextProvider backend = {HTML5Backend}>
                        <App/>
                    </DragDropContextProvider>
                </Router>
            </Provider>
        )
    }
}

export default Root