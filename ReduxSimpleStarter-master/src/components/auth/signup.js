import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form>
                <fieldset className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Field component="input" name="email" type="text" className="form-control" />
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="password">Password:</label>
                    <Field component="input" name="password" type="password" className="form-control" />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <Field component="input" name="confirmPassword" type="password" className="form-control" />
                    {confirmPassword.touched && confirmPassword.error && <div className="error">{confirmPassword.error}</div>}
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}

const validate = formProps => {
    const errors = {};
    if (!formProps.email) { errors.email = 'Please enter email';}
    if (!formProps.password) { errors.password = 'Please enter password';}
    if (!formProps.confirmPassword) { errors.confirmPassword = 'Please enter Password Confimration';}
    if (!formProps.password !== formProps.confirmPassword) { errors.confirmPassword = 'Passwords Must Match';}
    return errors;
}

Signup = reduxForm({
    form: 'signup'
})(Signup);

export default connect(null, actions)(Signup);