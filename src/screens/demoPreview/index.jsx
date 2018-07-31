import React from 'react';
import Colorpicker from '../../components/colorPicker';
import Themes from '../themes/resume-default';

const localPreview = () => (
    <div>
        <Colorpicker />
        <Themes themeType="default" />
    </div>
);

export default localPreview;
