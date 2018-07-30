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

class NavbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
                <div className="container">
                    <NavbarBrand href="#">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    <NavbarNav right>
                    </NavbarNav>
                </div>
            </Navbar>
        );
    }
}

export default NavbarComponent;
