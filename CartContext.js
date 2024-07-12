import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [estTotal, setEstTotal] = useState(0);



  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const getItemCount = (itemId) => {
    const foundItem = cartItems.find((item) => item.id === itemId);
    return foundItem ? foundItem.count : 0;
  };

  const clearItemCount = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, count: 0 } : item
    );
    setCartItems(updatedCartItems);
  };


  useEffect(() => {
    if (cartItems.length > 0) {
      const prices = cartItems.map(obj => obj.price);
      const pQ = cartItems.map(obj => ({
        id: obj.id,
        price: obj.price,
        qunatity: getItemCount(obj.id),
        total:  getItemCount(obj.id) * obj.price 
      }))
      const total = pQ.map(ogj => ogj.total).reduce((acc, curr) => acc + curr, 0);
      setEstTotal(total);
      console.log(total, pQ);
    } else {
      setEstTotal(0);
    }
  }, [cartItems,,  getItemCount]);




  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getItemCount, clearItemCount, estTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};