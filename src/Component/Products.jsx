import React, { useEffect, useState } from "react";
import Elements from "./Elements";

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
        {products.map((v) => {
          return <Elements key={v.id} image={v.image} v={v}/>;
        })}
      </div>
    </>
  );
}

export default Products;
