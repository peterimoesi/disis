import React from 'react';
import { Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import PropTypes from 'prop-types';



import Headers from '../htmlComponents/headers';

import './styles.scss';

const userDetailsForm = ({
    userDetails,
    onChange,
    nextPage,
    prevPage,
    currentPage,
    expEduOnchange,
    addNewExp,
    addNewEdu,
    dateChange,
    selectDegree,
    addNewSkill,
    onSkillChange,
    onPreview
}) => (
    <div>
        { currentPage === 0 &&
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Basic information
                        </Headers>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Input
                            label="First Name"
                            name="firstName"
                            onChange={onChange}
                            value={userDetails.firstName}
                            type="text"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Input
                            label="Last Name"
                            name="lastName"
                            onChange={onChange}
                            value={userDetails.lastName}
                            type="text"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Input
                            label="Email"
                            name="email"
                            onChange={onChange}
                            value={userDetails.email}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Input
                            label="Mobile"
                            name="phoneNumber"
                            onChange={onChange}
                            value={userDetails.phoneNumber}
                            type="text"
                        />
                    </div>
                    <div className="col-lg-12">
                        <Input
                            label="About me"
                            name="biography"
                            onChange={onChange}
                            value={userDetails.biography}
                            type="textarea"
                            rows="5"
                        />
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Experience *************************************/}
        { currentPage === 1 &&
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Experience
                        </Headers>
                    </div>
                </div>
                {
                    userDetails.experience.map((exp, i) => (
                        <div key={i}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Input
                                        label="Employer"
                                        name="employer"
                                        onChange={e => expEduOnchange(e, 'experience', i)}
                                        value={userDetails.experience[i].employer}
                                        type="text"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Input
                                        label="Job Title"
                                        name="jobTitle"
                                        onChange={e => expEduOnchange(e, 'experience', i)}
                                        value={userDetails.experience[i].jobTitle}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className='datepicker-wrapper' id={`datepicker-wrapper-${i}`}>
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'experience', 'startDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="Start Date"
                                                    defaultDate={userDetails.experience[i].startDate}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className="datepicker-wrapper">
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'experience', 'endDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="End Date"
                                                    minDate={userDetails.experience[i].startDate}
                                                    value={userDetails.experience[i].endDate}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="Job Descripton"
                                        name="jobDescription"
                                        onChange={e => expEduOnchange(e, 'experience', i)}
                                        value={userDetails.experience[i].jobDescription}
                                        type="textarea"
                                        rows="5"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="row">
                    <div className="col-lg-8 add-new-form">
                        <Button
                            outline
                            color="default"
                            onClick={addNewExp}
                        >
                            Add new +
                        </Button>
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Education *************************************/}
        { currentPage === 2 &&
            <div>
                <div className="row">
                    <div className="col-lg-24">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Education
                        </Headers>
                    </div>
                </div>
                {
                    userDetails.education.map((exp, i) => (
                        <div key={i}>
                            {/* { i > 0 && <hr />} */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="School"
                                        name="school"
                                        onChange={e => expEduOnchange(e, 'education', i)}
                                        value={userDetails.education[i].school}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Input
                                        label="Program"
                                        name="program"
                                        onChange={e => expEduOnchange(e, 'education', i)}
                                        value={userDetails.education[i].program}
                                        type="text"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Dropdown>
                                        <DropdownToggle caret color="primary">
                                            {userDetails.education[i].degree || 'Degree'}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={e => { e.preventDefault(); selectDegree(i, 'Phd');}}>Phd</DropdownItem>
                                            <DropdownItem onClick={e => { e.preventDefault(); selectDegree(i, 'Msc');}}>Msc</DropdownItem>
                                            <DropdownItem onClick={e => { e.preventDefault(); selectDegree(i, 'Bsc');}}>Bsc</DropdownItem>
                                            <DropdownItem onClick={e => { e.preventDefault(); selectDegree(i, 'Others');}}>Others</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className='datepicker-wrapper' id={`datepicker-wrapper-${i}`}>
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'education', 'startDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="Start Date"
                                                    defaultDate={userDetails.education[i].startDate}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className="datepicker-wrapper">
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'education', 'endDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="End Date"
                                                    minDate={userDetails.education[i].startDate}
                                                    value={userDetails.education[i].endDate}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="Descripton"
                                        name="schoolDescription"
                                        onChange={e => expEduOnchange(e, 'education', i)}
                                        value={userDetails.education[i].schoolDescription}
                                        type="textarea"
                                        rows="5"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="row">
                    <div className="col-lg-8 add-new-form">
                        <Button
                            outline
                            color="default"
                            onClick={addNewEdu}
                        >
                            Add new +
                        </Button>
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Skills ***** *************************************/}
        { currentPage === 3 &&
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Skills
                        </Headers>
                    </div>
                </div>
                <div className="row">
                    {
                        userDetails.skills.map((skill, i) => (
                            <div className="col-lg-4"  key={i}>
                                <Input
                                    label="Skill"
                                    name="skill"
                                    onChange={e => onSkillChange(i, e.target.value)}
                                    value={userDetails.skills[i]}
                                    type="text"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-lg-8 add-new-form">
                        <Button
                            outline
                            color="default"
                            onClick={addNewSkill}
                        >
                            Add new skill +
                        </Button>
                    </div>
                </div>
            </div>
        }
        <div className="row buttons-row">
            <div className="col-lg-4 buttons-cont">
                <Button
                    outline
                    color="default"
                    disabled={currentPage <= 0}
                    onClick={currentPage >= 0 ? prevPage : null}
                >
                    Previous
                </Button>
            </div>
            <div className="col-lg-4 buttons-cont">
                <Button
                    outline
                    color="primary"
                    onClick={currentPage < 3 ? nextPage : null}
                    disabled={currentPage >= 3}
                >
                    Next
                </Button>
            </div>
            <div className="col-lg-4 buttons-cont">
                <Button outline color="success" onClick={onPreview}>Preview</Button>
            </div>
        </div>
    </div>
);

userDetailsForm.propTypes = {
    userDetails : PropTypes.object.isRequired,
    onChange : PropTypes.func.isRequired,
    prevPage : PropTypes.func.isRequired,
    nextPage : PropTypes.func.isRequired,
    currentPage : PropTypes.number.isRequired,
    expEduOnchange : PropTypes.func.isRequired,
    addNewExp : PropTypes.func.isRequired,
    addNewEdu : PropTypes.func.isRequired,
    dateChange : PropTypes.func.isRequired,
    selectDegree : PropTypes.func.isRequired,
    addNewSkill : PropTypes.func.isRequired,
    onSkillChange : PropTypes.func.isRequired,
    onPreview : PropTypes.func.isRequired
};

export default userDetailsForm;