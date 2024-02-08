import './KeyboardListItem.css';

export default function KeyboardListItem({ keyboardItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="name">{keyboardItem.name}</div>
      <div className="buy">
        <span>${keyboardItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(keyboardItem._id)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}