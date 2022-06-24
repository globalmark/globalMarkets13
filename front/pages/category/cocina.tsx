import type { NextPage } from 'next';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';
import Hogar from "../../components/products/ProductHogar";


const CocinaPage: NextPage = () => {

    const { products, isLoading } = useProducts("/products");
    
return (
      <>
        {
          isLoading
          ? <FullScreenLoading />
          : <Hogar filtro='cocina' category='Cocina' productos={ products.filter(i=>i.gender === 'cocina') as any } />
        }
      </>
    )
}
export default CocinaPage