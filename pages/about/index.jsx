import React from 'react'
import Breatcome from '@/component/Breatcome/Breatcome';
import Cryptograph from '@/component/Homepage/Cryptograph/Cryptograph';
import Ourteam from '@/component/Ourteam/Ourteam';
import Contactus from '@/component/About/Contactus/Contactus';
import Token from '@/component/Token/Token';

const About = () => {

  const aboutContent = [
    {
      img: 'assets/images/about/one.png',
      heading: 'Wallet',
      details: 'Monotonectally productivate that is friendly opportunitie after when us e-markets. Proactively has been do benefits visa.pro.'
    },
    {
      img: 'assets/images/about/two.png',
      heading: 'Exchange',
      details: 'Monotonectally productivate that is friendly opportunitie after when us e-markets. Proactively has been do benefits visa.pro.'
    }
  ]
  return (
    <>
      <Breatcome pageName='About Us' />
      <div className="about-section pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-box">
                <div className="about-thumb">
                  <img src="assets/images/about/phone.png" alt="" />
                  <div className="shape1 bounce-animate4">
                    <img src="assets/images/about/coin.png" alt="" />
                  </div>
                  <div className="shape2 bounce-animate3">
                    <img src="assets/images/about/green-box.png" alt="" />
                  </div>
                  <div className="shape3 bounce-animate2">
                    <img src="assets/images/about/three.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-right-side">
                <div className="dreamit-section-title  pb-20">
                  <div className="dreamit-section-sub-title">
                    <h5>EXCHANGE YOUR ICO</h5>
                  </div>
                  <div className="dreamit-section-main-title">
                    <h1>What is Cryptozen?</h1>
                  </div>
                  <div className="dreamit-section-content-text">
                    <p>Monotonectally productivate virtual benefits vis-a-vis clicks-and-mortar lead
                      ship. Seamlessly generate user friendly opportunitie after principle centered
                      e-markets. Proactively visualize functional</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {
                  aboutContent.map((item, i) => {
                    return (
                      <div key={i} className="col-lg-6 col-md-6">
                        <div className="about-single-icon-box">
                          <div className="about-icon-thumb">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="about-content">
                            <h2>{item.heading}</h2>
                            <p>{item.details}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="about-btn mt-20">
                <a href="#;">JOIN US ON TELEGRAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dreamit-section-title  pb-20">
                <div className="dreamit-section-sub-title">
                  <h5>REASON FOR CHOOSE US</h5>
                </div>
                <div className="dreamit-section-main-title">
                  <h1>Why Choose Our Token?</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-25">
            <div className="col-lg-3 col-md-6">
              <div className="choose-single-box">
                <div className="choose-thumb">
                  <img src="assets/images/choose/one.png" alt="" />
                </div>
                <div className="choose-content">
                  <h2>Mobile payment
                    make easy</h2>
                  <p>You can use mobile device
                    to pay with simple steps in
                    value. compellingly</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="choose-single-box two">
                <div className="choose-thumb">
                  <img src="assets/images/choose/two.png" alt="" />
                </div>
                <div className="choose-content">
                  <h2>Sercurity & control
                    over money</h2>
                  <p>You can use mobile device
                    to pay with simple steps in
                    value. compellingly</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="choose-single-box three">
                <div className="choose-thumb">
                  <img src="assets/images/choose/three.png" alt="" />
                </div>
                <div className="choose-content">
                  <h2>Protect your
                    Privacy</h2>
                  <p>You can use mobile device
                    to pay with simple steps in
                    value. compellingly</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="choose-single-box four">
                <div className="choose-thumb">
                  <img src="assets/images/choose/four.png" alt="" />
                </div>
                <div className="choose-content">
                  <h2>Lifetime free
                    transaction</h2>
                  <p>You can use mobile device
                    to pay with simple steps in
                    value. compellingly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cryptograph />
      <Token />
      <Ourteam />
      <Contactus />
    </>
  )
}

export default About;