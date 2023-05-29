import Bunga5 from '../assets/bunga5.png'
import Bunga6 from '../assets/bunga6.png'
import Bunga7 from '../assets/bunga7.png'
import Bunga8 from '../assets/bunga8.png'
import Bunga9 from '../assets/bunga9.png'
import Bunga10 from '../assets/bunga10.png'
import Bunga11 from '../assets/bunga11.png'
import Bunga14 from '../assets/bunga14.png'
import bgBunga from '../assets/bgbunga.png'


const ScreenDua = () => (
  <div className='h-screen max-xs:w-full w-[517px]  flex flex-col  bg-gradient-to-b from-[#F5F0EC] via-white to-[#F5F0EC]'>
  <div className=" grow w-full relative ">
    <img src={Bunga8} alt="ranting" className= 'top-[65px] absolute right-[-85px]    w-[220px] max-xs:w-[220px] max-xs:right-[-80px]  class-swing  transform rotate-[50deg]' style={{"--rotation-angle": "100deg"}}/>
    <img src={Bunga14} alt="bunga kanan" className= 'top-[15px] max-xs:top[30px] absolute right-[-85px]    w-[290px] max-xs:w-[240px] max-xs:right-[-100px]  class-swing-negatif  transform rotate-[50deg]' style={{"--rotation-angle": "0deg"}}/>
    <img src={Bunga7} alt="kuning" className='absolute  top-[70px] w-[40px] max-xs:w-[40px] right-[-10px] ' />

  </div>
  <div className=" grow w-full flex justify-center items-center">
      <div class="absolute max-xs:w-full  z-10">
        <h4 className='text-center text-3xl max-xs:text-3xl font-poppins my-3 font-bold'> Qs. Ar Rum : 21</h4>
        <h5 className='z-10 text-center text-base  max-xs:text-base font-poppins  w-[512px] max-xs:w-full p-3 max-xs:p-4  ' >“Dan di antara tanda-tanda kekuasan-Nya
          ialah Dia yang menciptakan untukmu
          pasangan-pasangan dari jenismu sendiri
          supaya kamu cenderung dan 
          merasa tenteram kepadanya.
          dan dijadikan-Nya
          di antaramu rasa kasih dan sayang.
          Sesungguhnya pada yang demikian itu
          benar-benar terdapat tanda-tanda
          (kebesaran Allah)
          bagi kaum yang berfikir.”
        </h5>
        </div>
    </div>
  <div className=" grow w-full relative">
    <img src={Bunga8} alt="ranting" className= 'top-[40px] max-xs:top-[30px] absolute left-[-20px] max-xs:left-[-40px]     w-[200px] max-xs:w-[200px]  class-swing  transform rotate-[50deg]' style={{"--rotation-angle": "280deg"}}/>
    <img src={Bunga14} alt="bunga kanan" className= 'top-[60px] max-xs:top[30px] absolute left-[-60px]    w-[290px] max-xs:w-[240px] max-xs:right-[-100px]  class-swing-negatif  transform rotate-[50deg]' style={{"--rotation-angle": "180deg"}}/>
    <img src={Bunga7} alt="kuning" className='absolute  top-[130px] max-xs:top-[120px] w-[40px] max-xs:w-[40px] left-[-10px] ' />
  </div>
</div>
);

export default ScreenDua;