"use client"
import { useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
const Navbar =()=>{
    const [navbar, openNavBar] = useState(false)
    return(
        navbar ?
       <div className='bg-gray-900  flex flex-col items-center gap-[60px] w-[100%] h-[100%] fixed  py-[120px] justify-between px-[50px]'>
            <p className = 'text-white xl:inline-block 2xl:inline-block lg:inline-block md:inline-block'>Features</p>
                <p className = 'text-white xl:inline-block 2xl:inline-block lg:inline-block md:inline-block'>FAQ</p>
                <button className =' xl:inline-block 2xl:inline-block lg:inline-block md:inline-block text-white font-semibold text-sm rounded-full px-[8px] w-[100px] py-[10px]'>Login</button>
                <button className=' xl:inline-block 2xl:inline-block lg:inline-block md:inline-block bg-blue-600 text-white font-semibold text-sm rounded-full px-[8px] w-[100px] py-[10px] '>Sign up</button>
                <button onClick={()=>{
                    openNavBar(false)
                }} className = 'text-white text-2xl xl:hidden lg:hidden md:hidden sm:hidden'><IoMdClose /></button>
       </div>
       :
       <div className='bg-gray-950 flex justify-between h-16 px-[50px]'>
            <div className = 'flex items-center gap-[40px]'>
                <img className="h-[40px]" src = "logo.svg"></img>
                <p className = 'hidden text-white xl:inline-block 2xl:inline-block lg:inline-block md:inline-block'>Features</p>
                <p className = 'hidden text-white xl:inline-block 2xl:inline-block lg:inline-block md:inline-block'>FAQ</p>
            </div>
            <div className ='flex items-center'>
                <button className = 'hidden xl:inline-block 2xl:inline-block lg:inline-block md:inline-block text-white font-semibold text-sm rounded-full px-[8px] w-[100px] py-[10px]'>Login</button>
                <button className=' hidden xl:inline-block 2xl:inline-block lg:inline-block md:inline-block bg-blue-600 text-white font-semibold text-sm rounded-full px-[8px] w-[100px] py-[10px] '>Sign up</button>
                <button onClick={()=>{
                    openNavBar(true)
                }} className = 'text-white text-2xl xl:hidden lg:hidden md:hidden sm:hidden'><PiHamburgerFill /></button>
            </div>
       </div>
    )
}
export default Navbar