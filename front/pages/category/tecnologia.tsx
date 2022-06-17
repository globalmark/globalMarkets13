import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=tecnologia");

  return (
    <ShopLayout
      title={"Global-Market -tecnologia"}
      pageDescription={
        "Encuentra los mejores productos de Global Market para su tecnologia"
      }>
      <Typography variant="h1" component="h1">
        tecnologia
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos de tecnoligia
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
