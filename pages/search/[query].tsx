import type { NextPage, GetServerSideProps } from 'next';
import { Typography,Box } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { IProduct } from '../../interfaces';
interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {

    return (
        <ShopLayout title={'Teslo-Shop - Search'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
            <Typography variant='h1' component='h1'>Buscar productos</Typography>
            {
                foundProducts 
                    ? <Typography variant='h2' sx={{ mb: 1 }} textTransform="capitalize">Tu búsqueda: { query }</Typography>
                    : (<>
                        <Box display='flex'>
                            <Typography variant='h2' sx={{ mb: 1 }}>No encontramos ningún produto</Typography>
                            <Typography variant='h2' sx={{ ml: 1 }} color="secondary" textTransform="capitalize">{ query }</Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography variant='h2' sx={{ mb: 1 }}>Productos sugeridos: </Typography>
                        </Box>
                            
                        </>)
            }
            <ProductList products={ products } />
        </ShopLayout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const { query = '' } = params as { query: string };

    if ( query.length === 0 ) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }
    let products = await fetch(`http://localhost:3000/api/search/${query}`).then(res=>res.json())    
    const foundProducts = products.length > 0;
    if(!foundProducts){
        let data = await fetch("http://localhost:3000/api/search/cybertruck").then(res=>res.json())
        return {
            props: {
                products:data,
                foundProducts,
                query
            }
        }
    }
    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
    
}
export default SearchPage;
