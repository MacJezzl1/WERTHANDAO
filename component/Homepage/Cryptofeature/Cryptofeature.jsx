import React, { useState, useEffect } from 'react'
import BigNumber from "bignumber.js";
import CurrencyFormat from 'react-currency-format';
import * as WEB3API from '../../../utils/web3api';

const Cryptofeature = () => {

    const [rewardNBonusBalance, setRewardNBonusBalance] = useState(0)
    const [airdropBalance, setAirdropBalance] = useState(0)
    const [liquidityBalance, setLiquidityBalance] = useState(0)
    const [privateNPublicOfferingBalance, setPrivateNPublicOfferingBalance] = useState(0)
    const [equityHoldingBalance, setEquityHoldingBalance] = useState(0)
    const [werthanMoniBalance, setWerthanMoniBalance] = useState(0)
    const [hotFundBalance, setHotFundBalance] = useState(0)
    const [artFoundationBalance, setArtFoundationBalance] = useState(0)
    const [generalOperatingFundBalance, setGeneralOperatingFundBalance] = useState(0)
    const [grantNGiftBalance, setGrantNGiftBalance] = useState(0)
    const [inOutFloBalance, setInOutFloBalance] = useState(0)

    useEffect(() => {
        getRewardNBonusBalance()
        getAirdropBalance()
        getLiquidityBalance()
        getAirdropBalance()
        getPrivateNPublicOfferingBalance()
        getEquityHoldingBalance()
        getWerthanMoniBalance()
        getHotFundBalance()
        getArtFoundationBalance()
        getGeneralOperatingFundBalance()
        getGrantNGiftBalance()
        getInOutFloBalance()
        
    }, []);

    const getRewardNBonusBalance = async () => {
        let balance = await WEB3API.getRewardNBonusBalance()
        setRewardNBonusBalance(balance)
    }

    const getAirdropBalance = async () => {
        let balance = await WEB3API.getAirdropBalance()
        setAirdropBalance(balance)   
    }

    const getLiquidityBalance = async () => {
        let balance = await WEB3API.getLiquidityBalance()
        setLiquidityBalance(balance)
    }

    const getPrivateNPublicOfferingBalance = async () => {
        let balance = await WEB3API.getPrivateNPublicOfferingBalance()
        setPrivateNPublicOfferingBalance(balance)
    }

    const getEquityHoldingBalance = async () => {
        let balance = await WEB3API.getEquityHoldingBalance()
        setEquityHoldingBalance(balance)
    }

    const getWerthanMoniBalance = async () => {
        let balance = await WEB3API.getWerthanMoniBalance()
        setWerthanMoniBalance(balance)
    }

    const getHotFundBalance = async () => {
        let balance = await WEB3API.getHotFundBalance()
        setHotFundBalance(balance)
    }

    const getArtFoundationBalance = async () => {
        let balance = await WEB3API.getArtFoundationBalance()
        setArtFoundationBalance(balance)
    }

    const getGeneralOperatingFundBalance = async () => {
        let balance = await WEB3API.getGeneralOperatingFundBalance()
        setGeneralOperatingFundBalance(balance)
    }

    const getGrantNGiftBalance = async () => {
        let balance = await WEB3API.getGrantNGiftBalance()
        setGrantNGiftBalance(balance)
    }

    const getInOutFloBalance = async () => {
        let balance = await WEB3API.getInOutFloBalance()
        setInOutFloBalance(balance)
    }

    return (
        <>
            {/* feature section  */}
            <div className="feature-section pt-80">
                <div className="container">
                    <div className="row mb-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>REWARDS & BONUSES</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(rewardNBonusBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>BTC</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>AIRDROP</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(airdropBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>ETH</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back2.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit3.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>LIQUDITY</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(liquidityBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>THR</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back3.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>PRIVATE & PUBLIC OFFERING</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(privateNPublicOfferingBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>BTC</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>Equity Holdings</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(equityHoldingBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>ETH</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back2.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>WERTHAN MONI</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(equityHoldingBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>ETH</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back2.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>HOT FUND</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(equityHoldingBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>ETH</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back2.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit3.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>GENERAL OPERATING FUND</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(generalOperatingFundBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>THR</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back3.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>GRANTS & GIFTS</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(grantNGiftBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>BTC</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>IN-FLO & OUT-FLO</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(inOutFloBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>ETH</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back2.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>Art Foundation & Museum</span>
                                    <h3>WERTHAN <CurrencyFormat value={BigNumber(inOutFloBalance).toFixed(4).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
                                    {/*<p>ETH</p>*/}
                                </div>
                                <div className="shape">
                                    {/*<img src="assets/images/new/back2.png" alt="" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cryptofeature;