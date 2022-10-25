import {
  ButtonAddCart,
  Card,
  CategoryProduct,
  DivProducts,
  ImgCard,
  PriceProduct,
  TitleProduct,
} from "./style";

export const ProductCard = ({ product, addCart }) => {
  return (
    <Card>
      <ImgCard src={product.img} alt={product.name} />
      <DivProducts>
        <TitleProduct>{product.name}</TitleProduct>
        <CategoryProduct>{product.category}</CategoryProduct>
        <PriceProduct>R$ {product.price.toFixed(2)}</PriceProduct>
        <ButtonAddCart onClick={() => addCart(product)}>
          Adicionar
        </ButtonAddCart>
      </DivProducts>
    </Card>
  );
};
