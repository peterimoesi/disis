import React from 'react';
import Navbar from '../../components/nav';

import landingVideo from '../../public/videos/landing.mp4';

import './styles.scss';

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="background-video">
                    <video src={landingVideo} autoPlay loop muted width="100%" height="100%" />
                    <div className="bg-vid-overlay" />
                </div>
                <Navbar />
                <div>
                </div>
            </div>
        );
    }
}

export default Landing;
