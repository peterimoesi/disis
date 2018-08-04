import React from 'react';
import PropTypes from 'prop-types';

const sidebar = ({ toggle, removeUserCredentials }) => (
    <div className="sidebar">
        <div
            className="sidebar-item"
            onClick={() => toggle('changeTheme')}
            role="button"
            tabIndex="0"
        >
                        Change theme
        </div>
        <div
            className="sidebar-item"
            onClick={() => toggle('editTheme')}
            role="button"
            tabIndex="0"
        >
                        Edit theme
        </div>
        <div
            className="sidebar-item"
            onClick={() => toggle('accountDetails')}
            role="button"
            tabIndex="0"
        >
                        Account details
        </div>
        <div
            className="sidebar-item"
            onClick={() => removeUserCredentials()}
            role="button"
            tabIndex="0"
        >logout</div>
    </div>
);

sidebar.propTypes = {
    toggle : PropTypes.func.isRequired,
    removeUserCredentials : PropTypes.func.isRequired
};

export default sidebar;
