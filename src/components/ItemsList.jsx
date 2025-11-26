import Item from "./Item";

function ItemsList({ groceryItems, removeItem, updateItemChecking }) {
  return (
    <ul>
      {groceryItems.length > 0 ? (
        groceryItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            updateItemChecking={updateItemChecking}
          />
        ))
      ) : (
        <p>No item</p>
      )}
    </ul>
  );
}

export default ItemsList;
