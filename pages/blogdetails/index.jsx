import Breatcome from '@/component/Breatcome/Breatcome';
import React, { useEffect } from 'react'

const index = () => {
    useEffect(() => {
        $('.resent_list').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
            dots: true,
            dotsEach: true,
            nav: false,
            navText: [" <i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1199: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    })
    return (
        <>
            <Breatcome pageName='blog Details' />
            <div className="blog-details-section pt-90 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="single-blog-details-box">
                                <div className="details-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog1.jpg" alt="" /></a>
                                </div>
                                <div className="blog-details-content">
                                    <div className="blog-details-meta">
                                        <a href="#;"><i className="far fa-calendar-alt"></i> <span>December 4, 2021</span></a>
                                        <span><i className="fas fa-user"></i> <a href="#;">Admin</a></span>
                                    </div>
                                    <div className="blog-details-content-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  ut labore et  Ut enim ad minim veniam, quis nostrud exercitation laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia of the deserunt help your brand. From.</p>
                                    </div>
                                    <div className="blog-details-title">
                                        <a href="#;"><h2>Business contents insurance is a type of business insurance</h2></a>
                                    </div>
                                    <div className="blog-details-content-text-inner">
                                        <p>Content is an essential aspect of any digital marketing campaign. The Marketing of ourInstitute offers some of the best advice around in terms of how content can help your brand. From industry trends to best practices, their posts offer helpful advice on how to create the best strategies for your business and how your content marketing what can i do for you everyday should role.</p>
                                    </div>
                                    <div className="blog-details-title two">
                                        <h2>The rutrum ullamcorper mattis</h2>
                                    </div>
                                    <div className="blog-details-content-text-inner">
                                        <p>Content is an essential aspect of any digital marketing campaign. The Marketing of ourInstitute offers some of the best advice around in terms of how content can help your brand. From industry trends to best practices, their posts offer helpful advice on how to create the best strategies for your business and how your content marketing what can i do for you everyday should role. </p>
                                    </div>
                                    <div className="row upper10 pt-10">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-thumb">
                                                <img src="assets/images/blog/blog3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-thumb">
                                                <img src="assets/images/blog/blog2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-box pt-20">
                                        <div className="blog-details-title two">
                                            <h2>A cleansing hot shower or bath</h2>
                                        </div>
                                        <div className="blog-details-content-text-inner">
                                            <p>Content is an essential aspect of any digital marketing campaign. The Marketing of ourInstitute offers some of the best advice around in terms of how content can help your brand. From industry trends to best practices, their posts offer helpful advice on how to create the best strategies for your business and how your content marketing what can i do for you everyday should role. </p>
                                        </div>
                                    </div>
                                    <div className="blog-details-social-address pt-40">
                                        <ul>
                                            <li><a href="#;"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#;"><i className="fab fa-reddit-alien"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            {/* contact_form */}
                            <div className="contact_from pt-70 topper10">
                                <form action="JavaScript:void(0)" method="POST" id="dreamit-form">
                                    <div className="contact_title">
                                        <h1>Leave Comment</h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_box mb-3">
                                                <input className="form-control" type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-3">
                                                <input className="form-control" type="text" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <input type="checkbox" value="yes" />
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-1">
                                                <input className="form-control" type="text" name="phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-1">
                                                <input className="form-control" type="text" name="web" placeholder="Your Website" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box pt-2">
                                                <textarea className="form-control" name="message" id="message" cols="10" rows="5" placeholder="Your Comment "></textarea>
                                            </div>
                                        </div>
                                        <div className="quote_btn text_center pt-3">
                                            <button className="btn" type="submit">Post Comment <i className="fas fa-angle-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                        {/*  start blog details right side */}
                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar-search-box">
                                <div className="sidebar-search">
                                    <input className="form-control" type="text" name="search" placeholder="Search...." />
                                    <button className="btn2" type="submit"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                            <div className="sidebar-box">
                                <div className="sidebar-content">
                                    <div className="sidebar-title">
                                        <h2>About Us</h2>
                                    </div>
                                    <div className="sidebar-content-text">
                                        <p>There are many variations of  our most passages of Lorem Ipsum togather available,we support but the majority have suffered alteration in some form, by injected humour.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box">
                                <div className="sidebar-title">
                                    <h2>Categories</h2>
                                </div>
                                <div className="sidebar-category">
                                    <ul>
                                        <li><a href="#;">Graphic Design</a></li>
                                        <li><a href="#;">Blockchain</a></li>
                                        <li><a href="#;">Information Technology</a></li>
                                        <li><a href="#;">Tokens</a></li>
                                        <li><a href="#;">Cryptocurency</a></li>
                                        <li><a href="#;">Competitive Research</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-box">
                                <div className="row">
                                    <div className="resent-post-iteam">
                                        <div className="col-lg-12">
                                            <div className="sidebar-title">
                                                <h2>Recent Post</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="resent_list owl-carousel">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="resent-post-single-box">
                                                <div className="sidebar-thumb">
                                                    <img src="assets/images/blog/blog1.jpg" alt="" />
                                                </div>
                                                <div className="sideber-thumb-content">
                                                    <div className="sidebar-thumb-title">
                                                        <a href="#;"><h2>3 Ways to Transform Your Blog Into</h2></a>
                                                        <span>13 Dec 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="resent-post-single-box ">
                                                <div className="sidebar-thumb">
                                                    <img src="assets/images/blog/blog2.jpg" alt="" />
                                                </div>
                                                <div className="sideber-thumb-content">
                                                    <div className="sidebar-thumb-title">
                                                        <a href="#;"><h2>How Important Is of ours To Business.</h2></a>
                                                        <span>23 Dec 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="resent-post-single-box">
                                                <div className="sidebar-thumb">
                                                    <img src="assets/images/blog/blog1.jpg" alt="" />
                                                </div>
                                                <div className="sideber-thumb-content">
                                                    <div className="sidebar-thumb-title">
                                                        <a href="#;"><h2>Your Small Business Web Design</h2></a>
                                                        <span>26 Nov 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default index;