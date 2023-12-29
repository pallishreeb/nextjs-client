// components/ProductCard.tsx
import Link from "next/link";

interface ProductCardProps {
  name: string;
  imageSrc: string;
  price: string;
  brand: string;
  model: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageSrc, price, brand, model, features }) => {
  return (
    <div className=" shadow-md border  rounded-lg max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
      {/* Product Name */}
      <h2 className="text-lg font-semibold m-2">{name}</h2>

      {/* Product Details */}
      <div className="flex pl-4 pr-4 pb-4">
        {/* Product Image */}
        <div className="w-1/2 h-40">
          <img src={imageSrc} alt={name} className="rounded-lg w-full h-full object-cover" />
        </div>

        {/* Model, Brand, Features */}
        <div className="w-1/2 pl-4">
        <p className="text-gray-700 dark:text-gray-200">
           {brand}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
           {model}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            {price}
          </p>
       
          {/* Add more details as needed */}

          {/* Features */}
          <div>
            {/* <p className="text-gray-700 font-semibold">Features:</p> */}
            <ul className="list-none">
              {features.map((feature, index) => (
                <li  key={index} className="text-gray-700 dark:text-gray-200">
                  {feature} : Value
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* View Details Button */}
      <div className='flex'>
      <Link href="/products/[id]" as="/products/1" legacyBehavior >
      <button className="w-full block bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-50 hover:text-black hover:border  transition duration-300 mx-4 mb-4">
        View Details
      </button>
      </Link>
      </div>
     
    </div>
  );
};

export default ProductCard;
