import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Component from './component';
import { addColors } from '../actions';

class OrbitTheme extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.toggleNav = this.toggleNav.bind(this);
        this.body = null;
    }

    componentDidMount() {
        this.props.addColors(!isEmpty(this.props.userThemeColors) ? this.props.userThemeColors : {
            color1 : '#42A8C0',
            color2 : '#2d7788',
            color3 : '#97AAC3'
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (isEmpty(this.props.userThemeColors) && !isEmpty(nextProps.userThemeColors)) {
            console.log('not empty');
            this.props.addColors(nextProps.userThemeColors);
        }
    }

    componentWillUnmount() {
    }

    toggleNav() {
        this.setState({ isOpen : !this.state.isOpen });
    }

    render() {
        // console.log(this.props);
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

OrbitTheme.propTypes = {
    addColors : PropTypes.func.isRequired,
    userThemeColors : PropTypes.object.isRequired
};

// function mapStateToProps({ userAuthentication }) {
//     return {
//         userThemeColors : userAuthentication.isAuthenticated ? userAuthentication.user.user.defaultTheme.color : {}
//     };
// }

export default connect(null, { addColors })(OrbitTheme);

