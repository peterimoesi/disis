import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './css/resume.scss';

const resumeDefault = ({
    userData,
    defaultImg,
    toggleNav,
    isOpen,
    themeColors,
    profilePic,
    parseMonth
}) => (
    <div className="resume-default-cont" style={{ backgroundColor : themeColors.secondary }}>
        <Navbar className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor : themeColors.primary }} id="sideNav" fixed="top">
            <NavbarBrand className="mr-auto" href="#page-top">
                <span className="d-block d-lg-none">{`${userData.firstName || 'Your'} ${userData.lastName || 'name'}`}</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ profilePic || defaultImg} alt="" />
                </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link js-scroll-trigger" href="#about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link js-scroll-trigger" href="#experience">Experience</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link js-scroll-trigger" href="#education">Education</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link js-scroll-trigger" href="#skills">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link js-scroll-trigger" href="#interests">Interests</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

        <div className="container-fluid p-0">

            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">{userData.firstName} <span style={{ color : themeColors.primary }}>{userData.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{userData.phoneNumber} <span> </span>
                        <a href="mailto:name@email.com" style={{ color : themeColors.primary }}>{userData.email}</a>
                    </div>
                    <p className="mb-5">{userData.biography}</p>
                    <ul className="list-inline list-social-icons mb-0">
                        {
                            Object.keys(userData.social).map((key, i) => (
                                userData.social[key] ? 
                                    <li key={key} className="list-inline-item">
                                        <a target="_blank" rel="noopener noreferrer" href={userData.social[key]}>
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className={`fa fa-${key} fa-stack-1x fa-inverse`}></i>
                                            </span>
                                        </a>
                                    </li> : null
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    {
                        userData.experience.map((exp, i) => (
                            <div key={i} className="resume-item d-flex flex-column flex-md-row mb-5">
                                <div className="resume-content mr-auto">
                                    <h3 className="mb-0">{exp.jobTitle}</h3>
                                    <div className="subheading mb-3">{exp.employer}</div>
                                    <p>{exp.jobDescription}</p>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span style={{ color : themeColors.primary }}>{parseMonth(exp.startDate)} - {exp.endDate ? parseMonth(exp.endDate, exp.startDate) : 'present'}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    {
                        userData.education.map((edu, i) => (
                            <div key={i} className="resume-item d-flex flex-column flex-md-row mb-5">
                                <div className="resume-content mr-auto">
                                    <h3 className="mb-0">{edu.school}</h3>
                                    <div className="subheading mb-3">{edu.degree}</div>
                                    <div>{edu.program}</div>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span style={{ color : themeColors.primary }}>August 2006 - May 2010</span>
                                </div>
                            </div>
                        ))
                    }

                    
                </div>
            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <ul className="fa-ul mb-0">
                        {
                            userData.skills.map((skill, i) => (
                                <li key={i}>
                                    <i className="fa-li fa fa-check" />
                                    {skill}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                <div className="my-auto">
                    <h2 className="mb-5">Interests</h2>
                    <ul className="fa-ul mb-0">
                        {
                            userData.interest.map((interest, i) => (<li key={i}><i className="fa-li fa fa-check" />{interest}</li>))
                        }
                    </ul>
                </div>
            </section>

            {/* <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                <div className="my-auto">
                    <h2 className="mb-5">Awards &amp; Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-trophy text-warning" />
                                 Google Analytics Certified Developer
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            Mobile Web Specialist - Google Certification
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            1<sup>st</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2009
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            1<sup>st</sup>
                            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning" />
                            2<sup>nd</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2008
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            1<sup>st</sup>
                            Place - James Buchanan High School - Hackathon 2006
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning" />
                            3<sup>rd</sup>
                            Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                </div>
            </section> */}

        </div>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
    </div>
);

resumeDefault.propTypes = {
    userData : PropTypes.object.isRequired,
    defaultImg : PropTypes.string.isRequired,
    toggleNav : PropTypes.func.isRequired,
    isOpen : PropTypes.bool.isRequired,
    themeColors : PropTypes.object.isRequired,
    profilePic : PropTypes.string.isRequired,
    parseMonth : PropTypes.func.isRequired
};

export default resumeDefault;
