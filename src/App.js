import React, { useState } from "react";
import "./App.css";
import ProductCard from './components/ProductCard/ProductCard';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';

export default function App() {
  let [items, setItems] = useState("");
  let [total, setTotal] = useState(0);
  let [cart, setCart] = useState("");
  let [newProduct, setNewProduct] = useState("");
  function addProductToCart(product, price) {
    let products = cart;
    products += product + ", ";
    setCart(products);
    setTotal(total + price);
    console.log(cart);
  }
  function clearCart() {
    setTotal(0);
    setCart("");
  }

  function  addItems(event) {
    event.preventDefault();
    setItems(newProduct);
  }
  return (
    <div>
       <AddNewProduct
       setNewProduct={setNewProduct}
       addItems={addItems}
       value={newProduct}
       />
      <h1>Total = {total}</h1>
      <h2>Cart : {cart}</h2>
      <button onClick={() => clearCart()}>Remove all Items </button>
      {items}
      <ProductCard
        id="1"
        name="Pizza"
        price="$1.50"
        image="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"
        description="Dough baked with tomato sauce , cheese,  and pepperoni."
      />
      <button onClick={() => addProductToCart("Pizza", 1.5)}>
        Add to Cart
      </button>

      <ProductCard
        id="2"
        name="Coffee"
        price="$2.50"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXX9ZFy_phkiDpZDzg7md0eXIfUHwmqkAKg&usqp=CAU"
        description=""
      />
      <button onClick={() => addProductToCart("Coffee", 1.0)}>
        Add to Cart
      </button>
      <ProductCard
        id="3"
        name="Pasta"
        price="$5.00"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZCciLeOCaMZvZB6n1qcIwRgUlKPzth2Pig&usqp=CAU"
      />
      <button onClick={() => addProductToCart("Pasta", 3.0)}>
        Add to Cart
      </button>

      <p>Start editing to see some magic happen :) </p>
    </div>
  );
}

