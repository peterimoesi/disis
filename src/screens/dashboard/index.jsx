import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';
import PropTypes from 'prop-types';
import Themes from '../themes/container';
import Userform from '../../components/userPageForm';
import ColorPicker from '../../components/colorPicker';
import { removeUserCredentials } from '../../actions/setUserCredentials';

import { uploadImg, getUserImage } from './action';
import { updateUser } from '../../components/userPageForm/actions';

import defaultTheme from '../../public/imgs/themes/default.png';

import './styles.scss';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            modalContent : '',
            uploadImage : '',
            waiting : false,
            profilePic : ''
        };
        this.toggle = this.toggle.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleThemeSave = this.handleThemeSave.bind(this);
        this.saveImage = this.saveImage.bind(this);
    }

    componentDidMount() {
        this.props.getUserImage(this.props.userData.id)
            .then(res => this.setState({ profilePic : res }));
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
            modalContent : content,
            userImage : ''
        });
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
                <Themes
                    profilePic={this.state.profilePic}
                    userData={this.props.userData}
                    themeType="default"
                />
                <div className="sidebar">
                    <div
                        className="sidebar-item"
                        onClick={() => this.toggle('changeTheme')}
                        role="button"
                        tabIndex="0"
                    >
                        Change theme
                    </div>
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
                                <div className="close-cont">
                                    <i className="modal-close fa fa-close"
                                        role="button"
                                        tabIndex="0"
                                        onClick={this.toggle}
                                    />
                                </div>
                                <div className="user-page-link">
                                    Your url :
                                    <a href={`${window.location.origin}/${this.props.userData.id}`} target="_blank" rel="noopener noreferrer">
                                        {`${window.location.origin}/${this.props.userData.id}`}
                                    </a>
                                </div>
                                { this.state.modalContent === 'accountDetails' ?
                                    <div>
                                        <div className="picture-upload">
                                            <label htmlFor="fileUpload">Choose file to upload</label>
                                            <input type="file" name="pic" accept="image/*" id="fileUpload" onChange={this.handleFileUpload} />
                                            <Button
                                                color="success"
                                                disabled={this.state.waiting}
                                                onClick={!this.state.waiting && this.saveImage}>
                                                    Save
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
                                            <Button color="success" onClick={this.handleThemeSave}>Save</Button>
                                        </div>
                                    </div> : null
                                }
                                { this.state.modalContent === 'changeTheme' ?
                                    <div className="modal-user-info custom-scrollbar">
                                        <div className="theme-preview-cont">
                                            <div className="theme-item img-thumbnail"><img className="" src={defaultTheme} /></div>
                                            <div className="txt-center"style={{ marginTop : '30px' }}>More themes are coming soon...</div>
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
    themeColors : PropTypes.object.isRequired,
    getUserImage : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { removeUserCredentials, uploadImg, updateUser, getUserImage })(Dashboard);
