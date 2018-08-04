import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DefaultTheme from './resume-default';
import OrbitTheme from './orbit';
import defaultImg from '../../public/imgs/default.jpg';

const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];

function parseMonth (d) {
    const date = new Date(d);
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
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
                userThemeColors={this.props.userData.defaultTheme.color}
            />;
            break;
        case 'default':
            theme = 
            <DefaultTheme
                {...this.props}
                parseMonth={parseMonth}
                defaultImg={defaultImg}
                userThemeColors={this.props.userData.defaultTheme.color}
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
    userData  : PropTypes.object.isRequired
};

ThemesContainer.defaultProps = {
    themeType : null
};

export default connect(mapStateToProps)(ThemesContainer);
