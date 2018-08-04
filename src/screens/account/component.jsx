import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'mdbreact';

import './styles.scss';

const accountComponent = ({ onChange, error, onSubmit, email, password, signup, confirmPassword, firstName, lastName }) => (
    <div className="container">
        <div className="account-form-cont">
            <div className="row">
                <div className="col-lg-12 txt-center error-text">
                    {error}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Input
                        label="Email"
                        name="email"
                        onChange={onChange}
                        value={email}
                        type="email"
                    />
                </div>
                {
                    signup &&
                        <div className="col-lg-6 col-md-12">
                            <Input
                                label="First Name"
                                name="firstName"
                                onChange={onChange}
                                value={firstName}
                                type="text"
                            />
                        </div>
                }
                {
                    signup &&
                        <div className="col-lg-6 col-md-12">
                            <Input
                                label="Last name"
                                name="lastName"
                                onChange={onChange}
                                value={lastName}
                                type="text"
                            />
                        </div>
                }
                <div className="col-lg-12">
                    <Input
                        label="Password"
                        name="password"
                        onChange={onChange}
                        value={password}
                        type="password"
                    />
                </div>
                {
                    signup &&
                        <div className="col-lg-12">
                            <Input
                                label="Confirm Password"
                                name="confirmPassword"
                                onChange={onChange}
                                value={confirmPassword}
                                type="password"
                            />
                        </div>
                }
            </div>
            <div className="row">
                <div className="col-lg-12 txt-center">
                    <Button
                        color="success"
                        onClick={onSubmit}
                        disabled={!email || !password ? true : false}
                    >Submit</Button>
                </div>
            </div>
        </div>
    </div>
);

accountComponent.propTypes = {
    onChange : PropTypes.func.isRequired,
    error : PropTypes.string,
    onSubmit : PropTypes.func.isRequired,
    confirmPassword : PropTypes.string,
    email : PropTypes.string.isRequired,
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    signup : PropTypes.bool,
    password : PropTypes.string.isRequired
};

accountComponent.defaultProps = {
    confirmPassword : null,
    firstName : null,
    lastName : null,
    signup : null,
    error           : null
};

export default accountComponent;
