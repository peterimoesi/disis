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
                    <NavbarNav right>
                        <NavItem>
                            <NavLink to="/app/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/app/signup">Signup</NavLink>
                        </NavItem>
                    </NavbarNav>
                </div>
            </Navbar>
        );
    }
}

export default NavbarComponent;
