import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';
import PropTypes from 'prop-types';

import Sidebar from './components/sidebar';
import ThemeSelect from './components/themeSelect';
import ChangeUrl from './components/changeUrl';
import Themes from '../themes/container';
import Userform from '../../components/userPageForm';
import ColorPicker from '../../components/colorPicker';

import { removeUserCredentials } from '../../actions/setUserCredentials';
import { uploadImg, getUserImage } from './action';
import { updateUser } from '../../components/userPageForm/actions';

import './styles.scss';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            modalContent : '',
            uploadImage : '',
            waiting : false,
            profilePic : '',
            userName : '',
            changingUrl : false,
            changingUrlError : false
        };
        this.onChange = this.onChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleThemeColorSave = this.handleThemeColorSave.bind(this);
        this.saveImage = this.saveImage.bind(this);
        this.handleThemeSelect = this.handleThemeSelect.bind(this);
        this.toggleUrlChange = this.toggleUrlChange.bind(this);
        this.handleUserNameSave = this.handleUserNameSave.bind(this);
    }

    componentDidMount() {
        this.props.getUserImage(this.props.userData.id)
            .then(res => this.setState({ profilePic : res }));
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleKeyDown(e) {
        if (e.which === 27 && this.state.modal) {
            this.toggleModal();
        }
    }

    toggleModal(content) {
        this.setState({
            modal: !this.state.modal,
            modalContent : content,
            userImage : ''
        });
    }

    toggleUrlChange() {
        this.setState({ changingUrl : !this.state.changingUrl });
    }

    handleFileUpload(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setState({ uploadImage : e.target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    saveImage() {
        this.setState({ waiting : true });
        this.props.uploadImg(this.props.userData.id, this.state.uploadImage, this.props.token)
            .then(() => this.setState({ waiting : false,  profilePic : this.state.uploadImage, modal : false  }));
    }

    handleThemeColorSave() {
        this.props.updateUser({ defaultTheme : {
            id : this.props.userData.defaultTheme.id || 'default',
            color : this.props.themeColors
        }
        }, this.props.userData.id, this.props.token)
            .then(() => this.setState({ waiting : false, modal : false  }));
    }

    handleUserNameSave() {
        if (this.state.userName) {
            this.setState({ waiting : true });
            this.props.updateUser({ userName : this.state.userName }, this.props.userData.id, this.props.token)
                .then((res) => res === 200 ? this.setState({ changingUrl : false, waiting : false }) :
                    this.setState({ changingUrlError : true, waiting : false }));
        }
    }

    handleThemeSelect(id) {
        this.props.updateUser({ defaultTheme : {
            id : id || 'default',
            color : {}
        }
        }, this.props.userData.id, this.props.token)
            .then(() => this.setState({ waiting : false }));
    }

    render() {
        return (
            <div className="dashboard-cont">
                <Themes
                    profilePic={this.state.profilePic}
                    userData={this.props.userData}
                    themeType={this.props.userData.defaultTheme.id}
                />
                <Sidebar
                    removeUserCredentials={this.props.removeUserCredentials}
                    toggle={this.toggleModal}
                />
                {
                    this.state.modal ?
                        <div className="modal-container">
                            <div className="modal-child">
                                <div className="close-cont">
                                    <i className="modal-close fa fa-close"
                                        role="button"
                                        tabIndex="0"
                                        onClick={this.toggleModal}
                                    />
                                </div>
                                <ChangeUrl
                                    onChange={this.onChange}
                                    userName={this.state.userName}
                                    defaultUserName={this.props.userData.userName}
                                    userId={this.props.userData.id}
                                    changingUrl={this.state.changingUrl}
                                    toggleUrlChange={this.toggleUrlChange}
                                    handleUserNameSave={this.handleUserNameSave}
                                    changingUrlError={this.state.changingUrlError}
                                    waiting={this.state.waiting}
                                />
                                { this.state.modalContent === 'accountDetails' ?
                                    <div>
                                        <div className="picture-upload">
                                            <label htmlFor="fileUpload">Upload your CV photo</label>
                                            <input type="file" name="pic" accept="image/*" id="fileUpload" onChange={this.handleFileUpload} />
                                            <Button
                                                color="success"
                                                disabled={this.state.waiting}
                                                onClick={() => !this.state.waiting ? this.saveImage() : null}>
                                                    Upload
                                            </Button>
                                        </div>
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
                                            <Button color="success" onClick={this.handleThemeColorSave}>Save</Button>
                                        </div>
                                    </div> : null
                                }
                                { this.state.modalContent === 'changeTheme' ?
                                    <ThemeSelect
                                        handleThemeSelect={this.handleThemeSelect}
                                    /> : null
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
    themeColors : PropTypes.object.isRequired,
    getUserImage : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { removeUserCredentials, uploadImg, updateUser, getUserImage })(Dashboard);
