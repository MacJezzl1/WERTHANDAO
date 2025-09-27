import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect, walletlink } from '../../utils/connectors';
import { useEagerConnect, useInactiveListener } from '../../utils/hooks';
import { getWalletErrorMessage } from '../../utils/helpers';
import { NETWORK_CHAIN_ID } from '../../utils/_constants';

import Modal from "react-modal";

Modal.setAppElement("body");

const WalletConnect = (props) => {
	const { account, activate, deactivate, connector, error } = useWeb3React();
    const [activatingConnector, setActivatingConnector] = useState();
    const [show, setShow] = useState(false);
    const [walletError, setWalletError] = useState('');

    useEffect(() => {
    	if (error) {
	    	let errorMessage = getWalletErrorMessage(error);
			setWalletError(errorMessage || 'Wallet connection failed.');
	    }
    }, [error])

    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager || !!activatingConnector);

    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    const ensureChainForMetaMask = async () => {
		if (typeof window === 'undefined' || !window.ethereum) return;
		const chainIdHex = `0x${NETWORK_CHAIN_ID.toString(16)}`;
		try {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: chainIdHex }],
			});
		} catch (switchError) {
			// 4902 means the chain is missing in wallet.
			if (switchError && switchError.code === 4902) {
				await window.ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [{
						chainId: chainIdHex,
						chainName: 'Polygon Mainnet',
						nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
						rpcUrls: [process.env.NEXT_PUBLIC_RPC_URL || 'https://polygon-bor-rpc.publicnode.com'],
						blockExplorerUrls: ['https://polygonscan.com'],
					}],
				});
				return;
			}
			throw switchError;
		}
	}

    const handleConnectWallet = async (_connector, e) => {
		if (e && e.preventDefault) e.preventDefault();
		setWalletError('');
		setActivatingConnector(_connector);
		try {
			if (_connector === injected) {
				await ensureChainForMetaMask();
			}
			await activate(_connector, undefined, true);
			setShow(false);
		} catch (connectError) {
			setWalletError(getWalletErrorMessage(connectError) || 'Wallet connection failed.');
		}
	}

	const handleClose = () => {
		setShow(false);
	}

	// const checkMetaMaskInstalled = () => {
	// 	const { ethereum } = window;
	// 	return !!ethereum;
	// }

	const handleDisconnectWallet = () => {
		if (connector === walletconnect || connector === walletlink) {
			connector.close();
		} else {
			deactivate();
		}
	}

	return (
		<>
			{
				account ? (
					<>
						<button className="btn-wallet btn-wallet-disconnect"
							onClick={() => {handleDisconnectWallet()}}
						>{`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</button>
					</>
				) : (
					<>
						<button className="btn-wallet btn-wallet-connect" onClick={() => {setShow(true)}}>CONNECT WALLET</button>
					</>
				)
			}
			<Modal
				isOpen={show}
		        onRequestClose={handleClose}
		        contentLabel="My dialog"
		        className="custom-modal wallets-modal dark-bg"
		        overlayClassName="custom-overlay"
		        closeTimeoutMS={500}
		    >
				<div className="dark-bg">
					<div className="gy-3">
						<div className="text-center">
							<a href="#" className="btn-wallet"
								onClick={(e) => {handleConnectWallet(injected, e)}}
							>
								<img className="wallet-logo" src="/assets/images/logos/metamask.svg" width="50px"/>
								<div className="color-white">Metamask</div>
							</a>
						</div>
						<div className="text-center">
							<a href="#" className="btn-wallet"
								onClick={(e) => {handleConnectWallet(walletconnect, e)}}
							>
								<img className="wallet-logo" src="/assets/images/logos/walletconnect.svg" width="50px"/>
								<div className="color-white">WalletConnect</div>
							</a>
						</div>
						<div className="text-center">
							<a href="#" className="btn-wallet"
								onClick={(e) => {handleConnectWallet(walletlink, e)}}
							>
								<img className="wallet-logo" src="/assets/images/logos/coinbase-wallet.svg" width="50px"/>
								<div className="color-white">Coinbase Wallet</div>
							</a>
						</div>
						{walletError ? (
							<div className="text-center color-white mt-3" style={{ color: '#ff6b6b' }}>
								{walletError}
							</div>
						) : null}
					</div>
				</div>
			</Modal>
		</>
	)
}

export default WalletConnect