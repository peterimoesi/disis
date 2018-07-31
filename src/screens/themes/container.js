import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DefaultTheme from './resume-default';
import defaultImg from '../../public/imgs/default.jpg';
import ColorPicker from '../../components/colorPicker';

class ThemesContainer extends React.Component {
    render() {
        let theme;
        switch (this.props.themeType) {
        case 'premium':
            theme = <div />;
            break;
        default:
            theme = 
            <DefaultTheme
                {...this.props}
                defaultImg={defaultImg}
            />;
            break;
        }
        return (
            <div>
                {theme}
                <ColorPicker />
            </div>
        );
    }
}

function mapStateToProps({ previewData, themeColors }) {
    return {
        userData : previewData.data,
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
