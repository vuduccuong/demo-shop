import ProductItem from "./product-item";

const ProductList = (props) => {
  const { products = [] } = props;
  return products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
};

export default ProductList;
