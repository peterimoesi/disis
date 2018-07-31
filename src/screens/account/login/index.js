import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userLogin } from './action';
import AccountComponent from '../component';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password : '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/app/dashboard');
        }
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit() {
        const { state } = this.props.location;
        this.props.userLogin(this.state.email, this.state.password)
            .then((e) => {
                if (e === 500) {
                    this.setState({ error : 'Invalid Authentication' });
                } else {
                    if (state && state.from) {
                        this.props.history.push(state.from);
                    } else {
                        this.props.history.push('/app/dashboard');
                    }
                }
            });
    }

    render() {
        return (
            <AccountComponent
                onChange={this.onChange}
                email={this.state.email}
                password={this.state.password}
                error={this.state.error}
                onSubmit={this.onSubmit}

            />
        );
    }
}

Login.propTypes = {
    userLogin : PropTypes.func.isRequired,
    location : PropTypes.object.isRequired,
    history : PropTypes.object.isRequired,
    isAuthenticated : PropTypes.bool.isRequired
};

function mapStateToProps({ userAuthentication }) {
    return {
        isAuthenticated : userAuthentication.isAuthenticated
    };
}

export default connect(mapStateToProps, { userLogin })(Login);
