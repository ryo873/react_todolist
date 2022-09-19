import React, { useState } from "react";

function App() {
  const [item, setItem] = useState({ item: [], newItem: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    setItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(item.newItem);
  }

  function handleClick(event) {
    const itemNow = item.item;
    itemNow.push(item.newItem);
    setItem(() => {
      return { ...item };
    });

    document.getElementById("text").value = "";
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="newItem" onChange={handleChange} id="text" />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {item.item.map((itemRightNow) => {
            return <li>{itemRightNow}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
