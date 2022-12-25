import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='flex global'>
        <div>
          <NavBar />
        </div>
        <div>
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
