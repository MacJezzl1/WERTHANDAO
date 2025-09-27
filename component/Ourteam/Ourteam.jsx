import React from 'react'
import { useRouter } from 'next/router'

const Ourteam = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <>
            <div className={`team-section style-${pathname === '/team' ? 'three' : 'four'} pt-80 pb-80`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dreamit-section-title text-center pb-20">
                                <div className="dreamit-section-sub-title">
                                    <h5>OUR TEAM</h5>
                                </div>
                                <div className="dreamit-section-main-title">
                                    <h1>Meet Our Expert Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-1.png" alt="" />
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h3>John Abraham</h3>
                                    <span>Head of Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-2.png" alt="" />
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content two">
                                    <h3>Robert Philips</h3>
                                    <span>Chef Executive</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-3.png" alt="" />
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content three">
                                    <h3>Sandra Irvin</h3>
                                    <span>HR Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-4.png" alt="" />
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content four">
                                    <h3>Julia Pacheco</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-inner-box text-center pt-50">
                                <div className="team-inner-thumb">
                                    <img src="assets/images/team/btn.png" alt="" />
                                </div>
                                <div className="inner-btn">
                                    <a href="#;">More Member <i className="flaticon-arrow-pointing-to-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-100">
                        <div className="col-lg-12">
                            <div className="dreamit-section-title text-center pb-20">
                                <div className="dreamit-section-main-title">
                                    <h1>Advisor</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-advisor-box">
                                        <div className="advisor-thumb">
                                            <img src="assets/images/advisor/one.png" alt="" />
                                            <div className="advisor-social-icon">
                                                <a href="#;"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="advisor-content">
                                            <h2>Samuel Mireles</h2>
                                            <span>Fin-Tech-Investor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-advisor-box two">
                                        <div className="advisor-thumb">
                                            <img src="assets/images/advisor/two.png" alt="" />
                                            <div className="advisor-social-icon two">
                                                <a href="#;"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="advisor-content">
                                            <h2>Nicole Garling</h2>
                                            <span>Entrepreneur</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-advisor-box three">
                                        <div className="advisor-thumb">
                                            <img src="assets/images/advisor/three.png" alt="" />
                                            <div className="advisor-social-icon three">
                                                <a href="#;"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="advisor-content">
                                            <h2>Joseph Cannon</h2>
                                            <span>Business Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourteam;