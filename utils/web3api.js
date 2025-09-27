import axios from 'axios';
import Web3 from 'web3';
import BigNumber from "bignumber.js";

import {
	ETHERSCAN_API_KEY,
	HODLDAO_ADDRESS,
	HODL_ADDRESS,
	FTO_ADDRESS,
	HODL_FOUNDERS_SPLITTER_ADDRESS,
	HODL_TEAM_SPLITTER_ADDRESS,
	HODL_EQUITY_PARTNERS_SPLITTER_ADDRESS,
	CTO_MINT_SPLITTER_ADDRESS,
	REWARD_AND_BONUS_WALLET_ADDRESS,
	AIRDROP_WALLET_ADDRESS,
	LIQUIDITY_WALLET_ADDRESS,
	PRIVATE_AND_PUBLIC_OFFERING_WALLET_ADDRESS,
	EQUITY_HOLDING_WALLET_ADDRESS,
	GENERAL_OPERATING_WALLET_ADDRESS,
	GRANT_AND_GIFT_WALLET_ADDRESS,
	IN_OUT_FLO_WALLET_ADDRESS,
	ART_FOUNDATION_WALLET_ADDRESS,
	WERTHAN_MONI_WALLET_ADDRESS,
	HOT_FUND_WALLET_ADDRESS,
} from './_constants';

import CONTRACT_ABI from '../abi/ABI.json';
import HODL_ABI from '../abi/HODL.json';
import FTO_ABI from '../abi/FTO.json';
import SPLITTER_ABI from '../abi/SPLITTER.json';

const ENV_RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
const DEFAULT_READ_RPC_URLS = [
	"https://polygon-bor-rpc.publicnode.com",
	"https://rpc.ankr.com/polygon",
	"https://polygon-rpc.com",
];
const READ_RPC_URLS = [
	...(ENV_RPC_URL ? [ENV_RPC_URL] : []),
	...DEFAULT_READ_RPC_URLS,
];

const getReadOnlyWeb3 = () => {
	for (const rpcUrl of READ_RPC_URLS) {
		try {
			const provider = new Web3.providers.HttpProvider(rpcUrl, { timeout: 10000 });
			return new Web3(provider);
		} catch (_e) {
			// Try next endpoint.
		}
	}
	// Fallback to default constructor path.
	return new Web3(READ_RPC_URLS[0]);
};

const initWeb3AndContract = (library = null) => {
	let web3 = null;
	if (!library) {
		// Use public RPC endpoints for read-only calls.
		web3 = getReadOnlyWeb3();
	} else {
		web3 = library;
	}
	const voteContract = new web3.eth.Contract(CONTRACT_ABI, HODLDAO_ADDRESS);
	const hodlContract = new web3.eth.Contract(HODL_ABI, HODL_ADDRESS);
	const ftoContract = new web3.eth.Contract(FTO_ABI, FTO_ADDRESS);
	const founderContract = new web3.eth.Contract(SPLITTER_ABI, HODL_FOUNDERS_SPLITTER_ADDRESS);
	const teamMemberContract = new web3.eth.Contract(SPLITTER_ABI, HODL_TEAM_SPLITTER_ADDRESS);
	const equityPartnerContract = new web3.eth.Contract(SPLITTER_ABI, HODL_EQUITY_PARTNERS_SPLITTER_ADDRESS);
	const ctoMintSplitterContract = new web3.eth.Contract(SPLITTER_ABI, CTO_MINT_SPLITTER_ADDRESS);
	return {web3, voteContract, hodlContract, founderContract, teamMemberContract, equityPartnerContract, ctoMintSplitterContract};
}

export const WeiToEth = (amount_in_wei, unit="gwei") => {
	const { web3 } = initWeb3AndContract();
	return web3.utils.fromWei(amount_in_wei, unit);
}

export const EthToWei = (amount_in_eth, unit="gwei") => {
	const { web3 } = initWeb3AndContract();
	return web3.utils.toWei(amount_in_eth, unit);
}

export const isAddress = (addr) => {
	const { web3 } = initWeb3AndContract();
	return web3.utils.isAddress(addr);
}

export const getEthPrice = async () => {
	try {
		const result = await axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey='+ETHERSCAN_API_KEY);
		return result.data.result.ethusd;
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}
export const getBalanceFromEtherscan = async (addr) => {	
	try {
		const result = await axios.get('https://api.etherscan.io/api?module=account&action=balance&address='+addr+'&tag=latest&apikey='+ETHERSCAN_API_KEY);
		return result;
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const owner = async (library=null) => {
	const { voteContract } = initWeb3AndContract(library);
	
	try {
		const owner = await voteContract.methods.owner().call();
		return owner;
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getFounderTotal = async (library = null) => {
	const { hodlContract } = initWeb3AndContract(library)
	try {
		const totalAmount = await hodlContract.methods.balanceOf(HODL_FOUNDERS_SPLITTER_ADDRESS).call();
		return WeiToEth(totalAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getFounderReleasable = async (account, library = null) => {
	const { founderContract } = initWeb3AndContract(library)
	try {
		const releasableAmount = await founderContract.methods.releasable(HODL_ADDRESS, account).call()
		return WeiToEth(releasableAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const releaseFounder = async (account, library = null) => {
	try {
		const { web3, founderContract } = initWeb3AndContract(library);
		
		let gasPrice = await web3.eth.getGasPrice()
		let gas = await founderContract.methods.release(HODL_ADDRESS, account).estimateGas({from: account});
		let result = await founderContract.methods.release(HODL_ADDRESS, account).send({from: account, gas, gasPrice})
	} catch (error) {
		createError(catchSmartContractErrorMessage(error));
	}
}

export const getTeamMemberTotal = async (library = null) => {
	const { hodlContract } = initWeb3AndContract(library)
	try {
		const totalAmount = await hodlContract.methods.balanceOf(HODL_TEAM_SPLITTER_ADDRESS).call();
		return WeiToEth(totalAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getTeamMemberReleasable = async (account, library = null) => {
	const { teamMemberContract } = initWeb3AndContract(library)
	try {
		const releasableAmount = await teamMemberContract.methods.releasable(HODL_ADDRESS, account).call()
		return WeiToEth(releasableAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const releaseTeamMember = async (account, library = null) => {
	try {
		const { web3, teamMemberContract } = initWeb3AndContract(library);
		
		let gasPrice = await web3.eth.getGasPrice()
		let gas = await teamMemberContract.methods.release(HODL_ADDRESS, account).estimateGas({from: account});
		let result = await teamMemberContract.methods.release(HODL_ADDRESS, account).send({from: account, gas, gasPrice})
	} catch (error) {
		createError(catchSmartContractErrorMessage(error));
	}
}

export const getEquityPartnerTotal = async (library = null) => {
	const { hodlContract } = initWeb3AndContract(library)
	try {
		const totalAmount = await hodlContract.methods.balanceOf(HODL_EQUITY_PARTNERS_SPLITTER_ADDRESS).call();
		return WeiToEth(totalAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getEquityPartnerReleasable = async (account, library = null) => {
	const { equityPartnerContract } = initWeb3AndContract(library)
	try {
		const releasableAmount = await equityPartnerContract.methods.releasable(HODL_ADDRESS, account).call()
		return WeiToEth(releasableAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const releaseEquityPartner = async (account, library = null) => {
	try {
		const { web3, equityPartnerContract } = initWeb3AndContract(library);
		
		let gasPrice = await web3.eth.getGasPrice()
		let gas = await equityPartnerContract.methods.release(HODL_ADDRESS, account).estimateGas({from: account});
		let result = await equityPartnerContract.methods.release(HODL_ADDRESS, account).send({from: account, gas, gasPrice})
	} catch (error) {
		createError(catchSmartContractErrorMessage(error));
	}
}

export const getRewardCTO = async (account, library = null) => {
	const { ctoMintSplitterContract } = initWeb3AndContract(library)
	try {
		const releasableAmount = await ctoMintSplitterContract.methods.releasable(HODL_ADDRESS, account).call()
		return WeiToEth(releasableAmount)
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const releaseRewardCTO = async (account, library = null) => {
	try {
		const { web3, ctoMintSplitterContract } = initWeb3AndContract(library);
		
		let gasPrice = await web3.eth.getGasPrice()
		let gas = await ctoMintSplitterContract.methods.release(HODL_ADDRESS, account).estimateGas({from: account});
		let result = await ctoMintSplitterContract.methods.release(HODL_ADDRESS, account).send({from: account, gas, gasPrice})
	} catch (error) {
		createError(catchSmartContractErrorMessage(error));
	}
}

export const getHODLBalance = async(account, library=null) => {
	const { hodlContract } = initWeb3AndContract(library);
	try {
		const balance = await hodlContract.methods.balanceOf(account).call();
		return WeiToEth(balance);
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getFTOBalance = async(account, library=null) => {
	const { hodlContract } = initWeb3AndContract(library);
	try {
		const balance = await hodlContract.methods.balanceOf(account).call();
		return WeiToEth(balance);
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getAbleToProposal = async(account, library=null) => {
	const { voteContract } = initWeb3AndContract(library);
	try {
		const abilityProposal = await voteContract.methods.checkAbleToProposal(account).call();
		return abilityProposal;
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getVoteCount = async (account, library=null) => {
	const { voteContract } = initWeb3AndContract(library);
	try {
		const voteCount = await voteContract.methods.getVoteCount(account).call();
		return voteCount;
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getAbleToVote = async (account, library=null) => {
	const { voteContract } = initWeb3AndContract(library);
	try {
		const abilityVote = await voteContract.methods.checkAbleToVote(account).call();
		return abilityVote;
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

export const createProposal = async (data, library=null) => {
	try {
		const { web3, voteContract } = initWeb3AndContract(library);
		let gasPrice = await web3.eth.getGasPrice();
		let gas = await voteContract.methods.createProposal(data.id, data.start, data.end, data.receiver, EthToWei(String(data.amount))).estimateGas({from: data.account});
		let result = await voteContract.methods.createProposal(data.id, data.start, data.end, data.receiver, data.amount).send({from: data.account, gas, gasPrice})
		return result
	} catch (e) {
		console.log(e);
		createError(catchSmartContractErrorMessage(e));
	}
}

// export const vote = (data, library=null, dispatch) => {
// 	try {
// 		const { web3, voteContract } = initWeb3AndContract(library);
// 		let gasPrice = 0;
// 		let gas = 0;
// 		web3.eth.getGasPrice().then((result) => {
// 			gasPrice = result;
// 			return voteContract.methods.vote(data.token_id, data.yes).estimateGas({from: data.account});
// 		}).then((result) => {
// 			gas = result;
// 			voteContract.methods.vote(data.token_id, data.yes).send({from: data.account, gas, gasPrice})
// 			.on('transactionHash', function(hash){
// 				dispatch({type: 'SUBMITTED_VOTE', data: {
// 					type: 'SUBMITTED_VOTE'
// 				}})
				
// 			})
// 			.on('confirmation', function(confirmationNumber){
// 				if (confirmationNumber === 0) {
// 					dispatch({type: 'CREATED_VOTE', data: {
// 						type: 'CREATED_VOTE'
// 					}})
// 				}
// 			})
// 			.on('receipt', function(receipt){
// 				// dispatch({type: 'SUCCEEDED_VOTE', data: {
// 				// 	type: 'SUCCEEDED_VOTE'
// 				// }})
// 			})
// 			.on('error', function(error, receipt){
// 				dispatch({type: 'ERROR_VOTE', data: {
// 					type: 'ERROR_VOTE',
// 					token_id: data.token_id
// 				}})
// 				dispatch(setNotificationAction(catchSmartContractErrorMessage(error), 'error'));
// 			});
			
// 		}).catch((e) => {
// 			dispatch({type: 'ERROR_VOTE', data: {
// 				type: 'ERROR_VOTE',
// 				business_id: data.type
// 			}})
// 			dispatch(setNotificationAction(catchSmartContractErrorMessage(e), 'error'));
// 		})
// 	} catch (e) {
// 		dispatch({type: 'ERROR_VOTE', data: {
// 			type: 'ERROR_VOTE',
// 			business_id: data.type
// 		}})
// 		dispatch(setNotificationAction(catchSmartContractErrorMessage(e), 'error'));
// 	}
// }

export const getRewardNBonusBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(REWARD_AND_BONUS_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getAirdropBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(AIRDROP_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getLiquidityBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(LIQUIDITY_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getPrivateNPublicOfferingBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(PRIVATE_AND_PUBLIC_OFFERING_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getEquityHoldingBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(EQUITY_HOLDING_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getWerthanMoniBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(WERTHAN_MONI_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getHotFundBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(HOT_FUND_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getArtFoundationBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(ART_FOUNDATION_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getGeneralOperatingFundBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(GENERAL_OPERATING_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getGrantNGiftBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(GRANT_AND_GIFT_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const getInOutFloBalance = async () => {
	try {
		const { hodlContract } = initWeb3AndContract();
		const balance = await hodlContract.methods.balanceOf(IN_OUT_FLO_WALLET_ADDRESS).call();
		return WeiToEth(balance);
	} catch (e) {
		createError(catchSmartContractErrorMessage(e));
	}
}

export const catchSmartContractErrorMessage = (e) => {
	const err_msg = String(e.message).toLowerCase();
	if (err_msg.includes("account has no shares")) {
		return "No amount to release.";
	} else if (
		err_msg.includes("too many requests") ||
		err_msg.includes("invalid json rpc response") ||
		err_msg.includes("-32005")
	) {
		return "RPC rate limit reached. Please retry in a moment or connect your wallet to use your own RPC provider.";
	} else if (
		err_msg.includes("couldn't connect to node") ||
		err_msg.includes("connection error") ||
		err_msg.includes("invalid connection")
	) {
		return "Cannot reach blockchain RPC endpoint right now. Please retry shortly or connect your wallet.";
	} else if (err_msg.includes("invalid address")) {
		return "Invalid receiver address."
	} else if (err_msg.includes("unexistent proposal")) {
		return "Proposal you are voting does not exist."
	} else if (err_msg.includes("you voted already")) {
		return "You already voted to this proposal.";
	} else if (err_msg.includes("no live proposal")) {
		return "This proposal is not live now.";
	} else if (err_msg.includes("insufficient funds for gas")) {
		return "Your wallet has insufficient funds for gas";
	} else if (err_msg.includes("user denied transaction")) {
		return "You rejected transaction."
	} else if (err_msg.includes("caller is not the coo")) {
		return "You are not COO so your transaction is denied."
	} else {
		return "The transaction is failed. Please verify that you have enough funds to pay the gas fees."
	}
}

const createError = (err_msg) => {
	// Keep errors visible for debugging, but do not crash the whole UI.
	console.error(err_msg);
	return null;
}