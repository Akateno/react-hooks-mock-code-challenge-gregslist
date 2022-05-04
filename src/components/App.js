import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [items, setItems]=useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((response)=>response.json())
    .then((data)=>setItems(data))
  }, []);



function onRemoveListing(id){
  const newListing = items.filter((item)=> item.id !== id)
  setItems(newListing)
}

const displayedListing = items.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer onRemoveListing={onRemoveListing} items={displayedListing}/>
    </div>
  );
}

export default App;
