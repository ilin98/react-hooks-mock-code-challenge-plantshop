import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, search}) {
  const searchedPlants = plantList.filter(plant => {
    return plant.name.includes(search)
  })

  const displayedPlants = searchedPlants.map(plant => <PlantCard key={plant.id} id={plant.id} image={plant.image} name={plant.name} price={plant.price} />)
  return (
    <ul className="cards">
      {displayedPlants}
    </ul>
  );
}

export default PlantList;
