import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './ProductListingPage.css';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import KeyboardList from '../../components/KeyboardList/KeyboardList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ProductListingPage({ user, setUser }) {
  const [keyboardItems, setKeyboardItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setKeyboardItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  
  // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const newCart = await ordersAPI.getCart();
      setCart(newCart);
    }
      getCart();
  }, []);

    async function handleAddToOrder(itemId) {
      // alert(`add item: ${itemId}`)
      const updatedCart = await ordersAPI.addItemToCart(itemId);
      setCart(updatedCart);
    }

    async function handleChangeQty(itemId, newQty) {
      const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
      setCart(updatedCart)
    }

    async function handleCheckout() {
      await ordersAPI.checkout();
      navigate('/orders');
    }

  return (
    <main className="ProductListingPage">
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        {/* <Link to="/orders" className="button btn-sm">ORDER HISTORY</Link> */}
      </aside>
      <KeyboardList
        keyboardItems={keyboardItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
    </main>
  );
}