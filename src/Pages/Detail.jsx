import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.css'

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate()
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

  const goBack = ()=>navigate(-1)

  return (
    <>
    <div class="parent">
  <div class="card">
      {/* <img width={300} height={300}src={items?.image} alt={items?.title} /> */}
      <div class="content-box" style={{backgroundImage:`url(${items?.image})`, backgroundSize:'300px 250px', backgroundRepeat:'no-repeat', marginTop:0}}>
          <span class="card-title">{items?.title}</span>
          <p class="card-content">
            Category:{items?.category}👕
          </p>
          <button class="see-more">Go Back</button>
      </div>
      <div class="date-box">
          <span class="month">Price💲</span>
          <span class="date">{items?.price}$</span>
      </div>
  </div>
</div>
    </>
  );
}

export default Detail;
