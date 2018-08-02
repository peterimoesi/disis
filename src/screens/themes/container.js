import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DefaultTheme from './resume-default';
import OrbitTheme from './orbit';
import defaultImg from '../../public/imgs/default.jpg';

const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];

function parseMonth (d, c) {
    const date = new Date(d);
    const compareDate = c ? new Date(c) : null;
    return `${months[date.getMonth()]} ${date.getDate()} ${compareDate && date.getFullYear() > compareDate.getFullYear() ? date.getFullYear() : ''}`;
}

class ThemesContainer extends React.Component {
    render() {
        let theme;
        switch (this.props.themeType) {
        case 'orbit':
            theme = <OrbitTheme
                {...this.props}
                parseMonth={parseMonth}
                defaultImg={defaultImg}
            />;
            break;
        case 'default':
            theme = 
            <DefaultTheme
                {...this.props}
                parseMonth={parseMonth}
                defaultImg={defaultImg}
            />;
            break;
        default:
            theme = null;
            break;
        }
        return (
            <div>
                {theme}
            </div>
        );
    }
}

function mapStateToProps({ themeColors }) {
    return {
        themeColors
    };
}

ThemesContainer.propTypes = {
    themeType : PropTypes.string,
    // userData  : PropTypes.object.isRequired
};

ThemesContainer.defaultProps = {
    themeType : null
};

export default connect(mapStateToProps)(ThemesContainer);
