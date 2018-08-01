import React from 'react';
import { connect } from 'react-redux';
import Colorpicker from '../../components/colorPicker';
import Themes from '../themes/container';

class LocalPreview extends React.Component {
    render() {
        return (
            <div>
                <Colorpicker />
                <Themes {...this.props} themeType="default" />
            </div>
        );
    }
}

function mapStateToProps({ previewData }) {
    return {
        userData : previewData.data
    };
}

export default connect(mapStateToProps)(LocalPreview);
