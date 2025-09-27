import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Token = () => {

    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {
        $('.token_list').owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 2500,
            autoplayTimeout: 4000,
            dots: false,
            dotsEach: false,
            nav: false,
            navText: ["<i class='flaticon-left-arrow-3''></i>", "<i class='flaticon-right-arrow-3''></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1000: {
                    items: 3
                },
                1365: {
                    items: 4
                },
                1500: {
                    items: 4
                },
                1920: {
                    items: 5
                }
            }
        });
    }, [])

    return (
        <>
            <div className={`token-section ${pathname === '/token' ? "style-three" : ""} pt-100 pb-100`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dreamit-section-title text-center pb-20">
                                <div className="dreamit-section-sub-title">
                                    <h5>SALES INFO</h5>
                                </div>
                                <div className="dreamit-section-main-title">
                                    <h1>ICO Token Sales</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-10">
                        <div className="token_list owl-carousel">
                            <div className="col-lg-12">
                                <div className="single-token-box">
                                    <div className="token-content">
                                        <h2>30% Bonus</h2>
                                        <span>$0.3004/token</span>
                                    </div>
                                    <div className="token-inner-content">
                                        <h4>Jul 08 - Jul 31</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-token-box">
                                    <div className="token-content two">
                                        <h2>20% Bonus</h2>
                                        <span>$0.6009/token</span>
                                    </div>
                                    <div className="token-inner-content">
                                        <h4>Jul 08 - Jul 31</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-token-box">
                                    <div className="token-content three">
                                        <h2>10% Bonus</h2>
                                        <span>$0.3002/token</span>
                                    </div>
                                    <div className="token-inner-content">
                                        <h4>Jul 08 - Jul 31</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-token-box">
                                    <div className="token-content four">
                                        <h2>9% Bonus</h2>
                                        <span>$0.5009/token</span>
                                    </div>
                                    <div className="token-inner-content">
                                        <h4>Jul 08 - Jul 31</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-token-box">
                                    <div className="token-content four">
                                        <h2>9% Bonus</h2>
                                        <span>$0.5009/token</span>
                                    </div>
                                    <div className="token-inner-content">
                                        <h4>Jul 08 - Jul 31</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shape5">
                            <img src="assets/images/border.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Token;