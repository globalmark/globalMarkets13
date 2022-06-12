import type { NextPage } from "next";
import { ProductFilter } from "../../components/products";

const KidPage: NextPage = () => {
    return <ProductFilter filtro={"kid"} /> 
};

export default KidPage;

