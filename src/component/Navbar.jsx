import { ShoppingBasket } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Menu } from 'lucide-react';
import Home from "./Body"


import { useState } from 'react';

const Navbar = () => {

    const [isMobileNav, setisMobileNav] = useState(false)

    const toggleMobileMenu = () => {
        setisMobileNav(!isMobileNav);
        console.log("clicking");

    };


    return (
        <div className=' flex justify-between px-10 py-6 bg-[#1C352D] '>
            <div data-aos="zoom-in"
                data-aos-duration="1000">
                <ShoppingBasket className=' md:size-[40px] ' size="35px" color="#ffffff" />
            </div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800" className='hidden md:flex text-[17px] pt-3 font-sans space-x-6 text-white '>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900" href="Home">Home</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" href="">Product</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1100" href="">About</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200" href="">Location</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1300" href="">Vision</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1400" href="">Mission</a>
            </div>
            <div data-aos="zoom-in"
                data-aos-duration="1400" >
                <CircleUserRound className='hidden md:block  ' size="40px" color='#ffffff' />
            </div>
            <Menu data-aos="flip-left"
                data-aos-easing="ease-out-cubic" data-aos-duration="500" onClick={toggleMobileMenu} className='md:hidden' size="30px" color='#ffffff' />

            {isMobileNav && (
                <div className="fixed inset-0 md:hidden flex justify-center items-center bg-[#1c352d6e] bg-opacity-80 z-50">
                    <div data-aos="fade-down" className="flex flex-col text-white  space-y-6 index-x-0 text-center">
                        <a href="../">Home</a>
                        <a href="">Product</a>
                        <a href="">About</a>
                        <a href="">Location</a>
                        <a href="">Vision</a>
                        <a href="">Mission</a>
                        <button className=' rounded-3xl  border-2 py-2 px-8 border-[#1C352D] hover:text-white hover:bg-[#1C352D] '>Login</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar