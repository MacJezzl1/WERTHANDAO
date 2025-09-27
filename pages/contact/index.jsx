import React from 'react'
import Breatcome from '@/component/Breatcome/Breatcome';

const index = () => {
    return (
        <>
            <Breatcome pageName='Contact' />
            <div className="contact-section style-two pt-100 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="contact_from upper10">
                                <div className="dreamit-section-title">
                                    <div className="dreamit-section-sub-title">
                                        <h5>Contact us</h5>
                                    </div>
                                </div>
                                <form action="#" method="POST" id="dreamit-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_box mb-2">
                                                <input className="form-control" type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-2">
                                                <input className="form-control" type="text" name="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-1">
                                                <input className="form-control" type="text" name="phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-1">
                                                <input className="form-control" type="text" name="Web" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box pt-1">
                                                <textarea className="form-control" name="message" id="message" cols="10" rows="5" placeholder=" message"></textarea>
                                            </div>
                                        </div>
                                        <div className="quote_btn text_center mt-2">
                                            <button className="btn" type="submit"> Send Now </button>
                                        </div>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="right-side-info">
                                <div className="dreamit-section-sub-title">
                                    <h5>Visit Us</h5>
                                </div>
                                <div className="single-conpany-info-box ">
                                    <div className="single-info-box d-flex">
                                        <div className="info-icon">
                                            <i className="flaticon-maps-and-flags"></i>
                                        </div>
                                        <div className="info-content">
                                            <h4>ICO Crypto Ltd</h4>
                                            <p> Dolfin RD, 23/A New Market,   <br />South Zone Sandigo, USA.</p>
                                        </div>
                                    </div>
                                    <div className="single-info-box d-flex">
                                        <div className="info-icon two">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="info-content">
                                            <h4>Telephone Number</h4>
                                            <p>+99 (123) 326 4029,  <br />+880 636 524 265,</p>
                                        </div>
                                    </div>
                                    <div className="single-info-box d-flex">
                                        <div className="info-icon three">
                                            <i className="flaticon-email-1"></i>
                                        </div>
                                        <div className="info-content">
                                            <h4>E-Mail Us</h4>
                                            <p>example@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="info-socail-address pt-20">
                                        <div className="info-content-inner">
                                            <h4>Follow Us</h4>
                                        </div>
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li ><a className="othrer1" href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a className="othrer2" href="#;"><i className="fab fa-twitter"></i></a></li>
                                            <li><a className="othrer3" href="#;"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="map-content">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004082.928417291!2d-104.65713107818928!3d37.275578278180674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1637410441606!5m2!1sen!2sbd" width="100%" height="360" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index;