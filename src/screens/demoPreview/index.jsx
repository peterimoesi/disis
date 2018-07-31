import React from 'react';
import Colorpicker from '../../components/colorPicker';
import Themes from '../themes/container';

const localPreview = () => (
    <div>
        <Colorpicker />
        <Themes themeType="default" />
    </div>
);

export default localPreview;
