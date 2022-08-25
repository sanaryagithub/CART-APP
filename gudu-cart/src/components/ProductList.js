
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>Sorry no products in Gudu's Bazar</h1>
  );
}