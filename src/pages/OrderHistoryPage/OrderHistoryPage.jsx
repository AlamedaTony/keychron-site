import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardList from '../../components/KeyboardList/KeyboardList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {

// useEffect(() => {
//     async function getOrders() {
//       try {
//         const orders = await ordersAPI.getOrders();
//         console.log('API ORDERS', orders);
//         setOrders(orders);
//       } catch (error) {
//         console.error('Error, fetching orders:', error);
//       }
//     }
    
//     getOrders();
    
//   }, []);

}