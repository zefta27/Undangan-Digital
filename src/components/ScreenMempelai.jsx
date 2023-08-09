import { bismillah, bgBunga1, Bunga6, Bunga7, Bunga8, Bunga9, Bunga11, Bunga12, Bunga14, Bunga15 } from "../assets"

const ScreenMempelai = () => (
  <div id="mempelai" className='h-screen max-xs:w-full w-[517px]  flex flex-col bg-gradient-to-b from-[#cce9e0] to-white '>
    <div className=" flex grow w-full relative ">
       <img src={Bunga11} alt="Bunga lebar" className='class-swing  absolute  top-[-70px]  max-xs:top-[-40px] w-[240px] max-xs:w-[160px] left-[60px] max-xs:left-[50px]' style={{"--rotation-angle": "290deg"}}/>
       {/* <img src={bgBunga1} alt="" className="w-[250px] left-0 z-[-10] absolute mx-auto"/> */}
    </div>
    <div className=" flex grow  justify-center items-center">
      <div class=" w-screen relative">
        <img src={bismillah} alt="" className="w-[250px] mx-auto"/>
        <h5 className="text-center font-poppins ">Assalamualaikum Warahmatullahi Wabarakatuh</h5>
        <p className="text-center m-4">Maha suci Allah SWT yang telah menciptakan makhluk-Nya Berpasang-pasangan. Perkenankanlah kami menyampaikan undangan ngunduh mantu putra-putri kami:</p>
        <h4 className='text-center text-4xl max-xs:text-3xl font-fall my-3 font-bold tracking-widest'>Zefta Adetya, S.SI</h4>
        <p className="text-center my-2 px-2">Putra Kedua dari Bapak Abdul Haris, S.IP., M.Si. dan Ibu Ratni</p>
        <p className="text-center my-4">dengan</p>
        <h4 className='text-center text-4xl max-xs:text-3xl font-fall my-3 font-bold  tracking-widest'>Ani Liana S.K.M. </h4>
        <p className="text-center my-2  px-2">Putri Kedua dari Bapak Holidin dan Ibu Suryana</p>
        </div>
    </div>
    <div className=" flex grow w-full relative  ">
      {/* Kiri */}
      <img src={Bunga15} alt="Pisang" className=' absolute  class-swing top-[-10px]  max-xs:top-[-40px] w-[140px] max-xs:w-[120px] left-[-80px] max-xs:left-[-65px] rotate-[320deg]' style={{"--rotation-angle": "320deg"}}/>
      <img src={Bunga8} alt="Ranting" className='class-swing-negatif  absolute  top-[0px]  max-xs:top-[-30px] w-[240px] max-xs:w-[160px] left-[-60px] max-xs:left-[-50px]' style={{"--rotation-angle": "290deg"}}/>
      <img src={Bunga14} alt="Bunga lebar" className='z-20 class-swing  absolute  top-[60px]  max-xs:top-[20px] w-[260px] max-xs:w-[160px] left-[-60px] max-xs:left-[-50px]' style={{"--rotation-angle": "180deg"}}/>
      <img src={Bunga7} alt="Kuning" className='z-30  absolute  top-[100px]  max-xs:top-[40px] w-[40px] max-xs:w-[40px] left-[-20px] max-xs:left-[-10px]' style={{"--rotation-angle": "320deg"}}/>
      {/* Kanan */}
      <img src={Bunga9} alt="Pisang" className=' absolute  class-swing top-[0px]  max-xs:top-[-40px] w-[140px] max-xs:w-[120px] right-[-70px] max-xs:right-[-65px] rotate-[320deg]' style={{"--rotation-angle": "220deg"}}/>
      <img src={Bunga12} alt="Ranting" className='class-swing-negatif  absolute  top-[-20px]  max-xs:top-[-30px] w-[230px] max-xs:w-[160px] right-[-20px] max-xs:right-[-40px]' style={{"--rotation-angle": "70deg"}}/>
      <img src={Bunga6} alt="Bunga lebar" className='class-swing  absolute  top-[60px]  max-xs:top-[20px] w-[260px] max-xs:w-[160px] right-[-60px] max-xs:right-[-50px]' style={{"--rotation-angle": "0deg"}}/>
      <img src={Bunga7} alt="Kuning" className='  absolute  top-[120px]  max-xs:top-[40px] w-[40px] max-xs:w-[40px] right-[-20px] max-xs:right-[-10px]' style={{"--rotation-angle": "320deg"}}/>
    </div>
  </div>
)
export default ScreenMempelai