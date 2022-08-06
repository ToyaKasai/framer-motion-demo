import '../styles/globals.css';
import type { AppProps } from 'next/app';

function AnimationApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default AnimationApp;
