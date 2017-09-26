import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends React.Component {
    handleFormSubmit({email, password}) {
        console.log(this.props);
        this.props.signinUser({ email, password });
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
                { this.renderAlert()}
                <button type="submit" className="btn btn-primary"> Sign In </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

export default connect(mapStateToProps, actions)(Signin);