import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'mdbreact';

import Navbar from '../../components/nav';
import landingVideo from '../../public/videos/landing.mp4';

import UserForm from '../../components/userPageForm';


import './styles.scss';

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="home-landing">
                <div className="background-video">
                    <Navbar />
                    <video src={landingVideo} autoPlay loop muted width="100%" height="100%" />
                    <div className="bg-vid-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-24 col-xs-24">
                                    <h1 className="landing-main txt-center">DISIS ME</h1>
                                    <div className="txt-center">
                                        <HashLink
                                            smooth
                                            to="#user-form"
                                        >
                                            <Button color="dark-green">
                                            Click to begin
                                            </Button>
                                        </HashLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 hiddden-sm hidden-xs">
                                    <div className="list-cont">
                                        <ul>
                                            <li>Host your Resume to your customizable page in seconds</li>
                                            <li>Use and share your own custom link with future employer</li>
                                            <li>Select one of the many custom themes</li>
                                            <li>Make the theme your own from 16 million color combinations</li>
                                            <li>Update your information in a matter of seconds</li>
                                            <li>Avoid the hassle of downloading, editing and uploading PDFs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden-lg hidden-md external-list list-cont">
                    <h3 className="txt-center">About</h3>
                    <div>
                        <ul>
                            <li>Host your Resume to your customizable page in seconds</li>
                            <li>Use and share your own custom link with future employer</li>
                            <li>Select one of the many custom themes</li>
                            <li>Make the theme your own from 16 million color combinations</li>
                            <li>Update your information in a matter of seconds</li>
                            <li>Avoid the hassle of downloading, editing and uploading PDFs</li>
                        </ul>
                    </div>
                </div>
                <div className="container" id="user-form">
                    <UserForm {...this.props} />
                </div>
                <div className="footer-cont">
                    <div className="container">
                        <footer>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
