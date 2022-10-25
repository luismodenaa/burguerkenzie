import {
  Card,
  Category,
  DivNameDel,
  DivNameDelCat,
  ImgCard,
  TitleProduct,
} from "./style";
import { IoMdTrash } from "react-icons/io";

export const CartCard = ({ product, removeProduct }) => {
  return (
    <Card>
      <ImgCard src={product.img} alt={product.name} />
      <DivNameDelCat>
        <DivNameDel>
          <TitleProduct>{product.name}</TitleProduct>
          <Category>{product.category}</Category>
        </DivNameDel>
        <IoMdTrash
          className="icon-delete"
          onClick={() => removeProduct(product)}
        />
      </DivNameDelCat>
    </Card>
  );
};
