import { SetStateAction, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const faqs = [
    {
      "question": "What is Prime Trading Co?",
      "answer": "Prime Trading Co is a platform where aspiring crypto traders can learn and develop their skills to become elite day traders."
    },
    {
      "question": "How can I join the Prime Trading Co community?",
      "answer": "You can join our community by clicking on the \"GET STARTED\" button on our website."
    },
    {
      "question": "What are the features offered by Prime Trading Co?",
      "answer": "We offer a range of features including: Daily Signals, Live Sessions, Prime Indicators, Private Office Access."
    },
    {
      "question": "What are the benefits of joining Prime Trading Co?",
      "answer": "Some of the benefits include: Basic to Advanced learning modules to gradually learn more about charting and trading crypto, Receive daily trade ideas and gain access to live trading sessions, Be part of a community that helps you develop a non-stopping mindset, Opportunity to make money from anywhere in the digital age."
    },
    {
      "question": "What are the pricing plans available?",
      "answer": "We offer three pricing plans: SILVER: $75/month, GOLD: $145/month, ELITE: $850/month."
    },
    {
      "question": "How can I contact Prime Trading Co?",
      "answer": "You can connect with us through our social media channels on Instagram, Twitter, TikTok and Discord."
    },
    {
      "question": "What does \"Basic to Advanced\" learning mean?",
      "answer": "It means that Prime Trading Co offers learning modules that cater to both beginners and advanced traders. Traders can take small steps and gradually learn more about charting and trading crypto."
    },
    {
      "question": "What are \"Daily Signals\"?",
      "answer": "Daily Signals are trade ideas provided by Prime Trading Co on a daily basis to help traders make informed decisions."
    },
    {
      "question": "What is the \"Prime Indicators\" feature?",
      "answer": "Prime Indicators are tools provided by Prime Trading Co to assist traders in analyzing the crypto market and making trading decisions."
    },
    {
      "question": "What is the \"Private Office Access\"?",
      "answer": "Private Office Access is a feature that offers exclusive access to certain resources and tools for traders who opt for specific pricing plans."
    },
    {
      "question": "How does the \"Copy - Paste\" feature work?",
      "answer": "The \"Copy - Paste\" feature allows traders to receive daily trade ideas and strategies which they can directly implement in their trading activities."
    }
  ];

export default function FAQs() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpanded = (index: number | null) => {
      if (index === expandedIndex) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    };

const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
});  

const QuestionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scaleY(1)' : 'scaleY(0)',
});  

  return (
    <div className='md:w-full'>
      {faqs.map((faq, index) => (
        <animated.div ref={ref} style={QuestionAnimation} key={index} className='bg-[--highlight] my-4 p-4 rounded-2xl'>
          <button className='text-[--bg] font-bold md:font-medium text-[14px] md:text-2xl flex justify-between w-full items-center' onClick={() => toggleExpanded(index)}>
            {faq.question}
            <div className={`icon ${expandedIndex === index ? 'up' : 'down'}`}>
              {expandedIndex === index ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </button>
          <div className={`answer-container ${expandedIndex === index ? 'expanded' : ''}`}>
            <p className='my-3 text-[#858585]'>{faq.answer}</p>
          </div>
        </animated.div>
      ))}
    </div>
  );
}