import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends React.Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div>Hello, Goodbye</div>
        );
    }
}

export default connect(null, actions)(Signout);