import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* START FOOTER SECTION */}
            <div className="footer pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-location-box">
                                <div className="footer-logo">
                                    <img src="assets/images/werthan-logo-4.png" alt="Footer-logo" />
                                </div>
                                <div className="footer-content">
                                    <p>There are many variations of pass of Lorem Ipsum available, but the majority have suffered</p>
                                </div>
                            </div>
                            <div className="footer-social-box">
                                <div className="social-content">
                                    <h3>Follow Us</h3>
                                </div>
                                <div className="footer-about-social-icon pt-20">
                                    <ul>
                                        <li>
                                            <a href="#;"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#;"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#;"><i className="fab fa-pinterest"></i></a>
                                        </li>
                                        <li>
                                            <a href="#;"><i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <div className="footer-quick-link">
                                    <div className="footer-widget-title">
                                        <h3>Help Links</h3>
                                    </div>
                                    <div className="footer-quick-link-list">
                                        <ul>
                                            <li><a href="#;">What Is ICO</a></li>
                                            <li><a href="#;">Token</a></li>
                                            <li><a href="#;">Road Map</a></li>
                                            <li><a href="#;">Advisor</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <div className="footer-quick-link-list">
                                    <div className="footer-widget-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="footer-quick-link-list">
                                        <ul>
                                            <li><a href="#;">ICO Apps</a></li>
                                            <li><a href="#;">White Papers</a></li>
                                            <li><a href="#;">Teams</a></li>
                                            <li><a href="#;">Join Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="widget">
                                <div className="footer-popular-post ">
                                    <div className="footer-widget-title two">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="footer-content-text">
                                        <p>Sent Us a Newsletter And Get Update</p>
                                    </div>
                                    <div className="subscribe-area">
                                        <input className="subscribe-mail-box" type="email" placeholder="Enter Your Email...." required="" />
                                        <button className="subscribe-button" >Subscribe</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row upper11 mt-50 align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-copyright-text">
                                <p className="text-white">Copyright © cryptozen all rights reserved. </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-copyright-content">
                                <div className="footer-sicial-address-link">
                                    <ul>
                                        <li><a href="#;">Terms Condition</a></li>
                                        <li><a href="#;">Privacy Policy</a></li>
                                        <li><a href="#;">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer