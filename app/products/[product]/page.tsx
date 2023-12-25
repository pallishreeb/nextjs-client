import { useRouter } from 'next/navigation';
type Params = {
    params: { product: string };
  };
const Product = async ({ params: { product } }: Params) => {

  return (
    <div>Product {product}</div>
  )
}

export default Product