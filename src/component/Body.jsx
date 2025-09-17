import ProductDetails from './ProductDetails';


const Body = () => {
  return (

    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1  ">
        <div data-aos="fade-up-right" data-aos-duration="1000" className=" m-[40px] pt-[160px] font-mono">
          <h1 className=" text-[#1C352D] text-[45px] font-extrabold text-center md:text-left md:text-[50px]">PlanKart</h1>
          <p className=" text-[18px] md:text-[20px] text-[#42554f] font-semibold text-center md:text-justify ">
            Buy smarter, save bigger - only at <span className=" underline text-[#1C352D]" >PlanKart</span>.
            Great plans, great value, every time.
          </p>
        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="pt-24  hidden md:block" >
          <img className="" src="../src/assets/home.png" alt="" />
        </div>

      </div>
      <div>
        <ProductDetails />
      </div>
    </div>
  );
};

export default Body;
