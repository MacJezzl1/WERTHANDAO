import React, { useState, useEffect, useRef } from 'react'
import Breatcome from '@/component/Breatcome/Breatcome';
import { useWeb3React } from '@web3-react/core';
import moment from 'moment';
import BigNumber from "bignumber.js";
import CurrencyFormat from 'react-currency-format';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import Chart from 'chart.js/auto';

import { injected, walletconnect, walletlink } from '../../utils/connectors';
import { useEagerConnect, useInactiveListener } from '../../utils/hooks';
import { getWalletErrorMessage } from '../../utils/helpers';
import * as WEB3API from '../../utils/web3api';
import * as API from '../../utils/api';

import Escrowaccount from '@/component/Homepage/Escrowaccount/Escrowaccount'

import ReactModal from "react-modal";
ReactModal.setAppElement("#__next");

const Editor = dynamic( () => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false } )
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const index = () => {
    const { account, library, activate, deactivate, connector, error } = useWeb3React();
    const [hodlTotalSupply, setHODLTotalSupply] = useState(100000000);

    const [hodlBalance, setHODLBalance] = useState(0)
    const [ftoBalance, setFTOBalance] = useState(0)
    const [voteCount, setVoteCount] = useState(0);
    const [ableToProposal, setAbleToProposal] = useState(false)
    const [ableToVote, setAbleToVote] = useState(false)

    const [loading, setLoading] = useState(false);

    const [tab, setTab] = useState('live')

    const [liveProposals, setLiveProposals] = useState([]);
    const [pendingProposals, setPendingProposals] = useState([]);
    const [pastProposals, setPastProposals] = useState([]);
    const [proposal, setProposal] = useState(null);

    const [totalProposals, setTotalProposals] = useState(0);

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [proposalDescription, setProposalDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [visibleCreateProposalModal, setVisibleCreateProposalModal] = useState(false)
    const [visibleProposalModal, setVisibleProposalModal] = useState(false)

    const voteChartRef = useRef(null);
    let voteChartInstance = null;

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        loadProposals()
    }, []);

    useEffect(() => {
        if (account) {
            getHODLBalance();
            getVoteCount();
            getAbleToProposal();
            getAbleToVote();
        }
    }, [account])

    useEffect(() => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());

        const markup = draftToHtml(
            rawContentState
        );
        setProposalDescription(markup);
    }, [editorState]);

    const notifyError = (message) => toast(message, { hideProgressBar: true, autoClose: 3000, type: 'error', position:'top-right' })
    const notifySuccess = (message) => toast(message, { hideProgressBar: true, autoClose: 3000, type: 'success', position:'top-right' })

    const getHODLBalance = async () => {
        try {
            let balance = await WEB3API.getHODLBalance(account, library)
            if (balance && balance.length > 0) {
                setHODLBalance(parseInt(balance));
            }
        } catch(err) {
            notifyError(err.message)
        }
    }

    const getFTOBalance = async () => {
        try {
            let balance = await WEB3API.getHODLBalance(account, library)
            if (balance && balance.length > 0) {
                setHODLBalance(parseInt(balance));
            }
        } catch(err) {
            notifyError(err.message)
        }
    }

    const getVoteCount = async () => {
        try {
            let count = await WEB3API.getVoteCount(account, library)
            if (count && count.length > 0) {
                setVoteCount(count);
            }
        } catch(err) {
            notifyError(err.message)
        }
    }

    const getAbleToProposal = async () => {
        try {
            let ability = await WEB3API.getAbleToProposal(account, library)
            if (ability) {
                setAbleToProposal(true);
            }
            else {
                setAbleToProposal(false);
            }
        } catch(err) {
            notifyError(err.message)
        }
    }

    const getAbleToVote = async () => {
        try {
            let ability = await WEB3API.getAbleToVote(account, library)
            if (ability) {
                setAbleToVote(true);
            }
            else {
                setAbleToVote(false);
            }
        } catch(err) {
            notifyError(err.message)
        }
    }

    const loadProposals = () => {
        loadLiveProposals();
        loadPendingProposals();
        loadPastProposals();
    }

    const loadLiveProposals = async () => {
        try {
            setLoading(true);
            let response = await API.getLiveProposals();
            if (response.data.result == 'success') {
                setLiveProposals(response.data.data.docs);
            }
            setLoading(false);            
        } catch(err) {
            setLoading(false);
            notifyError(err.message)
        }
    }

    const loadPendingProposals = async () => {
        try {
            setLoading(true);
            let response = await API.getPendingProposals();
            if (response.data.result == 'success') {
                setPendingProposals(response.data.data.docs);
            }
            setLoading(false);            
        } catch(err) {
            setLoading(false);
            notifyError(err.message)
        }
    }

    const loadPastProposals = async () => {
        try {
            setLoading(true);
            let response = await API.getPastProposals();
            if (response.data.result == 'success') {
                setPastProposals(response.data.data.docs);
                setTotalProposals(response.data.data.totalDocs);
            }
            setLoading(false);            
        } catch(err) {
            setLoading(false);
            notifyError(err.message)
        }
    }

    const openCreateProposalModal = () => {
        setVisibleCreateProposalModal(true)
    }

    const closeCreateProposalModal = () => {
        setVisibleCreateProposalModal(false)
    }

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true)
            if (data.file && data.file.length > 0) {
                let fileresult = await API.attachFileProposal(data)

                data.attachment = fileresult.data.data.path
            }

            data.proposer = account
            data.description = proposalDescription
            
            let response = await API.createProposal(data)
            let proposal = response.data.proposal;

            let result = await WEB3API.createProposal({
                account,
                id: proposal._id, 
                start: proposal.start_at, 
                end: proposal.end_at,
                receiver: proposal.receiver,
                amount: proposal.amount
            }, library);

            let returnValues = result.events.CreatedProposal.returnValues;
            if (returnValues) {
                let synced = await API.syncProposal(returnValues)
                console.log('synced', synced)
            }
            closeCreateProposalModal()
            loadProposals()
            setIsSubmitting(false)
        } catch(err) {
            console.log(err)
            notifyError(err.message)
            setIsSubmitting(false)
        }
    }

    const showProposal = (data) => {
        setProposal(data)
        setVisibleProposalModal(true)
        setTimeout(() => {
            showVoteChart(data)
        }, 1000)
    }

    const showVoteChart = async (data) => {
        (async function (data) {
            // Style Two
            var xValues = ["Approved", "Denied", "Pending"];
            var yValues = [data.votes_yes, data.votes_no, 13];
            var barColors = [
                "#4DB866",
                "#EDB019",
                "#CCCCCC"
            ];

            if (voteChartInstance) {
                voteChartInstance.destroy();
            }
            voteChartInstance = new Chart(voteChartRef.current, {
                type: "doughnut",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: data.title
                    },
                }
            });
        })(data);
    }

    const closeProposalModal = () => {
        setVisibleProposalModal(false)
    }

    const approve = async (proposal) => {

    }
    
    const deny = async (proposal) => {
        
    }

    return (
        <>
            <Breatcome pageName='Vote' />
            <Escrowaccount />
            {
                account ? (
                    <div className="contact-section style-two pt-100 pb-100">
                        <div className="container">
                            <div className="row mb-4">
                                <div className="col-lg-12">
                                    <div className="dreamit-section-title two text-center pb-20">
                                        <div className="dreamit-section-main-title">
                                            <h1>Vote</h1>
                                        </div>
                                        <div className="dreamit-section-content-text">
                                            <p>Participate in the WERTHAN Economy to support the growth of the fungible token and input of assets.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="right-side-info">
                                        <div className="dreamit-section-sub-title">
                                            <h5>Proposals</h5>
                                        </div>
                                        <div className="single-conpany-info-box ">
                                            <div className="row pt-25">
                                                <div className="col-lg-12">
                                                    <div className="tab-content text-center">
                                                        <ul className="tabs">
                                                            <li className={`${tab === "live" ? "active" : ''}`} rel="tab1" onClick={() => setTab("live")} >Live </li>
                                                            <li className={`${tab === "pending" ? "active" : ''}`} rel="tab2" onClick={() => setTab("pending")}>Pending </li>
                                                            <li className={`${tab === "past" ? "active" : ''}`} rel="tab3" onClick={() => setTab("past")}>Past</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab_container">
                                                {/* #tab1  */}
                                                <div id="tab1" style={{ display: tab === `live` ? `block` : 'none' }} className="tab_content">
                                                    <ul className="proposal-list">
                                                        {
                                                            liveProposals && liveProposals.length > 0 ? (
                                                                <>                            
                                                                    {liveProposals.map((proposal, i) => (
                                                                        <li key={`proposal-${proposal._id}`}>
                                                                            <a>{proposal.title}</a>
                                                                            <div className="proposal-desc" dangerouslySetInnerHTML={{__html: proposal.description}}></div>
                                                                        </li>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <li>
                                                                    <h6 className="py-3">No proposal</h6>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                {/* #tab2  */}
                                                <div id="tab2" style={{ display: tab === `pending` ? `block` : 'none' }} className="tab_content">
                                                    <ul className="proposal-list">
                                                        {
                                                            pendingProposals && pendingProposals.length > 0 ? (
                                                                <>                            
                                                                    {pendingProposals.map((proposal, i) => (
                                                                        <li key={`proposal-${proposal._id}`}>
                                                                            <a>{proposal.title}</a>
                                                                            <div className="proposal-desc" dangerouslySetInnerHTML={{__html: proposal.description}}></div>
                                                                        </li>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <li>
                                                                    <h6 className="py-3">No proposal</h6>
                                                                </li>
                                                            )    
                                                        }
                                                    </ul>
                                                </div>
                                                {/* #tab3  */}
                                                <div id="tab3" style={{ display: tab === `past` ? `block` : 'none' }} className="tab_content">
                                                    <ul className="proposal-list">
                                                        {
                                                            pastProposals && pastProposals.length > 0 ? (
                                                                <>                            
                                                                    {pastProposals.map((proposal, i) => (
                                                                        <li className="proposal-item" key={`proposal-${proposal._id}`} onClick={() => showProposal(proposal)}>
                                                                            <h5 className="proposal-title">{proposal.title}</h5>
                                                                            <div className="proposal-desc" dangerouslySetInnerHTML={{__html: proposal.description}}></div>
                                                                        </li>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <li>
                                                                    <h6 className="py-3">No proposal</h6>
                                                                </li>
                                                            )    
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* .tab_container  */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="contact_from upper10">
                                        <div className="single-info-box d-flex">
                                            <div className="info-content">
                                                <h4>WERTHAN Token Owned</h4>
                                                <p><CurrencyFormat value={BigNumber(hodlBalance).toFixed(2).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /> WERTHAN </p>
                                            </div>
                                        </div>
                                        <div className="single-info-box d-flex">
                                            <div className="info-content">
                                                <h4>Amount of Votes</h4>
                                                <p><CurrencyFormat value={BigNumber(voteCount).toFixed(0).toString()} displayType={'text'} thousandSeparator={true} prefix={''} /> Votes</p>
                                            </div>
                                        </div>
                                        <div className="single-info-box d-flex">
                                            <div className="info-content">
                                                <h4>Able to create proposal</h4>
                                                <p>{ ableToProposal ? 'Yes' : 'No' }</p>
                                            </div>
                                        </div>
                                        <div className="single-info-box d-flex">
                                            <div className="info-content">
                                                <h4>Able to vote</h4>
                                                <p>{ ableToVote ? 'Yes' : 'No' }</p>
                                            </div>
                                        </div>
                                        {
                                            ableToProposal && (
                                                <div className="text-center mt-4">
                                                    <button className="btn btn-primary" type="button" onClick={openCreateProposalModal}>New Proposal</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="why-choose-section pt-90 pb-80">
                        <div className="dreamit-section-title-two text-center pb-20">
                            <div className="dreamit-section-main-title">
                                <h3>Connect your wallet</h3>
                            </div>
                        </div>
                    </div>
                )
            }
            <ReactModal
                isOpen={visibleProposalModal}
                onRequestClose={closeProposalModal}
                contentLabel="Proposal"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <>
                    <button className="close-modal" onClick={closeProposalModal}>
                        <img src="/assets/images/cancel.svg" alt="close icon" />
                    </button>
                    <div className="box_inner">
                        <div className="scrollable">
                        {
                            proposal && (
                                <>
                                    <div className="modal-title">
                                        <h5>{proposal.title}</h5>
                                    </div>
                                    <div className="proposal-time text-secondary">
                                        <span className="theme-bg">{moment.unix(proposal.start_at).format("MMM D, YYYY HH:mm")} - {moment.unix(proposal.end_at).format("MMM D, YYYY HH:mm")}</span>
                                    </div>
                                    <div className="text-secondary">
                                        <span>Amount: {proposal.amount}</span>
                                    </div>
                                    <div className="text-secondary">
                                        <span>Proposer: {proposal.proposer}</span>
                                    </div>
                                    <div className="text-secondary">
                                        <span>Receiver: {proposal.receiver}</span>
                                    </div>
                                    <div className="proposal-content my-4">
                                        <div className="proposal-desc" dangerouslySetInnerHTML={{__html: proposal.description}}></div>
                                        {
                                            proposal.attachment && (
                                                <div className="proposal-attachment mt-4">
                                                    <a href={proposal.attachment} target="_blank"><i className="fas fa-paperclip"></i> Download attachment</a>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="proposal-votes-chart row">
                                        <div className="col-sm-6">
                                            <canvas ref={voteChartRef} id="voteChart" width="500" height="500"></canvas>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="chart-menu">
                                                <ul>
                                                    <li className="another1"> <span>12%</span> Approved</li>
                                                    <li className="another2"> <span>8%</span> Denied</li>
                                                    <li className="another3"> <span>40%</span> Pending</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-success" onClick={approve}>Approve</button>
                                                <button className="btn btn-warning ml-4" onClick={deny}>Deny</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        </div>
                    </div>
                </>
            </ReactModal>
            <ReactModal
                isOpen={visibleCreateProposalModal}
                onRequestClose={closeCreateProposalModal}
                contentLabel="New Proposal"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <>
                    <button className="close-modal" onClick={closeCreateProposalModal}>
                        <img src="/assets/images/cancel.svg" alt="close icon" />
                    </button>
                    <div className="box_inner">
                        <div className="scrollable">
                            <div className="modal-title">
                                <h5>New Proposal</h5>
                            </div>
                            <div className="proposal_form mt-3">
                                <form action="#" method="POST" id="dreamit-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form_box mb-3">
                                                <label>Subject</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="title"
                                                    {...register('title', { required: true })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box mb-3">
                                                <label>Description</label>
                                                <div className="border">
                                                    <Editor
                                                        editorState={editorState}
                                                        onEditorStateChange={setEditorState}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form_box mb-3">
                                                <label>Attachment</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="receiver"
                                                    {...register('file')}
                                                />
                                            </div>
                                            <div className="form_box mb-3">
                                                <label>Recipient Address</label>
                                                <input
                                                    className="form-control"
                                                    name="receiver"
                                                    {...register('receiver', { required: true })}
                                                />
                                            </div>
                                            <div className="form_box mb-3">
                                                <label>Amount</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="amount"
                                                    {...register('amount', { required: true })}
                                                />
                                            </div>
                                            <div className="form_box mb-3">
                                                <label>Period</label>
                                                <select
                                                    className="form-control"
                                                    name="period"
                                                    defaultValue="10"
                                                    {...register('period', { required: true })}
                                                >
                                                    <option value="10">10 Minutes</option>
                                                    <option value="24">24 Hours</option>
                                                    <option value="48">48 Hours</option>
                                                    <option value="72">72 Hours</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 quote_btn text-center mt-4">
                                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}> Send Now </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            </ReactModal>
        </>
    )
}

export default index;