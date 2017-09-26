import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class Header extends React.Component {
    renderLinks() {
        // User is logged in, show sign out link 
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>
            )
        } else {
            // Show link to sign in or sign up when user is signed out
            return [
            <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
            </li>,
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            ]
        }
    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);