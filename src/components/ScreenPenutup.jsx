import { bismillah, bgBunga1, melati, couple, bgBunga, Bunga6, Bunga8, Bunga9, Bunga5, Bunga11, Bunga12, Bunga7, Bunga10 } from "../assets"

const ScreenPenutup = () => (
  <div className='h-screen max-xs:w-screen w-[517px]  flex flex-col relative'  style={{background :'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244,239,235,1) 100%)'}} >
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
    <div className=" flex grow  justify-center items-center">
      <div className=" max-xs:w-screen px-8" >
        <div className="bg-glass">
         <p className="text-center p-6 z-10 relative">Tanpa mengurangi rasa hormat kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami</p>
        </div>
        <center>
        <img src={couple} alt="" className="w-[150px] my-6 z-10 relative"/>
        <p className="font-fall text-3xl relative z-10 tracking-widest font-bold fade-in">John & Juliette</p>
        </center>
      </div>
    </div>
    <div className="grow  w-screen">
        <img src={bgBunga} alt="" className='absolute   bottom-0 left-0 z-0 w-[220px] max-xs:w-[180px] ' />
        <img src={Bunga6} alt="bunga samping" className= 'absolute right-[-85px]  transform rotate-[50deg]   w-[260px] max-xs:w-[240px] max-xs:right-[-100px] bottom-[100px] class-swing ' style={{"--rotation-angle": "30deg"}}/>
        {/* <img src={Bunga8} alt="ranting kanan" className= 'absolute     left-[100px]  transform rotate-[320deg]   w-[300px] max-xs:w-[190px] bottom-[-30px] max-xs:bottom-[-30px] class-swing'  style={{"--rotation-angle": "320deg"}} /> */}
        {/* <img src={Bunga6} alt="bunga samping" className= 'absolute     left-[-50px]  transform rotate-[270deg]   w-[260px] max-xs:w-[190px] bottom-[-40px] max-xs:left-[-30px] max-xs:bottom-[-60px] class-swing-negatif'  style={{"--rotation-angle": "340deg"}} /> */}
        {/* <img src={Bunga9} alt="pisang" className='absolute  bottom-[-70px] right-0 z-0 left-[90px] max-xs:left-[95px] w-[240px] max-xs:w-[200px] rotate-[260deg] max-xs:bottom-[-100px] class-swing-satu' style={{"--rotation-angle": "260deg"}}/> */}
        {/* <img src={Bunga5} alt="pucat" className='absolute  bottom-0  w-[70px] max-xs:w-[50px] left-[40px] max-xs:bottom-0'/> */}
        {/* <img src={Bunga11} alt="daun lebar" className= 'absolute z-10   left-[30px]   -rotate-[240deg]   w-[240px]  max-xs:w-[190px] bottom-[-40px] max-xs:bottom-[-40px] class-swing'  style={{"--rotation-angle": "-240deg"}}/> */}
        {/* <img src={Bunga7} alt="kuning" className='absolute  z-20 bottom-0  w-[80px] left-[130px] max-xs:w-[50px] max-xs:bottom-[-10px] max-xs:left-[100px]'/> */}
    </div>
  </div>
)
export default ScreenPenutup