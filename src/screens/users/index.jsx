import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserDetails, removeUserDetails } from './action';

import Themes from '../themes/container';

class Userpage extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.userName = this.props.match.params.userName;
    }
    componentDidMount() {
        this.props.getUserDetails(this.id, this.userName);
    }
    componentWillUnmount() {
        this.props.removeUserDetails();
    }
    render () {
        console.log(this.props.userData);
        return (
            <Themes
                userData={this.props.userData}
                profilePic={this.props.userData.image}
                themeType={this.props.userData.defaultTheme.id || 'default'} />
        );
    }
}

Userpage.propTypes = {
    match : PropTypes.object.isRequired,
    getUserDetails : PropTypes.func.isRequired,
    removeUserDetails : PropTypes.func.isRequired,
    userData : PropTypes.object.isRequired
};

function mapStateToProps({ previewData }) {
    return {
        userData : previewData.data
    };
}

export default connect(mapStateToProps, { getUserDetails, removeUserDetails })(Userpage);
