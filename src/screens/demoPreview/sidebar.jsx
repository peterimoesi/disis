import React from 'react';
import PropTypes from 'prop-types';

const sidebar = ({ toggle }) => (
    <div className="sidebar">
        <div
            className="sidebar-item"
            onClick={() => toggle('changeTheme')}
            role="button"
            tabIndex="0"
        >
                        Change theme
        </div>
    </div>
);

sidebar.propTypes = {
    toggle : PropTypes.func.isRequired
};

export default sidebar;
