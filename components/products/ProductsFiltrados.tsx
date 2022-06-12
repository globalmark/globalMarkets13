import { useState,FC } from 'react'
import { useProducts } from '../../hooks';
import { Typography,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,Button } from "@mui/material";
import { ShopLayout } from '../layouts';
import { ProductList } from './ProductList';
import { FullScreenLoading } from '../ui';
import { SeedProduct } from '../../database/products';



interface Props {
    filtro:string ;
}
var inicio: any[] = [];

export const ProductFilter: FC<Props> = ({ filtro }) => {
    const { products, isLoading } = useProducts(`/products?genero=${filtro}`);
    const [product, setProduct] = useState(inicio);
    const [page,setPage] = useState(0);
    const [filtros,setFiltros] = useState({cheked:false,min:false,max:false,A_Z:false,Z_A:false,XS:false,S:false,M:false,L:false,XL:false,XXL:false,XXXL:false,restablecer:false,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false});

    const next = ()=>{
        if(product.length > page + 12){
            setPage(prev=>prev+12);
        }
    }
    const prev = ()=>{
        if(0 < page){
            setPage(pre=>pre-12);
        }
    }
    const respuesta = ():SeedProduct[]=>{
        if(Array.isArray(product) && products.length > 0 && product.length < products.length)setProduct(products)
        if (filtros.restablecer){
            setProduct(products);
            setFiltros(prev=>{
                return {...prev,restablecer: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XS){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XS')));
            setFiltros(prev=>{
                return {...prev,XS: false,cheked:false,check:true,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.S){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('S')));
            setFiltros(prev=>{
                return {...prev,S: false,cheked:false,check:false,check1:true,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.M){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('M')));
            setFiltros(prev=>{
                return {...prev,M: false,cheked:false,check:false,check1:false,check2:true,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.L){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('L')));
            setFiltros(prev=>{
                return {...prev,L: false,cheked:false,check:false,check1:false,check2:false,check3:true,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XL){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XL')));
            setFiltros(prev=>{
                return {...prev,XL: false,cheked:false,check:false,check1:false,check2:false,check3:false,check4:true,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XXL){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XXL')));
            setFiltros(prev=>{
                return {...prev,XXL: false,cheked:false,check:false,check1:false,check2:false,check3:false,check4:false,check5:true,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XXXL){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XXXL')));
            setFiltros(prev=>{
                return {...prev,XXXL: false,cheked:false,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:true}
            })
            setPage(prev=>prev-prev);
        }
        if (filtros.min){
            if(products.length > product.length) setProduct(products);
                setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                    if(a.price < b.price) return -1
                }));
                setFiltros(prev=>{
                    return {...prev,min: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
                })
                setPage(prev=>prev-prev);
        }  else if (filtros.max){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                if(a.price > b.price) return -1
            }));
            setFiltros(prev=>{
                return {...prev,max: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.A_Z){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                if(a.title < b.title) return -1
            }));
            setFiltros(prev=>{
                return {...prev,A_Z: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.Z_A){
            if(products.length > product.length) setProduct(products);
            setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                if(a.title > b.title) return -1
            }));
            setFiltros(prev=>{
                return {...prev,Z_A: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}  
            })
            setPage(prev=>prev-prev);
        }  
        if(product.length === 0) return [{title: "No hay resultados",description: 'null',gender:'unisex',inStock:0,price:0,images:[],type:"pants",sizes:[],slug:'null',tags:[]}];
        return product.slice(page,page+12);
    }
    const changeFiltros = (e:any)=>setFiltros(prev=>{
            return {
            ...prev,
            [e.target.value]:true
        }
        });
    const description = filtro === 'men'? 'ellos' : filtro ==='women'? "ellas" : "los niños";
    const genre = filtro === 'men'? 'Hombres' : filtro ==='women'? "Mujeres" : "Niños";
        return (
            <ShopLayout
                title={`Global-Market - ${filtro}`}
                pageDescription={
                    `Encuentra los mejores productos de TGlobal Market para ${description}`
                }>
                <Typography variant="h1" component="h1">
                    {genre}
                </Typography>
                <Typography variant="h2" sx={{ mb: 1 }}>
                    Productos para {description}
                </Typography>
            <FormControl>
                <FormLabel id="filtros">Filtrar Por:</FormLabel>
                            <RadioGroup aria-labelledby="filtros" row={true}>
                                <FormControlLabel onClick={(e)=>changeFiltros(e)} id="min" value="min"  control={<Radio size="small" color="secondary"/>} label="Menor Precio" />
                                <FormControlLabel onClick={(e)=>changeFiltros(e)} id="max" value="max"  control={<Radio size="small" color="secondary"/>} label="Mayor Precio" />
                                <FormControlLabel onClick={(e)=>changeFiltros(e)} id="A_Z" value="A_Z"  control={<Radio size="small" color="secondary"/>} label="Orden Alfabetico(A-Z)" />
                                <FormControlLabel onClick={(e)=>changeFiltros(e)} id="Z_A" value="Z_A"  control={<Radio size="small" color="secondary"/>} label="Orden Alfabetico(Z-A)" />
                            </RadioGroup>
            </FormControl>
            <br />
            <FormControl>
                <FormLabel id="size">Filtrar Por Tallas:</FormLabel>
                <RadioGroup aria-labelledby="size" row={true}>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>}  value="restablecer" label="Restablecer" id="restablecer" onClick={(e)=>changeFiltros(e)} checked={filtros.cheked}/>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check}  value="XS" label="XS" id="XS" onClick={(e)=>changeFiltros(e)} />
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check1}  value="S" label="S" id="S" onClick={(e)=>changeFiltros(e)} />
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check2}  value="M" label="M" id="M" onClick={(e)=>changeFiltros(e)} />
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check3}  value="L" label="L" id="L" onClick={(e)=>changeFiltros(e)} />
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check4}  value="XL" label="XL" id="XL" onClick={(e)=>changeFiltros(e)} />
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check5}  value="XXL" label="XXL" id="XXL" onClick={(e)=>changeFiltros(e)} />
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check6}  value="XXXL" label="XXXL" id="XXXL" onClick={(e)=>changeFiltros(e)} />
                </RadioGroup>
            </FormControl>
            <Button variant="contained"  onClick={prev} >Prev</Button>
            <Button onClick={next} >Next</Button>
            <ProductList products={respuesta() as any} />
            {isLoading ? <FullScreenLoading /> : <ProductList products={respuesta() as any} />}
            </ShopLayout>
            );
};
export default ProductFilter;
