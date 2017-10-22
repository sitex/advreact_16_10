import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'

class Add extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3>Add</h3>
                <form onSubmit = {this.props.handleSubmit}>
                    <div>
                        Firstname: <Field name = 'firstName' component = 'input' type = 'text'/>
                    </div>
                    <div>
                        Lastname: <Field name = 'lastName' component = 'input' type = 'text'/>
                    </div>
                    <div>
                        Email: <Field name = 'email' component = 'input' type = 'text'/>
                    </div>
                    <div>
                        <input type = 'submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'people'
})(Add)