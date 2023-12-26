// components/ProductListComponent.tsx
import Link from "next/link";
import Image from 'next/image'
interface ProductListComponentProps {
  // Add any additional props if needed
}

const ServiceListComponent: React.FC<ProductListComponentProps> = () => {
  // Sample data for products
  const products = [
    { id: 1, name: "Product 1", price: "$20" },
    { id: 2, name: "Product 2", price: "$30" },
    { id: 3, name: "Product 3", price: "$25" },
    { id: 4, name: "Product 4", price: "$15" },
    { id: 5, name: "Product 5", price: "$40" },
    // Add more products as needed
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
       <div className="max-w-2xl mx-auto" key={product.id}>
    
       <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
       <Link href="/services/[id]" as="/services/1" legacyBehavior >
           <a href="#">
            
               <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="product thumbnail" />
           </a>
           </Link>
           <div className="p-5">
           <Link href="/services/[id]" as="/services/1" legacyBehavior >
               <a href="#">
                   <h5 className=" text-gray-900 font-bold text-l tracking-tight mb-2 dark:text-white">{product.name}</h5>
               </a>
               </Link>
               <p className=" text-sm font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021...</p>
               <Link href="/services/[id]" as="/services/1" legacyBehavior >
               <a href="#" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   Read more
                   <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               </a>
               </Link>
           </div>
       </div>
   </div>
      ))}
    </div>
  );
};

export default ServiceListComponent;
