import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends React.Component {
    handleFormSubmit(formProps) {
        // Sign in user
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>{this.props.errorMessage}</strong>
                </div>
            );
        }
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        return (
            <div>
                <input className="form-control" type={field.type} {...field.input} />
                <div className="error">{touched ? error : ''}</div>
            </div>
        )
    }

    render() {
        // console.log(this.props);
        const { handleSubmit} = this.props;
        // const { meta: { touched, error }} = field;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Field component={this.renderField} name="email" type="text" />
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="password">Password:</label>
                    <Field component={this.renderField} name="password" type="password" />
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <Field component={this.renderField} name="confirmPassword" type="password" />
                </fieldset>
                {this.renderAlert()}
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
    if (formProps.password !== formProps.confirmPassword) { errors.confirmPassword = 'Passwords Must Match';}
    return errors;
}

Signup = reduxForm({
    form: 'signup',
    validate
})(Signup);

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Signup);