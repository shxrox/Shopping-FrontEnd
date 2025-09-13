import React from "react";

const information = [
    {
        imgURL: "../src/assets/home.png ",
        heading: "Hello 1",
        para: "Para 1",
    },
    {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 2",
        para: "Para 2",
    },
    {
        imgURL: "../src/assets/home.png  ",
        heading: "Hello 3",
        para: "Para 3",
    },
    {
        imgURL: "../src/assets/home.png  ",
        heading: "Hello 4",
        para: "Para 4",
    },
    {
        imgURL: "../src/assets/home.png  ",
        heading: "Hello 5",
        para: "Para 5",
    },
    {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    },
    {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    }, {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    }, {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    }, {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    }, {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    }, {
        imgURL: " ../src/assets/home.png ",
        heading: "Hello 6",
        para: "Para 6",
    },
];

const Product = () => {
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

            <div className="mt-24 grid sm:grid-cols-1 md:grid-cols-4 text-center mx-[10px] px-[30px] gap-6">
                {information.map((info, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="border-[#1C352D] border-4 transition-transform duration-500 p-6"
                    >
                        <img src={info.imgURL} alt={info.heading} className="mx-auto mb-4" />
                        <h1 className="text-xl font-bold mb-2">{info.heading}</h1>
                        <p>{info.para}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
