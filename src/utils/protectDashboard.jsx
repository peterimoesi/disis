import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../routes/history';
import { removeUserCredentials } from '../actions/setUserCredentials';

export default function protectDashboard(Component) {
    class Protect extends React.Component {
        componentDidMount() {
            if (!this.props.isAuthenticated) {
                this.props.removeUserCredentials();
                history.push('/');
            }
        }
        render() {
            return (
                <Component />
            );
        }
    }

    function mapStateToProps({ userAuthentication }) {
        return {
            isAuthenticated : userAuthentication.isAuthenticated
        };
    }

    Protect.propTypes = {
        isAuthenticated : PropTypes.bool.isRequired,
        removeUserCredentials : PropTypes.func.isRequired
    };
    
    return connect(mapStateToProps, { removeUserCredentials })(Protect);
}