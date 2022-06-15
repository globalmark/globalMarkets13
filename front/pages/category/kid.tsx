import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const NiñosPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=niños");

  return (
    <ShopLayout
      title={"Global-Market -Niños"}
      pageDescription={
        "Encuentra los mejores productos de Global Market para su hogar"
      }>
      <Typography variant="h1" component="h1">
        NIÑOS
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para niños
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default NiñosPage;
