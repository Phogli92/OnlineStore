import React, { useEffect, useState } from "react";
import Elements from "../Component/Elements";

function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    async function getUser() {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProducts(data);
    }
    getUser();
  }, []);
  return (
    <>
      <div className="ele">
        {products.map((item) => {
          return <Elements key={item.id} image={item.image} item={item}/>;
        })}
      </div>
    </>
  );
}

export default Products;
