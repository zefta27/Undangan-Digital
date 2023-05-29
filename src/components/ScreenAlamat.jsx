import { Bunga1, bgBunga1, melati, Bunga16, Bunga2, Bunga3 } from "../assets"
import { HiOutlineLocationMarker } from 'react-icons/hi';

const ScreenAlamat = () => (
  <div className='h-screen max-xs:w-full w-[517px]  flex flex-col bg-gradient-to-b from-white to-[#F5F0EC] max-xs:overflow-x-hidden'>
    <div className=" flex-none w-full relative ">
        {/* <img src={bgBunga1} alt="" className="w-[250px] left-0 z-10 absolute mx-auto"/> */}
    </div>
    <div className=" flex grow w-full justify-center items-center">
      <div class=" w-full">
        <h5 className="text-center text-xl font-poppins font-bold">SAVE THE DATE</h5>
        <h5 className="text-center font-poppins font-bold mb-5">JUMAT</h5>
        <img src={Bunga1} alt="" className="w-[60px] relative mx-auto text-center mb-[-45px] rotate" />
        <h5 className="text-center text-3xl font-poppins font-bold">17</h5>
        <h5 className="text-center font-poppins  font-bold mt-5">Maret 2023</h5>
        <div className="flex flex-row  justify-center items-center">
            <div className=" my-3 text-center font-poppins border-r-2 border-[#494d30] pr-4">
              <h5 className="font-bold" >AKAD</h5>
              <div className="flex flex-row">
                <img src={Bunga16} alt="" className="h-[40px] relative left-[15px] class-swing" style={{"--rotation-angle": "0deg"}}/>
                <img src={Bunga3} alt="" className="h-[40px] relative z-10 " />
                <img src={Bunga2} alt=""  className="h-[40px] relative right-[15px] class-swing-negatif" style={{"--rotation-angle": "0deg"}}/>
              </div>
              {/* <img src={melati} alt="" className="mx-auto w-[100px] my-2" /> */}
              <p className="font-bold">08:00 WIB</p>
            </div>
            <div  className=" my-3 text-center font-poppins border-l-2 border-[#494d30] pl-4 ">
              <h5 className="font-bold">RESEPSI</h5>
              {/* <img src={melati} alt="" className="mx-auto w-[100px] my-2" /> */}
              <div className="flex flex-row">
                <img src={Bunga16} alt="" className="h-[40px] relative left-[15px] class-swing" style={{"--rotation-angle": "0deg"}}/>
                <img src={Bunga3} alt="" className="h-[40px] relative z-10 " />
                <img src={Bunga2} alt=""  className="h-[40px] relative right-[15px] class-swing-negatif" style={{"--rotation-angle": "0deg"}}/>
              </div>
              <p className="font-bold">13:00 WIB</p>
            </div>
        </div>
        <h5 className="text-center font-poppins font-bold my-3">Kediaman Mempelai Wanita</h5>
          <center>
         
        
          <a href="https://s.id/zefta_dan_ani" class="inline-flex items-center bg-orange-500 rounded text-white p-2 ">
              <HiOutlineLocationMarker class="mr-1" size={20} className="bounce-3"/>
              <span>Cek Di Peta</span>
             
            </a>
            <p className="text-center font-mono p-6 relative  z-10">Lingkungan III RT.001 RW.005  (Kalangan) Gelumbang Kec. Gelumbang Kab. Muara Enim</p>
      
          </center>
        </div>
    </div>
    <div className=" flex-none w-full relative ">
  
    </div>
  </div>
)
export default ScreenAlamat