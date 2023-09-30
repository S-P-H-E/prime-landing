"use client"
import { FaGraduationCap } from 'react-icons/fa'
import { BiSolidCopy, BiWorld } from 'react-icons/bi'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRightShort, BsPeopleFill, BsFillCheckCircleFill } from 'react-icons/bs'
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
import { useRef } from "react"
import FAQs from '@/components/FAQs';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '6516f893ccd327000781201a' },
            url: 'https://general-runtime.voiceflow.com/',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
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

  const pricing = [
    {
      id: 1,
      name: "Silver",
      price: 75,
      benefits: [
        "1/2 Daily signals",
        "Weekly Live sessions"
      ],
      link: 'https://buy.stripe.com/8wM9B79jHclv01idQS'
    },
    {
      id: 2,
      name: "Elite",
      price: 850,
      status: 'Popular',
      benefits: [
        "1/2 Daily signals",
        "Weekly Live sessions",
        "Prime Indicators",
        "Private Office Access",
      ],
      link: 'https://buy.stripe.com/fZe14B67v1GR01i148'
    },
    {
      id: 3,
      name: "Gold",
      price: 145,
      benefits: [
        "1/2 Daily signals",
        "Weekly Live sessions",
        "Prime Indicators",
      ],
      link: 'https://buy.stripe.com/fZe14B9jH85f5lC9AD'
    },
    
  ]

  const benefitsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  const scrollToBenefits = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQs = () => {
    if (faqsRef.current) {
      faqsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar */}
       <div className="p-10 flex justify-between items-center bg-[--bg]">
            <h1 className="text-2xl font-medium w-full cursor-pointer">PRIME</h1>
            <div className="hidden md:flex justify-center gap-7 w-full">
                <div className="flex flex-col group">
                    <button className="font-medium" onClick={scrollToBenefits}>Benefits</button>
                    <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
                </div>
                <div className="flex flex-col group">
                    <button className="font-medium" onClick={scrollToPricing}>Pricing</button>
                    <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
                </div>  
                <div className="flex flex-col group">
                    <button className="font-medium" onClick={scrollToFAQs}>FAQs</button>
                    <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
                </div>  
            </div>
            <div className='w-full flex justify-end'>
                <button onClick={scrollToPricing} className="bg-[--highlight] text-sm md:text-md px-4 py-2 rounded-full text-[--bg] font-semibold flex items-center gap-2 cursor-pointer group w-fit">
                        <p>
                        Get Started
                        </p>
                    <div className='p-1 bg-[--bg] rounded-full text-[--highlight] transition-all duration-300 -rotate-45 group-hover:rotate-0'>
                        <BsArrowRightShort size={24}/>
                    </div>
                </button>
            </div>
        </div>

        {/* Hero */}
        <div className="flex flex-col justify-center items-center pt-10 gap-5">
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
        className="text-5xl px-5 md:text-8xl md:w-[1000px] text-center font-medium">Surround yourself with the uncommon</motion.h1>
        <motion.p 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        className="md:w-[600px] text-lg text-center text-[--desc]">Prime Trading Co is where aspiring crypto traders find their path to becoming elite day traders.</motion.p>
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
          <button onClick={scrollToPricing} className="bg-[--highlight] px-6 py-3 rounded-full text-[--bg] font-semibold flex items-center gap-2 cursor-pointer group w-fit">
                  <p>
                  Get Started
                  </p>
              <div className='p-1 bg-[--bg] rounded-full text-[--highlight] transition-all duration-300 -rotate-45 group-hover:rotate-0'>
                  <BsArrowRightShort size={24}/>
              </div>
          </button>
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

      {/* Benefits */}
      <div ref={benefitsRef} className='p-10 flex justify-center'>
        <motion.div 
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 2,
            }}

            

        className="flex flex-col md:flex-row justify-between items-center bg-[--text] md:w-[1500px] rounded-3xl text-[--bg] p-12 md:p-20 md:h-[750px]">
            <div className="flex h-full flex-col justify-between">
            <h1 className="text-5xl font-medium">One program, <br /> endless possibilties</h1>
            <Image src={'/prime-white.png'} alt="prime logo" width={100} height={0} className='hidden md:flex'/>
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
                
                key={feature.id} className="gap-3 my-10 rounded-2xl w-full md:w-[400px] flex justify-center items-center">
                    <div className="bg-[--bg] text-[--text] scale-90 p-5 rounded-2xl">
                        {feature.icon}
                    </div>
                <div className="flex flex-col text-[--bg]">
                    <h1 className="text-2xl md:text-3xl">{feature.name}</h1>
                    <p className='text-sm'>{feature.description}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
      </div>

      {/* Pricing */}
      <div ref={pricingRef} className='flex flex-col items-center py-20'>
      <motion.h1 
        initial='initial'
        variants={fadeInAnimationVariants}
        whileInView="animate"
        viewport={{
            once: true,
          }}
        className='text-5xl font-medium pb-10 text-center'>THE CHOICE IS <mark className='underline text-[--text] bg-transparent'>YOURS</mark></motion.h1>
        <div className='flex flex-col md:flex-row justify-center items-center ' >
          {pricing.map((price) => (
            <motion.div 
            initial='initial'
            variants={fadeInAnimationVariants}
            whileInView="animate"
            viewport={{
                once: true,
              }}

              key={price.id} className={clsx('px-16 py-10 shadow-xl border border-[--highlight] rounded-2xl m-5', price.status === 'Popular' ? 'bg-[--highlight] text-[--bg]' : '')}>
              <h1 className={clsx('text-xl rounded-full text-center', price.status === 'Popular' ? 'bg-[--bg] text-[--highlight]' : 'bg-[--highlight] text-[--bg]')}>{price.name}</h1>
              <h2 className='text-5xl font-medium py-5'>${price.price}<mark className='text-[--desc] bg-transparent text-sm'>/month</mark></h2>
              {price.benefits.map((benefit) => (
                <div key={1} className='flex gap-1 items-center py-3'>
                  <BsFillCheckCircleFill />
                  <p>{benefit}</p>
                </div>
              ))}
              <Link href={price.link}>
                <button className={clsx(price.status === 'Popular' ? 'get-started' : 'get-started-blue' )}>
                  Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center px-5 py-20' ref={faqsRef}>
        <motion.h1 
          initial='initial'
          variants={fadeInAnimationVariants}
          whileInView="animate"
          viewport={{
              once: true,
            }}
          className='text-5xl font-medium pb-10 uppercase text-center'>
            Frequently Asked Questions
        </motion.h1>
        <FAQs />
      </div>

      {/* Footer */}
      <motion.div 
        initial='initial'
        variants={fadeInAnimationVariants}
        whileInView="animate"
        viewport={{
            once: true,
          }}

        className="bg-[--highlight] text-[--bg] px-16 py-10 mt-20 md:h-[250px] flex flex-col md:flex-row justify-between">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-center md:justify-start items-center gap-3">
            <Image src={'/prime-white.png'} alt="prime" width={100} height={0}/>
            <h1 className="text-3xl">PRIME</h1>
          </div>
          <p className="text-[#888888] hidden md:flex">©2023 by Prime Trading co.</p>
        </div>
        <div className="flex justify-between items-center md:items-start gap-10 my-7 md:m-0">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1>Navigation</h1>
            <button className="text-[#949494] hover:underline" onClick={scrollToBenefits}>Benefits</button>
            {/* <button className="text-[#949494] hover:underline" onClick={scrollToTestimonial}>Testimonials</button> */}
            <button className="text-[#949494] hover:underline" onClick={scrollToPricing}>Pricing</button>
            <button className="text-[#949494] hover:underline" onClick={scrollToFAQs}>FAQs</button>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1>Socials</h1>
            <Link href={'https://www.instagram.com/prime_trading_co_/'} target='_blank' className="text-[#949494] hover:underline">Instagram</Link>
            <Link href={'https://twitter.com/PrimeTradeHUB'} target='_blank' className="text-[#949494] hover:underline">Twitter</Link>
            <Link href={'https://www.tiktok.com/@prime_trading_co'} target='_blank' className="text-[#949494] hover:underline">TikTok</Link>
          </div>
          {/* <div className="flex flex-col justify-start items-start gap-2">
            <h1>Legal</h1>
            <Link href="/Legal/Terms of Service.pdf">
              <button className="text-[#949494] hover:underline">Terms of Service</button>
            </Link>
            <Link href="/Legal/Privacy Policy.pdf">
              <button className="text-[#949494] hover:underline">Privacy Policy</button>
            </Link>
          </div> */}
        </div>
        <p className="text-[#888888] w-full flex justify-center items-center md:hidden my-4">©2023 by Prime Trading co.</p>
      </motion.div>
    </>
  )
}
