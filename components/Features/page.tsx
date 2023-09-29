"use client"
import { motion } from "framer-motion";
import { BsPeopleFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { BiSolidCopy, BiWorld } from 'react-icons/bi'
import Image from "next/image";

export default function Features(){
    const fadeInAnimationVariants = { 
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            }
        })
    }

    const features = [
        {
          id: 1,
          icon: <FaGraduationCap size={40}/>,
          name: 'Basic to Advanced',
          description: 'Take small steps and gradually learn more about charting and trading crypto'
        },
        {
          id: 2,
          icon: <BsPeopleFill size={40}/>,
          name: 'Community',
          description: 'A community that helps you develop a non stopping mindset'
        },
        {
          id: 3,
          icon: <BiSolidCopy size={40}/>,
          name: 'Copy-Paste',
          description: 'Receive daily trade ideas and gain access to live trading sessions'
        },
        {
          id: 4,
          icon: <BiWorld size={40}/>,
          name: 'Earn Anywhere',
          description: 'Many are crafting their dream life in the digital age around the world'
        },    
      ]

    return(
        <>
            <motion.div 
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 2,
                }}

            className="flex flex-row justify-between items-center mt-10 bg-[--text] rounded-3xl m-20 text-[--bg] p-20 h-[750px]">
                <div className="flex h-full flex-col justify-between">
                <h1 className="text-5xl font-medium">One program, <br /> endless possibilties</h1>
                <Image src={'/prime-white.png'} alt="prime logo" width={100} height={0}/>
                </div>
                <div className="flex flex-col py-7">
                {features.map((feature) => (
                    <motion.div 
                    initial='initial'
                    variants={fadeInAnimationVariants}
                    whileInView="animate"
                    viewport={{
                        once: true,
                      }}
                    
                    key={feature.id} className="gap-3 my-10 rounded-2xl w-[400px] flex justify-center items-center">
                        <div className="bg-[--bg] text-[--text] p-5 rounded-2xl">
                            {feature.icon}
                        </div>
                    <div className="flex flex-col text-[--bg]">
                        <h1 className="text-3xl">{feature.name}</h1>
                        <p >{feature.description}</p>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.div>
        </>
    )
}