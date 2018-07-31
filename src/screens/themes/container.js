import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DefaultTheme from './resume-default';
import defaultImg from '../../public/imgs/default.jpg';

class ThemesContainer extends React.Component {
    render() {
        let theme;
        switch (this.props.themeType) {
        case 'premium':
            theme = <div />;
            break;
        case 'default':
            theme = 
            <DefaultTheme
                {...this.props}
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

function mapStateToProps({ previewData, themeColors, userAuthentication }) {
    return {
        userData : userAuthentication.isAuthenticated ? userAuthentication.user.user : previewData.data,
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
