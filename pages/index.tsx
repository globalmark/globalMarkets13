import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";
//import { initialData } from "../database/products";

import Image from "next/image";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Global-Market - Home"}
      pageDescription={"Encuentra los mejores productos en Global Market"}>
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  );
};
export default Home;
