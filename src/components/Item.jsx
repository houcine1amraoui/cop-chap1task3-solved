import { useState } from "react";

function Item({ item, removeItem, updateItemChecking }) {
  const [checked, setChecked] = useState(item.completed);
  const handleCheck = (e) => {
    setChecked(e.target.checked);
    updateItemChecking(item.id, e.target.checked);
  };
  return (
    <li>
      <div className="container">
        <input
          type="checkbox"
          value={item.completed}
          checked={checked}
          onChange={handleCheck}
        />
        <p>
          {item.name} {item.quantity > 1 && <span>x{item.quantity}</span>}
        </p>
      </div>
      <div>
        <button className="remove-button" onClick={() => removeItem(item.id)}>
          X
        </button>
      </div>
    </li>
  );
}

export default Item;
