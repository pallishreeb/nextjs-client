
import { useRouter } from 'next/navigation';
import DynamicForm from '../../_components/DynamicFormProps';
type Params = {
    params: { product: string };
  };

const page = ({ params: { product } }: Params) => {
  const decodedString = decodeURIComponent(product.replace(/\+/g, ' '));
  return (
    <>
    <DynamicForm formType={decodedString}/>
    </>
  )
}

export default page