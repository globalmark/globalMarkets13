
import type { NextPage } from "next";
import ProductFilter from "../../components/products/ProductsFiltrados";

const MenPage: NextPage = () => {
    return <ProductFilter filtro={"men"} />
};
export default MenPage;
