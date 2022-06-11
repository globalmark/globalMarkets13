/*
import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { useEffect,useState} from 'react'

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");

  return (
    <ShopLayout
      title={"Global-Market - Men"}
      pageDescription={
        "Encuentra los mejores productos de Global Market para ellos"
      }>
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para ellos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
*/
import type { NextPage } from "next";
import { Typography,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,Button } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";
import { initialData,SeedProduct } from "../../database/products";
import { useEffect,useState} from 'react'

var inicio:any[] = [];

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");
  const [product, setProduct] = useState(inicio);
    const [page,setPage] = useState(0);
    const [respaldo,setRespaldo] = useState(inicio);
    const [filtros,setFiltros] = useState({cheked:false,min:false,max:false,A_Z:false,Z_A:false,XS:false,S:false,M:false,L:false,XL:false,XXL:false,XXXL:false,restablecer:false,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false});
    useEffect(()=>{
        setProduct(initialData.products.filter(i=>i.gender === 'men'));
        setRespaldo(initialData.products.filter(i=>i.gender === 'men'))
    },[]);
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
        if (filtros.restablecer){
            setProduct(respaldo);
            setFiltros(prev=>{
                return {...prev,restablecer: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XS){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XS')));
            setFiltros(prev=>{
                return {...prev,XS: false,cheked:false,check:true,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.S){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('S')));
            setFiltros(prev=>{
                return {...prev,S: false,cheked:false,check:false,check1:true,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.M){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('M')));
            setFiltros(prev=>{
                return {...prev,M: false,cheked:false,check:false,check1:false,check2:true,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.L){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('L')));
            setFiltros(prev=>{
                return {...prev,L: false,cheked:false,check:false,check1:false,check2:false,check3:true,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XL){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XL')));
            setFiltros(prev=>{
                return {...prev,XL: false,cheked:false,check:false,check1:false,check2:false,check3:false,check4:true,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XXL){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XXL')));
            setFiltros(prev=>{
                return {...prev,XXL: false,cheked:false,check:false,check1:false,check2:false,check3:false,check4:false,check5:true,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.XXXL){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.filter((i:SeedProduct)=>i.sizes.includes('XXXL')));
            setFiltros(prev=>{
                return {...prev,XXXL: false,cheked:false,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:true}
            })
            setPage(prev=>prev-prev);
        }
        if (filtros.min){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
                setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                    if(a.price < b.price) return -1
                }));
                setFiltros(prev=>{
                    return {...prev,min: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
                })
                setPage(prev=>prev-prev);
        }  else if (filtros.max){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                if(a.price > b.price) return -1
            }));
            setFiltros(prev=>{
                return {...prev,max: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.A_Z){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
            setProduct((prev:any)=>prev.sort((a:SeedProduct,b:SeedProduct)=>{
                if(a.title < b.title) return -1
            }));
            setFiltros(prev=>{
                return {...prev,A_Z: false,cheked:true,check:false,check1:false,check2:false,check3:false,check4:false,check5:false,check6:false}
            })
            setPage(prev=>prev-prev);
        }  else if (filtros.Z_A){
            if(!!respaldo && product.length < respaldo.length) setProduct(respaldo);
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
    const filtro = (e:any)=>setFiltros(prev=>{
            return {
            ...prev,
            [e.target.value]:true
        }
        })
 
  return (
    <ShopLayout
      title={"Global-Market - Women"}
      pageDescription={
        "Encuentra los mejores productos de TGlobal Market para ellas"
      }>
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para ellas
      </Typography>
      <FormControl>
        <FormLabel id="filtros">Filtrar Por:</FormLabel>
                    <RadioGroup aria-labelledby="filtros" row={true}>
                        <FormControlLabel onClick={(e)=>filtro(e)} id="min" value="min"  control={<Radio size="small" color="secondary"/>} label="Menor Precio" />
                        <FormControlLabel onClick={(e)=>filtro(e)} id="max" value="max"  control={<Radio size="small" color="secondary"/>} label="Mayor Precio" />
                        <FormControlLabel onClick={(e)=>filtro(e)} id="A_Z" value="A_Z"  control={<Radio size="small" color="secondary"/>} label="Orden Alfabetico(A-Z)" />
                        <FormControlLabel onClick={(e)=>filtro(e)} id="Z_A" value="Z_A"  control={<Radio size="small" color="secondary"/>} label="Orden Alfabetico(Z-A)" />

                    </RadioGroup>
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel id="size">Filtrar Por Tallas:</FormLabel>
                    <RadioGroup aria-labelledby="size" row={true}>
                        <FormControlLabel control={<Radio size="small" color="secondary"/>}  value="restablecer" label="Restablecer" id="restablecer" onClick={(e)=>filtro(e)} checked={filtros.cheked}/>
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check}  value="XS" label="XS" id="XS" onClick={(e)=>filtro(e)} />
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check1}  value="S" label="S" id="S" onClick={(e)=>filtro(e)} />
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check2}  value="M" label="M" id="M" onClick={(e)=>filtro(e)} />
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check3}  value="L" label="L" id="L" onClick={(e)=>filtro(e)} />
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check4}  value="XL" label="XL" id="XL" onClick={(e)=>filtro(e)} />
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check5}  value="XXL" label="XXL" id="XXL" onClick={(e)=>filtro(e)} />
                        <FormControlLabel control={<Radio size="small" color="secondary"/>} checked={filtros.check6}  value="XXXL" label="XXXL" id="XXXL" onClick={(e)=>filtro(e)} />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained"  onClick={prev} >Prev</Button>
                <Button onClick={next} >Next</Button>
                <ProductList products={respuesta() as any} />
      {isLoading ? <FullScreenLoading /> : <ProductList products={respuesta() as any} />}
    </ShopLayout>
  );
};

export default MenPage;
