import { ProductCard } from "../productCard/index.jsx";
import { List } from "./style.js";

export const ProductList = ({ products, addCart }) => {
  return (
    <List>
      <ul className="ul-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addCart={addCart} />
        ))}
      </ul>
    </List>
  );
};
