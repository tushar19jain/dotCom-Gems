"use client"
import { useState } from "react"
const DemoBox=()=>{
const [textColor, setTextColor] = useState("white")
const [userName, setUsername] = useState("dotCom Gems")
const [bio, setBio] = useState("This is the offical account for dotCom Gems")
    return(
        <div className="text-gray-500 border border-gray-500 rounded-lg px-[30px] py-[40px] mx-[15px]" >
            <div className="flex flex-col card bg-gray-600 shadow-2xl shadow-purple-400 rounded-md px-[15px] py-[10px] mt-[30px] xl:mx-[500px]">
                <p className={`text-${textColor} text-sm`} >@demoFordotComGem</p>
                <p className={`text-${textColor} text-sm font-semibold py-[10px]`} >{userName}</p>
                <p className={`text-${textColor} text-sm font-semibold py-[15px]`}>{bio}</p>
                <button className="bg-black text-white py-[12px] rounded-lg" herf = " " >dotCom gems</button>
                <br></br>
                <button  className="bg-black text-white py-[12px] rounded-lg" herf = " " >X(twitter)</button>
                <br></br>
                <button  className="bg-black text-white py-[12px] rounded-lg" herf = " " >Wishlist</button>
                <br></br>
                <button  className="bg-black text-white py-[12px] rounded-lg bg-indigo-500 border-2 border-indigo-500 shadow-2xl shadow-indigo-600" herf = " " >Share dotCom Gems</button>
                <div className="socialLinks flex justify-center justify-around py-[40px]">
                    <a herf><img src="facebook.png"></img></a>
                    <a herf><img src="github.png"></img></a>
                    <a herf><img src="instagram.png"></img></a>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex flex-col  card shadow-2xl shadow-purple-400 rounded-md px-[15px] py-[10px] mt-[30px] xl:mx-[500px]">
                <p className={`text-${textColor} text-sm`} >@demoFordotComGem</p>
                <p className={`text-${textColor} text-sm font-semibold py-[10px]`} >{userName}</p>
                <p className={`text-${textColor} text-sm font-semibold py-[15px]`}>{bio}</p>
                <img src="neon.jpg"></img>
                <button className="bg-purple-500 text-white py-[12px] rounded-lg" herf = " " >dotCom gems</button>
                <br></br>
                <button  className="bg-purple-500 text-white py-[12px] rounded-lg" herf = " " >X(twitter)</button>
                <br></br>
                <button  className="bg-purple-500 text-white py-[12px] rounded-lg" herf = " " >Wishlist</button>
                <br></br>
                <button  className="bg-purple-500 text-white py-[12px] rounded-lg  border-2 border-purple-500 shadow-2xl shadow-indigo-600" herf = " " >Share dotCom Gems</button>
                <div className="socialLinks flex justify-center  py-[40px]">
                    <a herf><img src="facebook.png"></img></a>
                    <a herf><img src="instagram.png"></img></a>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex flex-col  card shadow-2xl shadow-purple-400 rounded-md px-[15px] py-[10px] mt-[30px] xl:mx-[500px]">
                <p className={`text-${textColor} text-sm`} >@demoFordotComGem</p>
                <p className={`text-${textColor} text-sm font-semibold py-[10px]`} >{userName}</p>
                <p className={`text-${textColor} text-sm font-semibold py-[15px]`}>{bio}</p>
            <video className="" src="bgVideo.mp4" autoPlay={true} controls={false} loop={true}></video>
            <br></br>
                <button className="bg-red-500 text-white py-[12px] rounded-lg" herf = " " >dotCom gems</button>
                <br></br>
                <button  className="bg-black border-2 text-white py-[12px] rounded-lg" herf = " " >X(twitter)</button>
                <br></br>
                <button  className="bg-red-500 text-white py-[12px] rounded-lg" herf = " " >Wishlist</button>
                <br></br>
                <button  className="bg-black border-2 text-white py-[12px] rounded-lg  shadow-2xl shadow-red-600" herf = " " >Share dotCom Gems</button>
                <div className="socialLinks flex justify-center  py-[40px]">
                    <a herf><img src="facebook.png"></img></a>
                    <a herf><img src="instagram.png"></img></a>
                </div>
            </div>
        </div>        
   )
}
export default DemoBox