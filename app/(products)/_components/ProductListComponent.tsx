// components/ProductListComponent.tsx
import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard'; // Import the ProductCard component

interface ProductListComponentProps {
  // Add any additional props if needed
}

const ProductListComponent: React.FC<ProductListComponentProps> = () => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Product 1', price: '$20', imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353550739/DH/IA/PN/99432398/crompton-cg-maestro-series-single-phase-motor-500x500.jpg' },
    { id: 2, name: 'Product 2', price: '$30', imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353549819/YD/GP/GA/99432398/11kw-crompton-cg-ie3-tefc-greaves-motor-500x500.jpg' },
    { id: 3, name: 'Product 3', price: '$25', imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353548695/LA/ZM/QD/99432398/cg-kibosh-series-cast-iron-tefc-squirrel-cage-dc-brake-motors-500x500.jpg' },
    { id: 4, name: 'Product 4', price: '$15', imageSrc: 'https://www.cgglobal.com/admin/uploads/VSX1.png' },
    { id: 5, name: 'Product 5', price: '$15', imageSrc: 'https://www.cgglobal.com/admin/uploads/intense1.png' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-2">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            name={product.name}
            imageSrc={product.imageSrc}
            price={product.price}
            brand="Sample Brand" // Add your actual brand and model data
            model="Sample Model"
            features={['Feature 1', 'Feature 2', 'Feature 3']} // Add your actual features
          />
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
