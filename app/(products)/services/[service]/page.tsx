// ProductDetailsPage.tsx
import React from "react";
import { Modal } from "../../_components/Modal";

interface ServiceDetailsPage {
  // You can add any necessary props here
}

const ServiceDetailsPage: React.FC<ServiceDetailsPage> = () => {
  // Sample data for product details
  const serviceDetails = {
    image: "https://www.cgglobal.com/admin/uploads/product_images/p3.png",
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
    productDescription:
      "We firmly believe that our future is bright. It is a future that will be powered by new technology, talented people, their acheivements and global growth opportunities. In an increasingly knowledge and technology based future, we see our people as our engine of growth. It is our belief that the illiterate of the future will be the people who don not re-learn, re-educate and upgrade their skill sets. We prepare for this future by empowering our staff with the knowledge and capabilities that will make them successfull practitioners of their particular functions.",
    document: "/path/to/documents/UserManual.pdf",
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row  mb-4">
        {/* Left side - Product Image */}
        <div className="lg:w-1/2 md:w-1/2">
          <img
            src={serviceDetails.image}
            alt="Product"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right side - Product Details */}
        <div className="lg:w-1/2 md:w-1/2 mt-4 md:mt-0 md:ml-4  p-4">
          <h1 className="text-2xl font-bold mb-2">
            {serviceDetails.productName}
          </h1>
          <h2 className="text-xl font-semibold mb-4">{serviceDetails.brand}</h2>
          <p className="text-gray-700 mb-2">
            Model Number: {serviceDetails.modelNumber}
          </p>

          <p className="text-gray-700 mb-4">
            {serviceDetails.productDescription}
          </p>

          {/* Download Button for Document */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Download Document:</p>
            <a
              href={serviceDetails.document}
              className="text-blue-500 hover:underline block mb-2"
            >
              {serviceDetails.productName} Document
            </a>

            <Modal />
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="my-4" />

      {/* Bottom Section */}
      <div className="mt-4">
        <h4 className="text-xl semibold">Features of the Product</h4>
        <ul className="lg:w-1/3 bg-gray-300">
          {serviceDetails.features.map((feature, index) => (
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

export default ServiceDetailsPage;
