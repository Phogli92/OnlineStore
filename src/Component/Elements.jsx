import React from "react";
import "../App.css";
function Elements(props) {
  return (
    <>
      <div className="card">
        <div className="first-content">
        <img src={props.image} alt="" />
        </div>
        <div className="second-content">
            <h1 >category: {props.v.category}👕</h1>
            <h2>Price💲:{props.v.price}</h2>
            <h2>Rating⭐️:{props.v.rating.rate}✨</h2>
    {console.log(props.v)}
        </div>
      </div>
    </>
  );
}
export default Elements;
