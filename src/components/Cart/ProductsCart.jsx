import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/productsCart.css";
import config from "../../utils/config";
import { useDispatch } from "react-redux";
import { getProductsCartThunk } from "../../store/slices/cart.slice";

const ProductsCart = ({ prod }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(prod.quantity);
  // const [totalPrice, setTotalPrice] = useState(parseInt(prod.product.price))

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setTotalPrice(totalPrice + parseInt(prod.product.price))
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
       //setTotalPrice(totalPrice - parseInt(prod.product.price))
    }
  };

  const handleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prod.id}`;

    axios
      .delete(url, config)
      .then((res) => {
        dispatch(getProductsCartThunk());
        console.log("The product was removed");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTotalPrice(Number(prod.product.price) * counter);
  }, [counter]);

  return (
    <div className="products__card">
      <header>
        <img src={prod.product.images[0].url} alt="" />
        <section>
          <h4>{prod.product.title}</h4>
          <div>
            <button onClick={handleMinus}>-</button>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
          </div>
        </section>
        <i onClick={handleDelete} className="bx bx-trash"></i>
      </header>
      <footer>
        <div>
          <h4>Total</h4>
          <p className="price">{totalPrice}</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsCart;
