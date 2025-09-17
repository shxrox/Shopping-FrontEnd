import Product from "./Product";


const information = [
  {
    imgURL: "../src/assets/1.png",
    heading: "Elegant Botanical Collection",
    para: "A collection of vibrant green plants, featuring long, soft shadows on a clean white background.",
  },
  {
    imgURL: "../src/assets/2.png",
    heading: "Lush Green Assortment",
    para: "An artistic arrangement of Monstera, ferns, and succulents, presented against a crisp white background.",
  },
  {
    imgURL: "../src/assets/3.png",
    heading: "Overhead Botanical Display",
    para: "A top-down view of assorted plants, including ferns and succulents, placed on a pure white surface with gentle shadows.",
  },
  {
    imgURL: "../src/assets/4.png",
    heading: "Clean and Serene Greens",
    para: "A minimalist display of green leaves and succulents, thoughtfully arranged on a simple white background.",
  },
  {
    imgURL: "../src/assets/5.png",
    heading: "Vibrant Plant Cluster",
    para: "A lush cluster of ferns and succulents, arranged on a white background with striking shadows.",
  },
  {
    imgURL: "../src/assets/6.png",
    heading: "Botanical Arrangement",
    para: "Three unique green plants, beautifully arranged against a white background with soft lighting and subtle shadows.",
  },
];

const ProductDetails = () => {
  return(
    <div>
      <Product products={information} />;
    </div>
  ) 
};

export default ProductDetails;
