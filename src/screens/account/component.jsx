import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'mdbreact';

import './styles.scss';

const accountComponent = ({ onChange, error, onSubmit, email, password, showConfirmPass, confirmPassword }) => (
    <div className="container">
        <div className="account-form-cont">
            <div className="row">
                <div className="col-lg-12 txt-center error-text">
                    {error}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="md-form">
                        <Input
                            label="Email"
                            name="email"
                            onChange={onChange}
                            value={email}
                            type="email"
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="md-form">
                        <Input
                            label="Password"
                            name="password"
                            onChange={onChange}
                            value={password}
                            type="password"
                        />
                    </div>
                </div>
                {
                    showConfirmPass &&
                        <div className="col-lg-12">
                            <div className="md-form">
                                <Input
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    onChange={onChange}
                                    value={confirmPassword}
                                    type="password"
                                />
                            </div>
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
    showConfirmPass : PropTypes.bool,
    password : PropTypes.string.isRequired
};

accountComponent.defaultProps = {
    confirmPassword : null,
    showConfirmPass : null,
    error           : null
};

export default accountComponent;
