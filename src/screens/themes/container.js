import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DefaultTheme from './resume-default';

class ThemesContainer extends React.Component {
    render() {
        console.log(this.props);
        switch (this.props.themeType) {
        case 'premium':
            return (
                <div />
            );
        default:
            return (
                <DefaultTheme {...this.props} />
            );
        }
    }
}

function mapStateToProps({ previewData }) {
    return {
        userData : previewData.data
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
