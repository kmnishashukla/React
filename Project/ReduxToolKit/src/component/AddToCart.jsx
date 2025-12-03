import React, { use } from 'react'
import { useSelector } from 'react-redux';

export default function AddToCart() {
  const selector = useSelector((state) => state.cart.value);  
  console.log('selector',selector);
  
  return (
            <div className="cart">
                <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" />
                <span className="cart-count">{selector}</span>
            </div>
  )
}
