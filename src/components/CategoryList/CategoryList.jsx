import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <>
        <div className="CategoryListHeader">
            Layout
        </div>
        <ul className="CategoryList">
        {cats}
        </ul>
    </>
  );
}
