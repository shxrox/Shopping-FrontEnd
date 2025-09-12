

const Product = () => {
    return (
        <div>
            <div >
                <h2 data-aos="fade-up"  data-aos-duration="1000" className="mt-32 text-center text-[#1C352D] text-[45px] font-extrabold  font-mono md:text-[50px]">Our Proudcuts</h2>
            </div>
            <div className='mt-24 grid sm:grid-cols-1 md:grid-cols-4 text-center mx-[10px] px-[30px] gap-6'>
                <div data-aos="fade-up" data-aos-duration="900" 
                     className='border-[#1C352D] border-4 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500 p-24'>
                    <p>card</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" 
                     className='border-[#1C352D] border-4 rounded-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 p-24'>
                    <p>card</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1100" 
                     className='border-[#1C352D] border-4 rounded-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 p-24'>
                    <p>card</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1200" 
                     className='border-[#1C352D] border-4 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500 p-24'>
                    <p>card</p>
                </div>
            </div>
        </div>
    )
}

export default Product
