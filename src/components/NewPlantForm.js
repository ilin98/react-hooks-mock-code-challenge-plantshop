import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(newPlant => {
    addNewPlant(newPlant)
    setNewPlant({
      name: "",
      image: "",
      price: "",
    })
    })
  }

  function handleChange(e) {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newPlant.name} placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" value={newPlant.image} placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" value={newPlant.price} placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
