import React from 'react';
import { SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink } from 'mdbreact';

import './styles.scss';

class NavbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const isOpenWithButtonA = null;
        return (
            <SideNav hidden isOpenWithButton={isOpenWithButtonA} breakWidth={1300} className="deep-purple darken-4">
                <SideNavNav>
                    <SideNavItem>Edit</SideNavItem>
                    <SideNavCat name="Account" onClick={this.onClick} isOpen={this.state.accordion === 0 } icon="chevron-right">
                        <SideNavLink>Account details</SideNavLink>
                        <SideNavLink>Logout</SideNavLink>
                    </SideNavCat>
                    {/* <SideNavCat name="Instruction" onClick={this.onClick1} isOpen={this.state.accordion === 1 } icon="hand-pointer-o" href="#">
                        <SideNavLink>For bloggers</SideNavLink>
                        <SideNavLink>For authors</SideNavLink>
                    </SideNavCat>
                    <SideNavCat name="About" onClick={this.onClick2} isOpen={this.state.accordion === 2 } icon="eye">
                        <SideNavLink>Instruction</SideNavLink>
                        <SideNavLink>Monthly meetings</SideNavLink>
                    </SideNavCat>
                    <SideNavCat name="Contact me" onClick={this.onClick3} isOpen={this.state.accordion === 3 } icon="envelope-o">
                        <SideNavLink>FAQ</SideNavLink>
                        <SideNavLink>Write a message</SideNavLink>
                    </SideNavCat> */}
                </SideNavNav>
            </SideNav>
        );
    }
}

export default NavbarComponent;
