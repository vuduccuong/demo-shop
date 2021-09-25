import { getAll } from "../../../fakeData";
import ProductList from "../../../components/products/product-list";

const HomePage = ()=>{
    const products = getAll();

    return (
        <ProductList products={products} />
    );
};

export default HomePage;