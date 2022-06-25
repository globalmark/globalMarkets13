/*import Deporte from "../../components/products/ProductDeporte";
import type { NextPage } from "next";

const BasquetPage: NextPage = ({prueba}:any) => {

    return (<>
      <Deporte filtro="basquetbol" category="Basquetbol" productos={prueba}/>
      <form action=""></form>
    </>
    );
  };

  
  export default BasquetPage;

  BasquetPage.getInitialProps = async()=>{
    let data = await fetch('https://globalmarkets.herokuapp.com/products').then(res=>res.json());
    let productos = data.filter((i:any)=>i.gender === 'basquetbol');
    return  {prueba: productos} 
}*/
import type { NextPage } from 'next';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';
import Deporte from "../../components/products/ProductDeporte";


const BasquetPage: NextPage = () => {

    const { products, isLoading } = useProducts("/products");
    
return (
      <>
        {
          isLoading
          ? <FullScreenLoading />
          : <Deporte filtro='basquetbol' category='Basquetbol' productos={ products.filter(i=>i.gender === 'basquetbol') as any } />
        }
      </>
    )
}
export default BasquetPage