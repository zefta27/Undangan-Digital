import React from 'react';

const ScreenLoading = () => {
 
  return (
    <div className="flex justify-center items-center h-screen w-full " style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,216,197,1) 100%)'}}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mx-auto my-auto ">

      </div>
  </div>  
  );
};

export default ScreenLoading;