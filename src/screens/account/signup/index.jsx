import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userRegister } from './action';
import AccountComponent from '../component';
import validateEmail from '../../../utils/validateEmail';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password : '',
            firstName : '',
            lastName : '',
            confirmPassword : '',
            waiting : false
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
        const { email, password, confirmPassword, firstName, lastName } = this.state;
        if (password.length < 6) {
            this.setState({ error : 'Password must be more that 6' });
            return;
        }
        if (password !== confirmPassword) {
            this.setState({ error : 'Password do not match' });
            return;
        }
        if (!firstName || !lastName) {
            this.setState({ error : 'Your names are required' });
            return;
        }
        if (!validateEmail(this.state.email)) {
            this.setState({ error : 'Please enter a valid email' });
            return;
        }
        this.setState({ waiting : true });
        this.props.userRegister({email, password, firstName, lastName})
            .then((e) => {
                if (e === 500) {
                    this.setState({ error : 'Invalid Authentication', waiting : false });
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
                confirmPassword={this.state.confirmPassword}
                error={this.state.error}
                onSubmit={this.onSubmit}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                waiting={this.state.waiting}
                signup
            />
        );
    }
}

Signup.propTypes = {
    userRegister : PropTypes.func.isRequired,
    location : PropTypes.object.isRequired,
    history : PropTypes.object.isRequired,
    isAuthenticated : PropTypes.bool.isRequired
};

function mapStateToProps({ userAuthentication }) {
    return {
        isAuthenticated : userAuthentication.isAuthenticated
    };
}

export default connect(mapStateToProps, { userRegister })(Signup);
