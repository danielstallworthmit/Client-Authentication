import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends React.Component {
    handleFormSubmit({email, password}) {
        console.log(this.props);
        this.props.signinUser({ email, password });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Field name="email" type="text" component="input" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="password">Password:</label>
                    <Field name="password" type="password" component="input" className="form-control" />
                </fieldset>
                <button type="submit" className="btn btn-primary"> Sign In </button>
            </form>
        );
    }
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

export default connect(null, actions)(Signin);