import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const addItem = (inputValue) => {
    const updatedGroceryItems = [...groceryItems];
    const newItem = {
      id: updatedGroceryItems.length,
      name: inputValue,
      quantity: 1,
      completed: false,
    };
    updatedGroceryItems.push(newItem);
    setGroceryItems(updatedGroceryItems);
  };

  const updateItemChecking = (id, value) => {
    const updatedItems = groceryItems.map((item) =>
      item.id === id ? { ...item, completed: value } : item
    );
    setGroceryItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedIterms = groceryItems.filter((item) => item.id != id);
    setGroceryItems(updatedIterms);
  };

  useEffect(() => {
    console.log("use effect");
    if (groceryItems.length == 0) {
      setIsCompleted(false);
      return;
    }
    const allCompleted = groceryItems.every((item) => item.completed === true);
    setIsCompleted(allCompleted);
  }, [groceryItems]);

  return (
    <main className="App">
      <div>
        <Header addItem={addItem} isCompleted={isCompleted} />
        <ItemsList
          groceryItems={groceryItems}
          removeItem={removeItem}
          updateItemChecking={updateItemChecking}
        />
      </div>
    </main>
  );
}

export default App;
