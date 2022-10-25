import { CartCard } from "../cartCard";
import {
  ButtonRemoveAll,
  CartDiv,
  CartEmpty,
  CartEmptyAdd,
  CartProductsDiv,
  CartTitle,
  CartTotalValue,
  DivTotalValue,
  TotalH3,
  Value,
} from "./style";

export const Cart = ({ products, removeProduct, removeAllProducts }) => {
  const totalValue = products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <CartDiv>
      <CartTitle>Carrinho de compras</CartTitle>
      <CartProductsDiv>
        {products.length ? (
          <>
            <ul className="ul-list-cart">
              {products.map((product, index) => (
                <CartCard
                  key={index}
                  product={product}
                  removeProduct={removeProduct}
                />
              ))}
            </ul>
            <CartTotalValue>
              <DivTotalValue>
                <TotalH3>Total</TotalH3>
                <Value>R$ {totalValue.toFixed(2)}</Value>
              </DivTotalValue>
              <ButtonRemoveAll onClick={removeAllProducts}>
                Remover Todos
              </ButtonRemoveAll>
            </CartTotalValue>
          </>
        ) : (
          <>
            <CartEmpty>Sua sacola está vazia</CartEmpty>
            <CartEmptyAdd>Adicione itens</CartEmptyAdd>
          </>
        )}
      </CartProductsDiv>
    </CartDiv>
  );
};
