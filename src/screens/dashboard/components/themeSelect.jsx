import React from 'react';
import PropTypes from 'prop-types';


import defaultTheme from '../../../public/imgs/themes/default.png';
import orbitTheme from '../../../public/imgs/themes/orbit.png';

const themeSelect = ({ handleThemeSelect  }) => (
    <div className="modal-user-info custom-scrollbar">
        <div className="theme-preview-cont">
            <div className="theme-select">
                <div
                    className="theme-item img-thumbnail"
                    onClick={() => handleThemeSelect('default') }
                    tabIndex="0"
                    role="button"
                >
                    <img className="" src={defaultTheme} />
                </div>
                <div
                    className="theme-item img-thumbnail"
                    onClick={() => handleThemeSelect('orbit') }
                    tabIndex="0"
                    role="button"
                >
                    <img className="" src={orbitTheme} />
                </div>
            </div>
            <div className="txt-center"style={{ marginTop : '30px' }}>More themes are coming soon...</div>
        </div>
    </div>
);

themeSelect.propTypes = {
    handleThemeSelect : PropTypes.func.isRequired
};

export default themeSelect;
