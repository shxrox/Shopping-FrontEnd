import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Product = ({ products }) => {
  return (
    <div>
      <div>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-32 text-center text-[#1C352D] text-[45px] font-extrabold font-mono md:text-[50px]"
        >
          Our Products
        </h2>
      </div>

      <div className="mt-24 grid sm:grid-cols-2 md:grid-cols-3 text-center mx-[10px] px-[30px] gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="900"
            className="border-[#1C352D] rounded-3xl border-4 transition-transform duration-500 p-6"
          >
            <img
              src={product.imgURL}
              alt={product.heading}
              className="mx-auto mb-4 rounded-3xl border-2 border-[#088623]"
            />
            <h3 className="text-xl font-bold mb-2">{product.heading}</h3>
            <p className=" mb-11 ">{product.para}</p>
            <a href="/" className="mt-10 border-2 px-14 py-3 rounded-3xl border-[#1C352D] text-[17px] font-bold text-[#1C352D] hover:bg-[#1C352D] hover:text-white">
              View
            </a>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
