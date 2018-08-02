import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ChromePicker } from 'react-color';

import { onColorChange } from './action';
import './styles.scss';

class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            activeColor : ''
        };
    }

    render() {
        const { themeColors, onColorChange } = this.props;
        return (
            <div className="theme-selector">
                <div className={classnames('chrome-picker-cont', { 'chrome-picker-show' : this.state.activeColor })}>
                    <div className="chrome-picker-padding">
                        <i
                            className="fa fa-close close-picker" aria-hidden
                            onClick={() => this.setState({ activeColor : '' })}
                            role="button"
                            tabIndex="0"
                        />
                        <ChromePicker
                            color={themeColors[this.state.activeColor]}
                            onChange={ c => onColorChange(
                                this.state.activeColor,
                                c.hex
                            )}
                        />
                    </div>
                </div>
                <div className="color-picker-cont">
                    {
                        Object.keys(themeColors).map(key => (
                            <div
                                className="color-preview"
                                key={key} style={{ backgroundColor : themeColors[key] }}
                                tabIndex="0"
                                role="button"
                                onClick={() => this.setState({ activeColor : key })}
                            />
                        ))
                    }
                </div>
                <h3>Change theme</h3>
            </div>
        );
    }
}

function mapStateToProps({ themeColors }) {
    return {
        themeColors
    };
}

ColorPicker.propTypes = {
    themeColors : PropTypes.object.isRequired,
    onColorChange : PropTypes.func.isRequired
};


export default connect(mapStateToProps, { onColorChange })(ColorPicker);
