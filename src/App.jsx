import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loadable from 'react-loadable';
import { ScreenSatu, ScreenMempelai, ScreenAlamat, ScreenDua, ScreenPenutup, ScreenLoading, ScreenPlayButton, MenuWeb } from './components';
import './App.css'; // Pastikan path-nya sesuai

function App() {
  const [undangan, setUndangan] = useState('Mark Zuckerberg');


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const undangan = params.get('undangan');
    setUndangan(undangan);
    
    // Set showDiv to true when component is mounted
    
  }, []);

  const MyComponent = Loadable({
    loader: () =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(() => (
              <div className="flex flex-col items-center justify-center max-xs:w-full max-xs:overflow-x-hidden">
                <ScreenPlayButton />
                <ScreenSatu undangan={undangan}  />
                <ScreenMempelai />
                <ScreenAlamat />
                <ScreenDua />
                <ScreenPenutup />
                <MenuWeb  />
              </div>
            )),
          1000
        )
      ),
    loading: () => <ScreenLoading />,
  });

  return <MyComponent />;
}

export default App;
