import type { NextPage } from "next";
import { Pagination, Stack, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks";
import { FullScreenLoading } from "../components/ui";
import { useState } from "react";

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products");
  const [page,setPage ]= useState(1);
  const next = ()=>{
        if(products.length > page + 11){
            setPage(prev=>prev+11);
        }
    }
    const prev = ()=>{
        if(0 < page){
            setPage(pre=>pre-11);
        }
    }
  
  return (
    <ShopLayout
      title={"Teslo-Shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}>
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ProductList products={products as any} />
      )}
    </ShopLayout>
  );
};
export default HomePage;
