import React, { useState, useEffect, lazy, Suspense } from 'react';
import  "./App";
import {ScreenSatu, ScreenDua, ScreenMempelai, ScreenAlamat, ScreenPenutup, ScreenLoading, ScreenPlayButton} from './components';
import Loadable from 'react-loadable';

function App() {
  const [undangan, setUndangan] = useState('Mark Zuckerberg');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const undangan = params.get('undangan');
    setUndangan(undangan);
  }, []);
  const MyComponent = Loadable({
    loader: () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(() => (
        <div className="flex flex-col items-center justify-center max-xs:w-full max-xs:overflow-x-hidden"> 
          <ScreenPlayButton />
           <ScreenSatu undangan={undangan}/> 
          <ScreenMempelai /> 
          <ScreenAlamat /> 
          <ScreenDua />
          <ScreenPenutup />
        </div>
      )), 1000)
    ),
  loading: () => <ScreenLoading />,
  });

  return (
    <MyComponent />
  )
}

export default App;
