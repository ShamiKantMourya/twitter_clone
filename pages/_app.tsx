import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
// import Modal from '@/components/Model';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal isOpen title='test model' actionLabel='Submit'/> */}
    <RegisterModal />
    <LoginModal />
     <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
