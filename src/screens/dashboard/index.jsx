import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';
import PropTypes from 'prop-types';
import Themes from '../themes/container';
import Userform from '../../components/userPageForm';
import ColorPicker from '../../components/colorPicker';
import { removeUserCredentials } from '../../actions/setUserCredentials';

import { uploadImg } from './action';
import { updateUser } from '../../components/userPageForm/actions';

import './styles.scss';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            modalContent : ''
        };
        this.toggle = this.toggle.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleThemeSave = this.handleThemeSave.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(e) {
        if (e.which === 27 && this.state.modal) {
            this.toggle();
        }
    }

    toggle(content) {
        this.setState({
            modal: !this.state.modal,
            modalContent : content
        });
    }

    handleFileUpload(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('filename', e.target.value);
        this.props.uploadImg(this.props.userData.id, data, this.props.token);
    }

    handleThemeSave() {
        this.props.updateUser({ defaultTheme : {
            id : 'default',
            color : this.props.themeColors
        }
        }, this.props.userData.id, this.props.token);
    }

    render() {
        return (
            <div className="dashboard-cont">
                <Themes userData={this.props.userData} themeType="default" />
                <div className="sidebar">
                    <div className="sidebar-item">Change theme</div>
                    <div
                        className="sidebar-item"
                        onClick={() => this.toggle('editTheme')}
                        role="button"
                        tabIndex="0"
                    >
                        Edit theme
                    </div>
                    <div
                        className="sidebar-item"
                        onClick={() => this.toggle('accountDetails')}
                        role="button"
                        tabIndex="0"
                    >
                        Account details
                    </div>
                    <div
                        className="sidebar-item"
                        onClick={() => this.props.removeUserCredentials()}
                        role="button"
                        tabIndex="0"
                    >logout</div>
                </div>
                {
                    this.state.modal ?
                        <div className="modal-container">
                            <div className="modal-child">
                                <div className="user-page-link">
                                    {`${window.location.origin}/${this.props.userData.id}`}
                                </div>
                                <div className="close-cont">
                                    <i className="modal-close fa fa-close"
                                        role="button"
                                        tabIndex="0"
                                        onClick={this.toggle}
                                    />
                                </div>
                                { this.state.modalContent === 'accountDetails' ?
                                    <div>
                                        {/* <div className="picture-upload">
                                            <label htmlFor="fileUpload">Choose file to upload</label>
                                            <input type="file" name="pic" accept="image/*" id="fileUpload" onChange={this.handleFileUpload} />
                                            <Button color="success" onClick={null}>Save</Button>
                                        </div> */}
                                        <div className="modal-user-info custom-scrollbar">
                                            <Userform
                                                {...this.props}
                                                removePreview
                                                showSave
                                            />
                                        </div>
                                    </div> : null
                                }
                                { this.state.modalContent === 'editTheme' ?
                                    <div className="modal-user-info custom-scrollbar">
                                        <ColorPicker />
                                        <div className="buttons-cont txt-center" style={{ marginTop : '10px' }}>
                                            <Button color="success" onClick={this.handleThemeSave}>Save</Button>
                                        </div>
                                    </div> : null
                                }
                            </div>
                        </div> : null
                }
                
            </div>
        );
    }
}

function mapStateToProps({ userAuthentication, themeColors }) {
    return {
        userData : userAuthentication.user.user,
        token : userAuthentication.user.token,
        themeColors
    };
}

Dashboard.propTypes = {
    removeUserCredentials : PropTypes.func.isRequired,
    userData : PropTypes.object.isRequired,
    updateUser : PropTypes.func.isRequired,
    uploadImg : PropTypes.func.isRequired,
    token : PropTypes.string.isRequired,
    themeColors : PropTypes.object.isRequired
};

export default connect(mapStateToProps, { removeUserCredentials, uploadImg, updateUser })(Dashboard);
