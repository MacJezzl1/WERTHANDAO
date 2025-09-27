import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NETWORK_CHAIN_ID, NETWORK_CHAIN_NAME, INFURA_PROJECT_ID } from './_constants';

const DEFAULT_RPC_URL = `https://${NETWORK_CHAIN_NAME}.infura.io/v3/${INFURA_PROJECT_ID}`;
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || DEFAULT_RPC_URL;

export const injected = new InjectedConnector({ supportedChainIds: [NETWORK_CHAIN_ID] });

export const walletconnect = new WalletConnectConnector({
	rpc: { [NETWORK_CHAIN_ID]: RPC_URL },
	rpcUrl: RPC_URL,
	chainId: NETWORK_CHAIN_ID,
	qrcode: true,
	pollingInterval: 12000
});

export const walletlink = new WalletLinkConnector({
	url: RPC_URL,
	appName: 'HODL DAO',
	supportedChainIds: [NETWORK_CHAIN_ID]
});
