// ProductDetailsPage.tsx
import React from "react";
import { Modal } from "../../_components/Modal";

interface ProductDetailsPageProps {
  // You can add any necessary props here
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = () => {
  // Sample data for product details
  const productDetails = {
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353549819/YD/GP/GA/99432398/11kw-crompton-cg-ie3-tefc-greaves-motor-500x500.jpg",
    brand: "Example Brand",
    modelNumber: "123ABC",
    features: [
      { key: "Feature 1", value: "Something value" },
      { key: "Feature 2", value: "Value 2" },
      { key: "Feature 3", value: "Value 3" },
      { key: "Feature 1", value: "Value 1" },
      { key: "Feature 2", value: "Value 2" },
      { key: "Feature 3", value: "Value 3" },
    ],
    productName: "Something product",
    productDescription: "We firmly believe that our future is bright. It is a future that will be powered by new technology, talented people, their acheivements and global growth opportunities. In an increasingly knowledge and technology based future, we see our people as our engine of growth. It is our belief that the illiterate of the future will be the people who don not re-learn, re-educate and upgrade their skill sets. We prepare for this future by empowering our staff with the knowledge and capabilities that will make them successfull practitioners of their particular functions.",
    document: "/path/to/documents/UserManual.pdf",
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row  mb-4">
        {/* Left side - Product Image */}
        <div className="md:w-1/2">
          <img src={productDetails.image} alt="Product" className="max-w-full h-auto" />
        </div>

        {/* Right side - Product Details */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4 p-4">
        <h1 className="text-2xl font-bold mb-2">{productDetails.productName}</h1>
          <h2 className="text-xl font-semibold mb-4">{productDetails.brand}</h2>
          <p className="text-gray-700 mb-2">Model Number: {productDetails.modelNumber}</p>
          <p className="text-gray-700 mb-4">{productDetails.productDescription}</p>
          {/* Download Button for Document */}
          <div className="mt-1">
          <p className="font-semibold mb-2">Download Document:</p>
          <a href={productDetails.document} className="text-blue-500 hover:underline block mb-2">
            {productDetails.productName} Document
          </a>
          <Modal/>
        </div>
          {/* List of Features */}
          {/* <ul className="lg:w-1/2 bg-gray-300">
          {productDetails.features.map((feature, index) => (
              <li key={index} className="border p-2 lg:flex lg:justify-between">
                <span className="font-semibold lg:w-1/3">{feature.key}:</span>
                <span className="lg:w-2/3">{feature.value}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* Separator Line */}
      <hr className="my-4" />

      {/* Bottom Section */}
      <div className="mt-4">
        <h4 className="text-xl semibold">Features of the Product</h4>
        <ul className="lg:w-1/3 bg-gray-300">
          {productDetails.features.map((feature, index) => (
              <li key={index} className="border p-2 lg:flex ">
                <span className="font-semibold lg:w-1/3">{feature.key}:</span>
                <span className="lg:w-2/3">{feature.value}</span>
              </li>
            ))}
          </ul> 
      </div>
    </div>
  );
};

export default ProductDetailsPage;
