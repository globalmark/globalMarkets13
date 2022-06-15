import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const DeportePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=deporte");

  return (
    <ShopLayout
      title={"Global-Market -deporte"}
      pageDescription={
        "Encuentra los mejores productos de Global Market para el deporte "
      }>
      <Typography variant="h1" component="h1">
        deporte
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para el deporte
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default DeportePage;
