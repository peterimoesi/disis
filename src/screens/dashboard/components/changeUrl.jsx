import React from 'react';
import { Button, Input } from 'mdbreact';
import PropTypes from 'prop-types';


const changeUrl = ({
    defaultUserName,
    userId,
    changingUrl,
    userName,
    onChange,
    toggleUrlChange,
    handleUserNameSave,
    changingUrlError,
    waiting
}) => (
    <div className="user-page-link">
        Your url :
        { changingUrl ?
            <div className="change-url-form">
                <span>{`${window.location.origin}/`}</span>
                <Input
                    label='Please enter your preferred url'
                    name="userName"
                    value={userName}
                    onChange={onChange}
                    type="text"
                    defaultValue={defaultUserName}
                    className={changingUrlError ? 'is-invalid' : '' }
                />
            </div> :
            <input
                readOnly
                value={`${window.location.origin}/${defaultUserName ? defaultUserName : 'user/'}${!defaultUserName ? userId : ''}`}
            />
        }
        <Button
            color={changingUrl ? 'success' : 'default' }
            onClick={() => changingUrl ? handleUserNameSave() : toggleUrlChange()}
            disabled={waiting}
        >
            { changingUrl ? 'Save' : 'Change' }
        </Button>
        { !changingUrl ?<div className="link-message">Copy the link to your public profile</div> : null }
    </div>
);

changeUrl.propTypes = {
    defaultUserName : PropTypes.string.isRequired,
    changingUrl : PropTypes.bool.isRequired,
    userName : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    userId : PropTypes.string.isRequired,
    toggleUrlChange : PropTypes.func.isRequired,
    handleUserNameSave : PropTypes.func.isRequired,
    changingUrlError : PropTypes.bool.isRequired,
    waiting : PropTypes.bool.isRequired
};

export default changeUrl;
