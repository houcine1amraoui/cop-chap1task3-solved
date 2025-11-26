function Item({ item, removeItem, updateItemChecking }) {
  return (
    <li>
      <div className="container">
        <input
          type="checkbox"
          value={item.completed}
          onChange={(e) => updateItemChecking(item.id, e.target.checked)}
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
