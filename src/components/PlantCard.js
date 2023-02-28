import React, { useState } from "react";

function PlantCard({id, name, image, price}) {
  const [inStock, setInStock] = useState(true)

  function handleStock(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setInStock(!inStock)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
