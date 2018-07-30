import React from 'react';
import PropTypes from 'prop-types';

import './css/resume.scss';

const resumeDefault = ({ userData }) => (
    <div id="page-top" className="resume-default-cont">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Start Bootstrap</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
                </span>
            </a>
            <button className="navbar-toggler" role="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container-fluid p-0">

            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">{userData.firstName}
                        <span className="text-primary">{userData.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{userData.phoneNumber} <span> </span>
                        <a href="mailto:name@email.com">{userData.email}</a>
                    </div>
                    <p className="mb-5">{userData.biography}</p>
                    <ul className="list-inline list-social-icons mb-0">
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
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
                                    <span className="text-primary">March 2013 - Present</span>
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
                                    <span className="text-primary">August 2006 - May 2010</span>
                                </div>
                            </div>
                        ))
                    }

                    
                </div>
            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                            <i className="devicons devicons-html5"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-css3"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-javascript"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-jquery"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-sass"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-less"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-bootstrap"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-wordpress"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-grunt"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-gulp"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-npm"></i>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design</li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging</li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                <div className="my-auto">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
                </div>
            </section>

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
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
            </section>

        </div>
    </div>
);

resumeDefault.propTypes = {
    userData : PropTypes.object.isRequired
};

export default resumeDefault;
