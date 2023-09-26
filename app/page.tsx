import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsPeopleFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      id: 1,
      icon: <FaGraduationCap size={30}/>,
      name: 'Basic to Advanced',
      description: 'Take small steps and gradually learn more about charting and trading crypto'
    },
    {
      id: 2,
      icon: <BsPeopleFill size={30}/>,
      name: 'Community',
      description: 'A community that helps you develop a non stopping mindset'
    }
  ]
  return (
    <>
      <Navbar />

      {/* Home */}
      <div className="flex flex-col justify-center items-center pt-16 gap-5">
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
        <div className="flex flex-row">
          <Image src={'/img1.png'} alt="image" width={300} height={0} className="shadow-2xl rounded-2xl relative bottom-[90px] right-[200px]"/>
          <Image src={'/img2.png'} alt="image" width={300} height={0} className="shadow-2xl rounded-2xl relative bottom-[50px] left-[200px]"/>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col justify-center items-center">
        <p className="flex text-[--bg] bg-[--text] px-4 py-2 rounded-full cursor-pointer border border-transparent transition-all hover:border-[--desc]">
          Benefits
        </p>
        <div className="flex gap-5 py-7">
          {features.map((feature) => (
            <div key={feature.id} className="border border-[--highlight] p-5 rounded-2xl w-[400px]">
              {feature.icon}
              <h1 className="text-3xl">{feature.name}</h1>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
