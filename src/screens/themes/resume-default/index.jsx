import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

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
        this.props.addColors(!isEmpty(this.props.userThemeColors) ? this.props.userThemeColors : {
            primary : '#BD5D38',
            secondary : '#fff'
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (isEmpty(this.props.userThemeColors) && !isEmpty(nextProps.userThemeColors)) {
            this.props.addColors(nextProps.userThemeColors);
        }
    }

    componentWillUnmount() {
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
                />
            </div>
        );
    }
}

DefaultTheme.propTypes = {
    addColors : PropTypes.func.isRequired,
    userThemeColors : PropTypes.object.isRequired
};

// function mapStateToProps({ userAuthentication }) {
//     return {
//         userThemeColors : userAuthentication.isAuthenticated ? userAuthentication.user.user.defaultTheme.color : {}
//     };
// }

export default connect(null, { addColors })(DefaultTheme);

