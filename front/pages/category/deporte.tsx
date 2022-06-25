import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";
import Deporte from "../../components/products/ProductDeporte";
import FormDeportes from "../../components/products/prueba";


const DeportePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (<>
  <FormDeportes/>
  <h1>Estoy en deporte</h1>
  </>
  );
};

export default DeportePage;
