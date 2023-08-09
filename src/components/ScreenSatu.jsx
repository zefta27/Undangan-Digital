import React, { useState } from "react";


import {Bunga5, Bunga6, Bunga7, Bunga8, Bunga9, Bunga10, Bunga11, Bunga12, Bunga13, bgBunga, couple1, photoUndangan} from '../assets';


const ScreenSatu = (props) => {
  

  
const scrollToSection =  () => {

  const section = document.getElementById("mempelai");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

    
  }
};


  return(
  <div className='h-screen max-xs:w-screen w-[517px]  flex flex-col relative ' style={{background : 'linear-gradient(0deg, #00ac6959, white), url('+photoUndangan+')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <div className=" grow w-full relative">
    <img src={Bunga10} alt="" className='absolute  top-0 right-0 z-0 w-[220px] max-xs:w-[180px]  '  />
      <img src={Bunga9} alt="Pisang" className='absolute  top-[-140px] max-xs:top-[-110px]  z-0 right-[50px] max-xs:right-[45px] w-[300px] max-xs:w-[220px] md:w-[253px] class-swing' style={{"--rotation-angle": "140deg"}} />
      <img src={Bunga8} alt="ranting kanan" className='absolute  right-[-20px] max-xs:right-[10px] transform rotate-270 w-[380px] top-[-30px] max-xs:w-[160px] md:w-[253px] max-xs:top-[20px] class-swing' style={{"--rotation-angle": "10deg"}} />
      <img src={Bunga12} alt="ranting kiri" className='absolute  right-[120px] transform rotate-90 w-[320px] top-[-30px] max-xs:w-[170px] md:w-[253px] max-xs:top-[10px] max-xs:right-[100px] class-swing-negatif' style={{"--rotation-angle": "0deg"}} />
      <img src={Bunga6} alt="daun paling kanan" className='absolute  right-[-40px] transform rotate-270 w-[300px] top-[-50px] max-xs:w-[190px] md:w-[253px] max-xs:top-[-30px] class-swing' style={{"--rotation-angle": "160deg"}} />
      <img src={Bunga5} alt="pucat" className='absolute  top-0 w-[70px] max-xs:w-[50px] right-[40px] max-xs:top-0' />
      <img src={Bunga11} alt="daun lebar" className='absolute  right-[30px] -rotate-[55deg] w-[280px] top-[-60px] max-xs:w-[200px] md:w-[253px] max-xs:top-[-40px] class-swing' style={{"--rotation-angle": "-55deg"}} />
      <img src={Bunga7} alt="kuning" className='absolute  top-[-30px] w-[60px] max-xs:w-[50px] right-[120px] max-xs:right-[105px] max-xs:top-[-10px]' />
  </div>
  <div className="flex grow justify-center items-center ">
    <div className="max-xs:w-screen relative" style={{alignSelf: " flex-end"}}>
   
        <h4 className='text-center text-3xl max-xs:text-xl font-poppins my-3 font-bold flex-end'>Ngunduh Mantu</h4>
        

        <h3 className='text-center text-5xl max-xs:text-4xl font-bold my-4 font-fall tracking-wider fade-in z-50 relative'>Zefta & Ani</h3>
        <div className='relative '>
          <div className='relative z-40 bg-glass py-2 w-[300px] justify-center items-center text-center max-mx:mx-auto rounded max-xs:mx-auto mb-5 ' >
              <h5 className='text-center'>Kepada Yth;</h5>
              <h5 className='text-center'>Bapak/Ibu/Saudara/i</h5>
              <h4 className='text-center text-lg font-bold py-2'>{props.undangan}</h4>
          </div>
        </div>
        <center>
          <button onClick={ scrollToSection} class="bg-orange-500 text-white py-2 px-4 rounded mt-6 pulse z-30 relative">
            Buka Undangan
          </button>
        </center>
    </div>
  </div>
  <div className="grow w-screen">
      {/* <img src={bgBunga} alt="" className='absolute   bottom-0 left-0 z-0 w-[220px] max-xs:w-[180px] ' /> */}
      <img src={Bunga8} alt="ranting kanan" className= 'absolute     left-[100px]  transform rotate-[320deg]   w-[300px] max-xs:w-[190px] bottom-[-60px] max-xs:bottom-[-60px] class-swing'  style={{"--rotation-angle": "320deg"}} />
      <img src={Bunga6} alt="bunga samping" className= 'absolute     left-[-50px]  transform rotate-[270deg]   w-[260px] max-xs:w-[190px] bottom-[-40px] max-xs:left-[-30px] max-xs:bottom-[-60px] class-swing-negatif'  style={{"--rotation-angle": "340deg"}} />
      <img src={Bunga9} alt="pisang" className='absolute  bottom-[-70px] right-0 z-0 left-[90px] max-xs:left-[95px] w-[240px] max-xs:w-[200px] rotate-[260deg] max-xs:bottom-[-100px] class-swing-satu' style={{"--rotation-angle": "260deg"}}/>
      <img src={Bunga5} alt="pucat" className='absolute  bottom-0  w-[70px] max-xs:w-[50px] left-[40px] max-xs:bottom-0'/>
      <img src={Bunga11} alt="daun lebar" className= 'absolute z-10   left-[30px]   -rotate-[240deg]   w-[240px]  max-xs:w-[190px] bottom-[-40px] max-xs:bottom-[-40px] class-swing'  style={{"--rotation-angle": "-240deg"}}/>
      <img src={Bunga7} alt="kuning" className='absolute  z-20 bottom-0  w-[80px] left-[130px] max-xs:w-[50px] max-xs:bottom-[-10px] max-xs:left-[100px]'/>
  </div>
</div>
  );
  }

export default ScreenSatu;
