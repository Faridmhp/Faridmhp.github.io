import React from 'react';
import { useEffect ,useState } from 'react';
import { LinearProgress } from '@mui/material';
import '../styles/global.scss'
import { CssBaseline } from '@mui/material';
import LoadingPage from '../pages/LoadingPage';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setIsFirstLoad(false);
      }, 2000);  // 2000ms = 2 seconds
    }
  }, [isFirstLoad]);

  return (
    <>
      <CssBaseline />
      {loading ? <LoadingPage /> : <Component {...pageProps} setLoading={setLoading} />}
    </>
  );
}

export default MyApp;