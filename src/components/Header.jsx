import { useState } from "react";
import groceryCartImg from "../assets/grocery-cart.png";

function Header({ addItem, isCompleted }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterClick = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <h4 className="success" hidden={!isCompleted}>
        You&apos;re Done
      </h4>
      <div className="header">
        <h1>Shopping List</h1>
        <img src={groceryCartImg} alt="" />
        <input
          type="text"
          value={inputValue}
          placeholder="Add an Item"
          className="item-input"
          onChange={handleInputValueChange}
          onKeyDown={handleEnterClick}
        />
      </div>
    </div>
  );
}

export default Header;
