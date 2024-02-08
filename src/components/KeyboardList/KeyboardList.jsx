import './KeyboardList.css';
import KeyboardListItem from '../KeyboardListItem/KeyboardListItem';

export default function KeyboardList({ keyboardItems, handleAddToOrder }) {
  const items = keyboardItems.map(item =>
    <KeyboardListItem
      key={item._id}
      keyboardItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}