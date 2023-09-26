import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

export default function Navbar(){
    return(
        <div className="p-10 flex justify-between items-center">
            <h1 className="text-2xl font-medium w-full cursor-pointer">PRIME Co.</h1>
            <div className="flex justify-center gap-7 w-full">
                <div className="flex flex-col group">
                    <button className="font-medium">Home</button>
                    <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
                </div>
                <div className="flex flex-col group">
                    <button className="font-medium">Benefits</button>
                    <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
                </div>
                <div className="flex flex-col group">
                    <button className="font-medium">Pricing</button>
                    <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
                </div>  
            </div>
            <div className='w-full flex justify-end'>
                <Link href={'https://stripe.com'} className="bg-[--highlight] px-4 py-2 rounded-full text-[--bg] font-semibold flex gap-2 cursor-pointer group w-fit">
                    <button>
                        Get Started
                    </button>
                    <div className='p-1 bg-[--bg] rounded-full text-[--highlight] transition-all duration-300 -rotate-45 group-hover:rotate-0'>
                        <BsArrowRightShort size={24}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export function NavbarItems(){
    return 
}

