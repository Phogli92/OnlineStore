import React from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
function Elements(props) {
  const navigate = useNavigate()
  function Nagitaion(){
   return navigate(`/${props?.item?.id}`)
  }
  return (
    <>
      <div className="card" onClick={Nagitaion}>
        <div className="first-content">
        <img src={props.image} alt="" />
        </div>
        <div className="second-content">
            <h1 >Category: {props?.item?.category}👕</h1>
            <h2>Price💲:{props?.item?.price}$</h2>
            <h2>Rating⭐️:{props?.item?.rating?.rate}✨</h2>
        </div>
      </div>
    </>
  );
}
export default Elements;
