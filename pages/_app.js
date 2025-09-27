import Head from 'next/head'
import Layout from "@/component/Layout/Layout"
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { ToastContainer } from 'react-toastify';
import '../styles/wallet-modal.scss';
import 'react-toastify/dist/ReactToastify.css';

const getLibrary = (provider) => {
  return new Web3(provider);
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WERTHAN DAO</title>
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </Web3ReactProvider>
    </>
  )
}
