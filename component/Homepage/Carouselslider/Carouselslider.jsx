import React, { useEffect, useState } from 'react'

const Carouselslider = () => {
    const [countdown, setCountdown] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    });

    useEffect(() => {
        const countDownDate = new Date("November 30, 2025 15:37:25").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            })

            if (distance < 0) {
                clearInterval(interval);
                setCountdown("EXPIRED")
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Start Carousel Slider Section */}
            <div className="slider-area style-five d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="slider-content">
                                <h4 className="wow fadeInUp" data-wow-delay=".2s"> <span className="other">$</span>Secure & Safe Crypto Currency</h4>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">ASSET-BACKED NON-DEBT <span> INTELLIGENT </span> CONTRACTS</h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Buy and Sales 100+ Cryptocurrencies with 20+ flat currencies market
                                    using bank transfers or your credit/debit card in your exchange type
                                    bitcoin establshed token area. </p>
                                <div className="slider-button wow fadeInUp" data-wow-delay=".8s">
                                    <a href="#;"> <i className="flaticon-play-arrow"> </i>How it Works</a>

                                </div>
                                <div className="slider-btn wow fadeInUp" data-wow-delay=".9s">
                                    <a href="#;"> <i className="flaticon-file"> </i> White Papers</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="slider-thumb">
                                <img src="assets/images/banner/one.png" alt="" />
                                <div className="hero-shape rotatemeTwo">
                                    <img src="assets/images/banner/five.png" alt="" />
                                </div>
                                <div className="hero-shape3 rotateme">
                                    <img src="assets/images/banner/two.png" alt="" />
                                </div>
                                <div className="hero-shape4">
                                    <img src="assets/images/new/two.png" alt="" />
                                </div>
                                <div className="hero-shape5">
                                    <img src="assets/images/new/three.png" alt="" />
                                </div>
                                <div className="hero-shape7 bounce-animate2">
                                    <img src="assets/images/new/four.png" alt="" />
                                </div>
                                <div className="hero-shape8">
                                    <img src="assets/images/new/nine.png" alt="" />
                                </div>
                                <div className="countdown-area">
                                    <div className="coundown-content">
                                        <div className="coundown-title-two">
                                            <h4>{countdown === "EXPIRED" ? "EXPIRED" : "token sale start now in"}</h4>
                                        </div>
                                        <div id="countdown-two">
                                            <ul>
                                                <li><span id="days">{countdown.days}</span> <p>Days</p></li>
                                                <li className="frist"><span id="hours">{countdown.hours}</span> <p>Hours</p></li>
                                                <li className="secound"><span id="minutes">{countdown.minutes}</span> <p>Mins</p></li>
                                                <li className="third"><span id="seconds">{countdown.seconds}</span> <p>Sec</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-one bounce-animate3">
                        <img src="assets/images/banner/four.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carouselslider