import './App.css';
import React, { useState } from "react";
import { useEffect } from "react";

 const list = [
  "Ann",
  "Alice",
  "Harry",
  "Lina",
  "Katy",
  "Lily"
]

function Filter(props) {

  const [filterList, setFilterList] = useState([]);

   useEffect(() => {
   setFilterList(props.items);
}, [props.items]);

  const Search = (event) => {

    if (event.target.value === "") {
      setFilterList(props.items);
      return;
    }

    const foundValues = props.items.filter(
      (item) => 
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 
    );

    setFilterList(foundValues);
  };
    
  return (
    <>
     <div>
       Search: <input name="query" type="text" onChange={Search} />
     </div>
     {
       filterList.map((item) => (
         <div className="item">{item}</div>
       ))
     }   
    </>
  );
}



function App() {
  return (
    <div className="App">
      <div className="App">
        <Filter items={list} />
      </div>
    </div>
  );
}

export default App;


 
