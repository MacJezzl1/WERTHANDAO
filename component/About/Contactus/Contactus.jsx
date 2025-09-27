import React from 'react'

const Contactus = () => {
    return (
        <>
            <div className="contact-section style-three pt-100">
                <div className="container">
                    <div className="row upper12 align-items-center">
                        <div className="col-lg-7 col-md-7 p-0">
                            <div className="contact_from upper10">
                                <div className="dreamit-section-title pb-20">
                                    <div className="dreamit-section-sub-title">
                                        <h5>Contact us</h5>
                                    </div>
                                </div>
                                <form id="contact_form" action="#" >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_box mb-2">
                                                <input className="form-control" type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-2">
                                                <input className="form-control" type="email" name="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box mb-1">
                                                <input className="form-control" type="email" name="phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box mb-1">
                                                <input className="form-control" type="email" name="Web" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box pt-1">
                                                <textarea className="form-control" name="message" id="message" cols="10" rows="5" placeholder=" message"></textarea>
                                            </div>
                                        </div>
                                        <div className="quote_btn text_center mt-15">
                                            <button className="btn" type="submit"> Send Now </button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-message"></p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-0">
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
                                            <p>example@gmail.com  <br />example@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="info-socail-address pt-40">
                                        <div className="info-content-inner">
                                            <h4>Be Part of our Community</h4>
                                        </div>
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Contactus