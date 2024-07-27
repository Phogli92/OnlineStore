import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data), setLoading(true));
  }, []);

  if (loading == false) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <img width={300} height={300} src={items?.image} alt={items?.title} />
      <h1 style={{fontSize:'28px'}}>{items?.title}</h1>
      <h2>Category: {items?.category}👕</h2>
      <h2>Price💲:{items?.price}$</h2>
      <h2>Rating⭐️:{items?.rating?.rate}✨</h2>
    </>
  );
}

export default Detail;
