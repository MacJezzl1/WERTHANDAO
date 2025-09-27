import Breatcome from '@/component/Breatcome/Breatcome';
import React from 'react'

const index = () => {
    return (
        <>
            <Breatcome pageName='Blog Grid' />
            <div className="blog-grid-section pt-70 pb-80">
                <div className="container">
                    <div className="row pt-50">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-grid-box">
                                <div className="blog-grid-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog4.jpg" alt="" /></a>
                                </div>
                                <div className="blog-grid-content">
                                    <div className="blog-grid-meta">
                                        <a href="#;">21 Nov 2021</a>
                                        <span>By Admin</span>
                                    </div>
                                    <div className="blog-grid-title">
                                        <a href="blog-details.html"><h2>Has your coach every played</h2></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-grid-box">
                                <div className="blog-grid-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog1.jpg" alt="" /></a>
                                </div>
                                 <div className="blog-grid-content">
                                    <div className="blog-grid-meta">
                                        <a href="#;">21 Nov 2021</a>
                                        <span>By Admin</span>
                                    </div>
                                    <div className="blog-grid-title">
                                        <a href="blog-details.html"><h2>now that I have selfest you really</h2></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-grid-box">
                                <div className="blog-grid-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog3.jpg" alt="" /></a>
                                </div>
                                <div className="blog-grid-content">
                                    <div className="blog-grid-meta">
                                        <a href="#;">21 Nov 2021</a>
                                        <span>By Admin</span>
                                    </div>
                                    <div className="blog-grid-title">
                                        <a href="blog-details.html"><h2>now that I have selfest you really</h2></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-grid-box">
                                <div className="blog-grid-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog2.jpg" alt="" /></a>
                                </div>
                                <div className="blog-grid-content">
                                    <div className="blog-grid-meta">
                                        <a href="#;">21 Nov 2021</a>
                                        <span>By Admin</span>
                                    </div>
                                    <div className="blog-grid-title">
                                        <a href="blog-details.html"><h2>Has your coach every played</h2></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-grid-box">
                                <div className="blog-grid-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog4.jpg" alt="" /></a>
                                </div>
                                <div className="blog-grid-content">
                                    <div className="blog-grid-meta">
                                        <a href="#;">21 Nov 2021</a>
                                        <span>By Admin</span>
                                    </div>
                                    <div className="blog-grid-title">
                                        <a href="blog-details.html"><h2>now that I have selfest you really</h2></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-grid-box">
                                <div className="blog-grid-thumb">
                                    <a href="#;"><img src="assets/images/blog/blog1.jpg" alt="" /></a>
                                </div>
                                <div className="blog-grid-content">
                                    <div className="blog-grid-meta">
                                        <a href="#;">21 Nov 2021</a>
                                        <span>By Admin</span>
                                    </div>
                                    <div className="blog-grid-title">
                                        <a href="blog-details.html"><h2>now that I have selfest you really</h2></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-20">
                        <div className="col-lg-12">
                            <div className="pagination text-center">
                                <div className="page-number text-center pt-20">
                                    <ul>
                                        <li><a className="active" href="#;">1</a></li>
                                        <li><a href="#;">2</a></li>
                                        <li><a href="#;">3</a></li>
                                    </ul>
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