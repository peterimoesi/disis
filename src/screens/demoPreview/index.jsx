import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';
import Colorpicker from '../../components/colorPicker';
import Themes from '../themes/container';
import ThemeSelect from '../../components/themeSelect';
import Sidebar from './sidebar';

import { updatePreview } from './action';

import './styles.scss';

class LocalPreview extends React.Component {
    constructor() {
        super();
        this.state = {
            modal : false,
            makeItYours : false
        };
        this.toggle = this.toggle.bind(this);
        this.handleThemeSelect = this.handleThemeSelect.bind(this);
    }
    componentDidMount() {
        setTimeout(() => this.setState({ makeItYours : true }), 2000);
    }
    toggle() {
        this.setState({ modal : !this.state.modal });
    }
    handleThemeSelect(theme) {
        this.props.updatePreview({
            defaultTheme : {
                id : theme
            }
        });
    }

    render() {
        return (
            <div className="demo-dashboard">
                {this.state.modal ?
                    <div className="modal-container">
                        <div className="modal-child">
                            <div className="close-cont">
                                <i className="modal-close fa fa-close"
                                    role="button"
                                    tabIndex="0"
                                    onClick={this.toggle}
                                />
                            </div>
                            <ThemeSelect
                                handleThemeSelect={this.handleThemeSelect}
                            />
                        </div>
                    </div> : null}
                <Sidebar
                    toggle={this.toggle}
                />
                <Colorpicker />
                <Themes {...this.props} themeType={ this.props.userData.defaultTheme.id || 'default'} />
                <div>
                    <Link
                        to={{
                            pathname: '/app/signup',
                            state : { fromDemo : true }
                        }}
                    >
                        <Button
                            color="success"
                            className={`make-it-yours ${this.state.makeItYours ? 'make-it-yours-show' : ''}`}
                        >
                        Make it yours
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

LocalPreview.propTypes = {
    updatePreview : PropTypes.func.isRequired,
    userData : PropTypes.object.isRequired
};

function mapStateToProps({ previewData }) {
    return {
        userData : previewData.data
    };
}

export default connect(mapStateToProps, { updatePreview })(LocalPreview);
