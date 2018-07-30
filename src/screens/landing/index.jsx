import React from 'react';
// import { HashLink } from 'react-router-hash-link';

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
                                <div className="col-lg-12">
                                    <div>
                                        <button type="button" className="btn btn-default btn-sm button-no-border">
                                            <span className="glyphicon glyphicon-menu-down" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <UserForm {...this.props} />
                </div> 
            </div>
        );
    }
}

export default Landing;
