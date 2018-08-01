import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink
    // NavbarToggler,
    // Collapse,
    // NavLinkContainer
} from 'mdbreact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeUserCredentials } from '../../actions/setUserCredentials';
import './styles.scss';

class NavbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Navbar color="transparent" dark expand="lg" fixed="top" className="top-nav-bar" scrolling>
                <div className="container">
                    <NavbarBrand href="#">
                        DISIS
                    </NavbarBrand>
                    {
                        this.props.isAuthenticated ?
                            <NavbarNav right>
                                <NavItem>
                                    <NavLink to="/app/dashboard">My page</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="/app/login"
                                        onClick={e => { e.preventDefault(); this.props.removeUserCredentials(); }}
                                    >Logout</NavLink>
                                </NavItem>
                            </NavbarNav> :
                            <NavbarNav right>
                                <NavItem>
                                    <NavLink to="/app/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/app/signup">Signup</NavLink>
                                </NavItem>
                            </NavbarNav>
                    }
                    
                </div>
            </Navbar>
        );
    }
}

function mapStateToProps({ userAuthentication }) {
    return {
        isAuthenticated : userAuthentication.isAuthenticated
    };
}

NavbarComponent.propTypes  = {
    isAuthenticated : PropTypes.bool.isRequired,
    removeUserCredentials : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { removeUserCredentials })(NavbarComponent);
