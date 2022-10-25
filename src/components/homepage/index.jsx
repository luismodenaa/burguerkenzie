import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Cart } from "../cart";
import { Header } from "../header";
import { Loading } from "../loading";
import { ProductList } from "../productList";
import { DivContainer } from "./style";
import { toast } from "react-toastify";

export const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally((onFinally) => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    const localStorageList = localStorage.getItem("@itens-cart");
    if (localStorageList) {
      setCart(JSON.parse(localStorageList));
    }
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("@itens-cart", JSON.stringify(cart));
    }
  }, [cart]);

  const productFilter = products.filter((product) =>
    filter == ""
      ? true
      : product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addCart = (productData) => {
    if (
      !cart.find(
        (product) =>
          product.name.toLowerCase() === productData.name.toLowerCase()
      )
    ) {
      setCart([...cart, productData]);
      toast.success("Item adicionado");
    } else {
      toast.error("Item já adicionado");
    }
  };

  const removeProduct = (productClick) => {
    const newProductList = cart.filter((product) => product !== productClick);
    setCart(newProductList);

    if (cart.length === 1) {
      localStorage.removeItem("@itens-cart");
    }
    toast.success("Item removido com sucesso");
  };

  const removeAllProducts = () => {
    setCart([]);
    localStorage.removeItem("@itens-cart");
    toast.success("Removido todos os itens");
  };

  return (
    <div>
      <Header setFilter={setFilter} />
      {loading ? (
        <Loading />
      ) : (
        <DivContainer>
          <ProductList products={productFilter} addCart={addCart} />
          <Cart
            products={cart}
            removeProduct={removeProduct}
            removeAllProducts={removeAllProducts}
          />
        </DivContainer>
      )}
    </div>
  );
};
