import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Component from './component';
import { addColors } from '../actions';

class DefaultTheme extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount() {
        document.querySelector('body').setAttribute('id', 'page-top');
        this.props.addColors({
            primary : '#BD5D38',
            secondary : '#fff'
        });
    }

    componentWillUnMount() {
        document.querySelector('body').removeAttribute('id');
    }

    toggleNav() {
        this.setState({ isOpen : !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Component
                    {...this.props}
                    isOpen={this.state.isOpen}
                    toggleNav={this.toggleNav}
                    currentColors={this.state.currentColors}
                />
            </div>
        );
    }
}

DefaultTheme.propTypes = {
    addColors : PropTypes.func.isRequired
};

export default connect(null, { addColors })(DefaultTheme);

