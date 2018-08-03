import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../routes/history';
import { removeUserCredentials } from '../../actions/setUserCredentials';
import './styles.scss';

class NavbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            open : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isOpen : !this.state.isOpen });
    }

    render() {
        return (
            <Navbar dark expand="md" fixed="top" className="top-nav-bar">
                <div className="container">
                    <NavbarBrand href="#">
                        DISIS.ME
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {
                            this.props.isAuthenticated ?
                                <Nav right="true" navbar>
                                    <NavItem>
                                        <NavLink
                                            to="/app/dashboard"
                                            onClick={e => { e.preventDefault(); history.push('/app/dashboard'); }}
                                        >
                                            My page</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            to="/app/login"
                                            onClick={e => { e.preventDefault(); this.props.removeUserCredentials(); }}
                                        >Logout</NavLink>
                                    </NavItem>
                                </Nav> :
                                <Nav right="true" navbar>
                                    <NavItem>
                                        <NavLink to="/app/login" onClick={e => { e.preventDefault(); history.push('/app/login'); }}>Login</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/app/signup"  onClick={e => { e.preventDefault(); history.push('/app/signup'); }}>Signup</NavLink>
                                    </NavItem>
                                </Nav>
                        }
                    </Collapse>
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
