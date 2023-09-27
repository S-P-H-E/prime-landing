import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsPeopleFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import * as React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      id: 1,
      icon: <FaGraduationCap size={50}/>,
      name: 'Basic to Advanced',
      description: 'Take small steps and gradually learn more about charting and trading crypto'
    },
    {
      id: 2,
      icon: <BsPeopleFill size={50}/>,
      name: 'Community',
      description: 'A community that helps you develop a non stopping mindset'
    }
  ]
  return (
    <>
      <Navbar />

      {/* Home */}
      <div className="flex flex-col justify-center items-center h-[600px] gap-5 bg-[--bg] rounded-b-3xl">
        {/* <div className="gradient-01 w-full h-[500px] absolute -z-10 top-[500px]"/> */}
        {/* <Link href={'https://discord.gg/cKtCtzXcY5'} target="_blank" className="flex text-[--bg] bg-[--text] px-4 py-2 rounded-full cursor-pointer border border-transparent transition-all hover:border-[--desc]">
          <p>Join our FREE community</p>
          <BsArrowRightShort size={24}/>
        </Link> */}
        <h1 className="text-8xl w-[1000px] text-center font-medium">Surround yourself with the uncommon</h1>
        <p className="w-[600px] text-lg text-center text-[--desc]">Prime Trading Co is where aspiring crypto traders find their path to becoming elite day traders.</p>
        <Link href={'https://stripe.com'} className="bg-[--highlight] px-6 py-3 rounded-full text-[--bg] font-semibold flex gap-2 cursor-pointer group w-fit">
            <button>
                Get Started
            </button>
            <div className='p-1 bg-[--bg] rounded-full text-[--highlight] transition-all duration-300 -rotate-45 group-hover:rotate-0'>
                <BsArrowRightShort size={24}/>
            </div>
        </Link>

        {/* <div className="flex justify-center items-center w-full gap-4 h-[400px]">
          <Image src={'/img4.png'} alt="image" width={250} height={0} className="shadow-2xl rounded-2xl"/>
          <Image src={'/img1.png'} alt="image" width={500} height={0} className="shadow-2xl rounded-2xl"/>
          <Image src={'/img3.png'} alt="image" width={250} height={0} className="shadow-2xl rounded-2xl"/>
        </div> */}
      </div>

      {/* Features */}
      <div className="flex flex-col justify-center items-center pt-10">
        {/* <p className="flex text-[--bg] bg-[--text] px-4 py-2 rounded-full border border-transparent transition-all hover:border-[--desc]">
          Benefits
        </p> */}
        <div className="flex flex-col py-7">
          {features.map((feature) => (
            <div key={feature.id} className="gap-3 my-10 rounded-2xl w-[400px] flex justify-center items-center">
              <div className="bg-[--highlight] text-[--bg] p-5 rounded-2xl">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl">{feature.name}</h1>
                <p >{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
