import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";

export default function CartList() {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log('cart',cartSelector);
    const [cartItems, setCartItems] = React.useState(cartSelector);
    const dispatch = useDispatch(); 
    const manageQuantity = (id,quantity) => {
     console.log('id',id,'quantity',quantity);
     let qty = parseInt(quantity) > 1 ? parseInt(quantity) : 1;
     const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
            return { ...item, quantity: qty, price: item.price * qty };
        }
        return item;
     });
     setCartItems(updatedCartItems);
    }
    const navigate = useNavigate();
    const handlePlaceOrder = () => {
        // Logic to place the order
        localStorage.clear();
        dispatch(clearAllItems());
        alert("Order placed successfully!");
        setCartItems([]);
        navigate("/");
        console.log("Order placed:", cartItems);
      };
    useEffect(() => {
        setCartItems(cartSelector);
    }, [cartSelector]);
    
  return (
    <div className="cart-container">
       <div className="cart-header">
        <h2>Your Cart Items</h2>
        <span>{cartItems.length}items</span>
       </div>
       {cartItems.length > 0 ?cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            < img src={item.thumbnail} />
            <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.brand}</p>

            </div>
          </div>
          <div className="item-actions">
            <div className="quantity-control" style={{display:'flex'}}>
                <input onChange={()=> manageQuantity(item.id,event.target.value)} value={item.quantity?item.quantity:1} style={{margin:'15px'}} type="number"placeholder="enter quantity"/>
                <div className="btn decrease-btn"><span className="price">${(item.quantity?item.price*item.quantity:item.price).toFixed(2)}</span>
                <button onClick={()=> dispatch(removeItem(item))} className="btn remove-btn">Remove</button></div>
            </div>
            
          </div>
        </div>
       )) : <h3>Your cart is empty</h3>}
       <div className="cart-footer">
        Total : ${(cartItems.reduce((total, item) => item.quantity? total + item.price*item.quantity:total + item.price, 0)).toFixed(2)}
       </div>
       <button onClick={handlePlaceOrder} className="btn checkout-btn">Proceed to Checkout</button>
    </div>
  );
}