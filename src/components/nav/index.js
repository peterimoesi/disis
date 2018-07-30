import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    // NavbarToggler,
    // Collapse,
    // NavItem,
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
            <Navbar color="transparent" dark expand="md" fixed="top" className="top-nav-bar" scrolling>
                <div className="container">
                    <NavbarBrand href="#">
                        DISIS
                    </NavbarBrand>
                    <NavbarNav right>
                    </NavbarNav>
                </div>
            </Navbar>
        );
    }
}

export default NavbarComponent;
