import React from 'react'

const Contactinfo = () => {
    return (
        <>
            <div className="contact-section style-four pt-110 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dreamit-section-title two text-center pb-20">
                                <div className="dreamit-section-sub-title">
                                    <h5> <img src="assets/images/new/title-img.png" alt="" />  Contacts</h5>
                                </div>
                                <div className="dreamit-section-main-title">
                                    <h1>Stay Update With Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-20">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-icon-box d-flex align-items-center">
                                <div className="contact-icon">
                                    <i className="flaticon-message"></i>
                                </div>
                                <div className="contact-content-text">
                                    <p>example@ gmail.Com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-icon-box d-flex align-items-center">
                                <div className="contact-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="contact-content-text">
                                    <p>+ 00 234 (9606)170</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-icon-box d-flex align-items-center">
                                <div className="contact-icon">
                                    <i className="flaticon-paper-plane"></i>
                                </div>
                                <div className="contact-content-text">
                                    <p>Join Us on Telegram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row upper12 align-items-center pt-60">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 col-md-12 p-0">
                            <div className="contact_from upper10">
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
                                            <div className="form_box">
                                                <textarea className="form-control" name="message" id="message" cols="10" rows="5" placeholder=" message"></textarea>
                                            </div>
                                        </div>
                                        <div className="quote_btn text_center mt-15">
                                            <button className="btn" type="submit"> SUBMIT MESSAGE </button>
                                        </div>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactinfo