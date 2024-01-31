import DemoBox from "@/Components/DemoBox/DemoBox";
import FeaturesBox from "@/Components/Navbar/FeaturesBox/FeaturesBox";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-950 ">
      <Navbar />
      <h1 className="text-white  pt-[90px] text-6xl font-extrabold text-center sm:text-5xl md:text-8xl lg:text-8xl 2xl:text-8xl xl:text-8xl">dotCom Gems</h1>
      <p className="text-gray-500 font-semibold py-[50px] font-mono text-sm text-md text-center xl:text-3xl">One card🔥, for all your Links</p>
      <button className="mx-[90px] shadow-2xl shadow-indigo-500 transition-[0.2s ease] border-double border-white my-[30px] xl:mx-[670px] inline-block 2xl:inline-block lg:inline-block md:inline-block bg-blue-600 text-white font-semibold text-sm rounded-full px-[8px] w-[180px] py-[15px] '" ><a href="https://docs.google.com/forms/d/e/1FAIpQLSdOWlT3BGAc9mQf_00rWO8f3Po-HrpRIgruOefiXJS3PU2H1Q/viewform?usp=sf_link"> Wishlist Now!</a></button>
       <div className="featuresBoxesColection gap-[40px] flex flex-col justify-between px-[30px] py-[30px] xl:flex-row">
        <FeaturesBox heading = "Beautiful theme" src = "theme.png" />
        <FeaturesBox heading = "Share links" src = "share.png" />
        <FeaturesBox heading = "Custom theme" src = "customTheme.gif" />
        <FeaturesBox heading = "Premium features" src = "premium.png" />
      </div>
      <p className="text-center text-2xl text-white font-semibold py-[40px]">And much more...........</p>
      <DemoBox />
      <h1 className="text-center py-[100px] text-3xl font-semibold text-white">This is just 0.01%. <br></br> Follow our social handles for more updates🤩</h1> 
      <div className="font-bold py-[10px] ml-[30px] rotate-6 xl:ml-[560px] xl:py-[30px]"><mark className="py-[12px] px-[12px] xl:text-4xl ">Early wishlisting offers !</mark></div> 
      <div className="border w-[1/5] rounded-xl border-gray-500 mx-[15px] xl:w-[580px] xl:mx-[470px] ">
      <p className="text-center py-[25px] px-[20px] text-sm font-mono text-gray-200 xl:text-xl">⭐ First 5 wishlister will get life time premium</p>
      <p className="text-center py-[25px] px-[20px] text-sm font-mono text-gray-200 xl:text-xl">⭐ Other 20 will get a special <u>Limited</u> badge <button className="border py-[6px] px-[6px] rounded-xl bg-gray-700 text-white ">GEM💎</button> </p>
      <p className="text-center py-[25px] px-[20px] text-sm font-mono text-gray-200 xl:text-xl">⭐ First 10 registration after launch will get special background theme</p>
  </div>
  <br></br>
  <br></br>
  <footer className="flex flex-col items-center px-[60px] gap-[20px] pt-[30px] py-[60px] xl:flex-row xl:items-center xl:justify-between ">
      <div>
        <img className="w-[80px]" src="logo.svg"></img>
      </div>
      <div className="socialLinks flex gap-[50PX]"> 
        <a href=""><img className="w-[40px] xl:w-[70px]" src="icons8-instagram.svg"></img></a>
        <a href=""><img className="w-[40px] invert xl:w-[70px]" src="icons8-twitterx.svg"></img></a>
      </div>
      <div className="text-white text-center">
        <ul>
          <li >Launch details</li>
          <a href="mailto:jaint381@gmail.com">Support</a>
          <li></li>
        </ul>
      </div>
  </footer>
</div>
  );
}
