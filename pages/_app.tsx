import '../styles/globals.css';
import '../styles/variables.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Loading from '../components/common/Loading';
import Layout from '../components/layout/Layout';

const AnimationApp = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading setIsLoading={setIsLoading} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default AnimationApp;
