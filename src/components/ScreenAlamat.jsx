import { Bunga1, bgBunga1, melati, Bunga16, Bunga2, Bunga3 } from "../assets"
import { HiOutlineLocationMarker } from 'react-icons/hi';

const ScreenAlamat = () => (
  <div id="alamat" className='h-screen max-xs:w-full w-[517px]  flex flex-col bg-gradient-to-b from-white to-[#cce9e0]    max-xs:overflow-x-hidden'>
    <div className=" flex-none w-full relative ">
        {/* <img src={bgBunga1} alt="" className="w-[250px] left-0 z-10 absolute mx-auto"/> */}
    </div>
    <div className=" flex grow w-full justify-center items-center">
      <div class=" w-full">
        <h5 className="text-center text-xl font-poppins font-bold">SAVE THE DATE</h5>
        <h5 className="text-center font-poppins font-bold mb-5">MINGGU</h5>
        <img src={Bunga1} alt="" className="w-[60px] relative mx-auto text-center mb-[-45px] rotate" />
        <h5 className="text-center text-3xl font-poppins font-bold">27</h5>
        <h5 className="text-center font-poppins  font-bold mt-5">Agustus 2023</h5>
        <div className="flex flex-col  justify-center items-center">
            <div className=" my-3 text-center font-poppins  pr-4">
              <h5 className="font-bold" >ACARA</h5>
              <div className="flex flex-row">
                <img src={Bunga16} alt="" className="h-[40px] relative left-[15px] class-swing" style={{"--rotation-angle": "0deg"}}/>
                <img src={Bunga3} alt="" className="h-[40px] relative z-10 " />
                <img src={Bunga2} alt=""  className="h-[40px] relative right-[15px] class-swing-negatif" style={{"--rotation-angle": "0deg"}}/>
              </div>
              {/* <img src={melati} alt="" className="mx-auto w-[100px] my-2" /> */}
              <p className="font-bold">10:00 WIB</p>
            </div>
           
        </div>
        <h5 className="text-center font-poppins font-bold my-3">Kediaman Mempelai Pria</h5>
          <center>
         
        
          <a href="https://www.google.com/maps/place/3%C2%B014'46.6%22S+104%C2%B026'06.6%22E/@-3.2462769,104.4326019,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-3.2462769!4d104.4351768?entry=ttu" class="inline-flex items-center bg-orange-500 rounded text-white p-2 ">
              <HiOutlineLocationMarker class="mr-1" size={20} className="bounce-3"/>
              <span>Cek Di Peta</span>
             
            </a>
            <p className="text-center font-mono p-6 relative  z-10">Jln. Pipa Pertamina No. 33 RT 04. RW. 02 (Depan SMA PGRI Gelumbang) </p>
      
          </center>
        </div>
    </div>
    <div className=" flex-none w-full relative ">
  
    </div>
  </div>
)
export default ScreenAlamat