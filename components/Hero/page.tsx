"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRightShort, BsPeopleFill } from 'react-icons/bs'

export default function Hero(){
    return(
        <div className="flex flex-col justify-center items-center pt-10 gap-5 rounded-b-3xl">
        {/* <div className="gradient-01 w-full h-[500px] absolute -z-10 top-[500px]"/> */}
        {/* <Link href={'https://discord.gg/cKtCtzXcY5'} target="_blank" className="flex text-[--bg] bg-[--text] px-4 py-2 rounded-full cursor-pointer border border-transparent transition-all hover:border-[--desc]">
          <p>Join our FREE community</p>
          <BsArrowRightShort size={24}/>
        </Link> */}
        <motion.h1 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="text-8xl w-[1000px] text-center font-medium">Surround yourself with the uncommon</motion.h1>
        <motion.p 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        className="w-[600px] text-lg text-center text-[--desc]">Prime Trading Co is where aspiring crypto traders find their path to becoming elite day traders.</motion.p>
        <motion.div 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.4,
          }}
        >
          <Link href={'https://stripe.com'} className="bg-[--highlight] px-6 py-3 rounded-full text-[--bg] font-semibold flex gap-2 cursor-pointer group w-fit">
              <button>
                  Get Started
              </button>
              <div className='p-1 bg-[--bg] rounded-full text-[--highlight] transition-all duration-300 -rotate-45 group-hover:rotate-0'>
                  <BsArrowRightShort size={24}/>
              </div>
          </Link>
        </motion.div>

        <div className="flex justify-center items-center w-full gap-4 h-[400px]">
          {/* Image 4 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.6,
            }}
            >
            <Image src={'/img4.png'} alt="image" width={250} height={0} className="shadow-2xl rounded-2xl"/>
          </motion.div>
          {/* Image 1 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.4,
            }}
            >
            <Image src={'/img1.png'} alt="image" width={500} height={0} className="shadow-2xl rounded-2xl"/>
          </motion.div>
          {/* Image 3 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.7,
            }}
            >
            <Image src={'/img3.png'} alt="image" width={250} height={0} className="shadow-2xl rounded-2xl"/>
          </motion.div>
        </div>
      </div>
    )
}