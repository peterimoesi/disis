import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';
import Themes from '../themes/container';
import Userform from '../../components/userPageForm';
import ColorPicker from '../../components/colorPicker';

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

    render() {
        return (
            <div className="dashboard-cont">
                <Themes themeType="default" />
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
                    <div className="sidebar-item">logout</div>
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
                                { this.state.modalContent === 'accountDetails' ?
                                    <div className="modal-user-info custom-scrollbar">
                                        <Userform
                                            removePreview
                                            showSave
                                        />
                                    </div> : null
                                }
                                { this.state.modalContent === 'editTheme' ?
                                    <div className="modal-user-info custom-scrollbar">
                                        <ColorPicker />
                                        <div className="buttons-cont txt-center">
                                            <Button color="success" onClick={null}>Save</Button>
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

// function mapStateToProps({ themeColors }) {
//     return
// }

export default connect(null)(Dashboard);
