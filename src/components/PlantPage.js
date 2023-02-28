import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plants => setPlantList(plants))
  }, [])

  function addNewPlant(newPlant) {
    setPlantList([...plantList, newPlant])
  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search search={search} onSearchChange={handleSearchChange}/>
      <PlantList plantList={plantList} search={search} />
    </main>
  );
}

export default PlantPage;
