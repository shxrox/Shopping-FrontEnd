

const information = [
    {
        imgURL: "../src/assets/1.png ",
        heading: "Elegant Botanical Collection",
        para: "A collection of vibrant green plants with long, subtle shadows on a clean, white background.",
    },
    {
        imgURL: " ../src/assets/2.png ",
        heading: "Lush Green Assortment",
        para: "An artful arrangement of various plants, including Monstera, ferns, and succulents, against a stark white background.",
    },
    {
        imgURL: "../src/assets/3.png  ",
        heading: "Overhead Botanical Display",
        para: "A top-down view of different plants, including ferns and succulents, on a pure white surface with soft shadows.",
    },
    {
        imgURL: "../src/assets/4.png  ",
        heading: "Clean and Serene Greens",
        para: "A minimalist display of various green leaves and succulents, artfully arranged on a simple white background.",
    },
    {
        imgURL: "../src/assets/5.png  ",
        heading: "Vibrant Plant Cluster",
        para: "A dense, lush cluster of different plants, including ferns and succulents, on a white background with interesting shadows.",
    },
    {
        imgURL: " ../src/assets/6.png ",
        heading: "Botanical Arrangement",
        para: "Three uniquely shaped green plants are arranged against a clean white background. Soft light creates subtle shadows, highlighting their beauty in a simple, calming scene.",
    }
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

            <div className="mt-24 grid  sm:grid-cols-2 md:grid-cols-3 text-center mx-[10px] px-[30px] gap-6">
                {information.map((info, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="border-[#1C352D] rounded-3xl border-4 transition-transform duration-500 p-6"
                    >
                        <img src={info.imgURL} alt={info.heading} className="mx-auto mb-4 rounded-3xl border-2 border-[#088623]" />
                        <h1 className="text-xl font-bold mb-2">{info.heading}</h1>
                        <p>{info.para}</p>
                        <button className="mt-7 border-2 px-14 py-3 rounded-3xl border-[#1C352D] text-[17px] font-bold text-[#1C352D] hover:bg-[#1C352D] hover:text-white ">View</button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
