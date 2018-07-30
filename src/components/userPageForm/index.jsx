import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserFormComponent from './component';
import { onPreview } from './actions';

const today = new Date();

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails : {
                firstName : '',
                lastName : '',
                phoneNumber : '',
                biography : '',
                age : '',
                linkedInhref : '',
                experience : [],
                education : [],
                interest : '',
                skills : [],
                social : {
                    linkedin : '',
                    facebook : '',
                    twitter : '',
                    instagram : ''
                }
            },
            currentPage : 0
        };
        this.onChange = this.onChange.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.addNewExp = this.addNewExp.bind(this);
        this.addNewEdu = this.addNewEdu.bind(this);
        this.expEduOnchange = this.expEduOnchange.bind(this);
        this.selectDegree = this.selectDegree.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.addNewSkill = this.addNewSkill.bind(this);
        this.onSkillChange = this.onSkillChange.bind(this);
        this.onPreview = this.onPreview.bind(this);
        this.socailOnChange = this.socailOnChange.bind(this);
    }

    onChange(e) {
        const { userDetails } = this.state;
        userDetails[e.target.name] = e.target.value;
        this.setState({ userDetails });
    }

    nextPage() {
        this.setState({ currentPage : this.state.currentPage + 1 });
    }

    prevPage() {
        this.setState({ currentPage : this.state.currentPage - 1 });
    }

    addNewExp() {
        const { experience } = this.state.userDetails;
        experience.push({
            employer : '',
            jobTitle : '',
            startDate : today,
            endDate : '',
            jobDescription : ''
        });
        this.setState({ experience });
    }

    addNewEdu() {
        const { education } = this.state.userDetails;
        education.push({
            school : '',
            program : '',
            degree : '',
            startDate : today,
            endDate : '',
            schoolDescription : ''
        });
        this.setState({ education });
    }

    addNewSkill() {
        const { skills } = this.state.userDetails;
        skills.push('');
        this.setState({ skills });
    }

    onSkillChange(i, value) {
        const { userDetails } = this.state;
        userDetails.skills[i] = value;
        this.setState({ userDetails });
    }

    expEduOnchange(e, name, i) {
        const { userDetails } = this.state; 
        const current = userDetails[name];
        const currentObject = current[i];
        currentObject[e.target.name] = e.target.value;
        this.setState({ userDetails });
    }

    selectDegree(i, value) {
        const { userDetails } = this.state;
        const currentObject = userDetails.education[i];
        currentObject.degree = value;
        this.setState({ userDetails });
    }

    dateChange(i, name, target, value) {
        const { userDetails } = this.state; 
        const current = userDetails[name];
        const currentObject = current[i];
        currentObject[target] = value;
        this.setState({ userDetails });
    }

    onPreview() {
        this.props.onPreview(this.state.userDetails);
        this.props.history.push('/preview/local');
    }

    socailOnChange(e) {
        const { userDetails } = this.state;
        userDetails.social[e.target.name] = e.target.value;
        this.setState({ userDetails });
    }


    render() {
        console.log(this.state.currentPage);
        return (
            <div className="user-form-container">
                <div>
                    <h2 className="title mb-5 txt-center">Please fill in the information</h2>
                </div>
                <UserFormComponent
                    userDetails={this.state.userDetails}
                    onChange={this.onChange}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    currentPage={this.state.currentPage}
                    addNewExp={this.addNewExp}
                    addNewEdu={this.addNewEdu}
                    expEduOnchange={this.expEduOnchange}
                    dateChange={this.dateChange}
                    addNewSkill={this.addNewSkill}
                    selectDegree={this.selectDegree}
                    onSkillChange={this.onSkillChange}
                    onPreview={this.onPreview}
                    socailOnChange={this.socailOnChange}
                />
            </div>
        );
    }
}

UserForm.propTypes = {
    onPreview : PropTypes.func.isRequired,
    history : PropTypes.object.isRequired
};

export default connect(null, { onPreview })(UserForm);