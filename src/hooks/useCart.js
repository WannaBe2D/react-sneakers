import React from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { cartItems, orderId } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);
  
  return { cartItems, totalPrice, orderId };
}
