import React, { useState } from "react";
function Items() {
  const [items, setItems] = useState([]);
  const array = [
    {
      coffee: "Americano",
      size: "small",
      price: 50,
      description: "medium coffee",
      category: "drinks",
    },
    {
      coffee: "Espressoododod",
      size: "large",
      price: 20,
      description: "large coffee",
      category: "starters",
    },
    {
      coffee: "Espresso",
      size: "large",
      price: 20,
      description: "large coffee",
      category: "drinks",
    },
    {
      coffee: "Espressoooo",
      size: "large",
      price: 20,
      description: "large coffee",
      category: "starters",
    },
    {
      coffee: "Espresso",
      size: "small",
      price: 20,
      description: "large coffee",
      category: "drinks",
    },
  ];

  return (
    <div>
      <h1>Drinks</h1>
      {array
        .filter((array) => {
          return array.size === "large";
        })
        .map((arr) => (
          <>
            <div className="foodItem">
              {" "}
              <p> Name: {arr.coffee}</p> <p>Size {arr.size}</p>{" "}
              <p> Price {arr.price}</p> <p>{arr.description}</p>
              <hr></hr>
            </div>
          </>
        ))}

      <h1>Starters</h1>
      {array
        .filter((array) => {
          return array.size === "small";
        })
        .map((arr) => (
          <>
            <div className="foodItem">
              {" "}
              <p> Name: {arr.coffee}</p> <p>Size {arr.size}</p>{" "}
              <p> Price {arr.price}</p> <p>{arr.description}</p>
              <hr></hr>
            </div>
          </>
        ))}
    </div>
  );
}
export default Items;
