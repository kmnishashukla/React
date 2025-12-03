import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/slice';
import { fetchProducts } from '../redux/productSlice';

export default function Products() {
 const dispatch = useDispatch(); 
 useEffect(() => {
   dispatch(fetchProducts());
 }, []);
 const productSelector = useSelector((state) => state.products.items);  
 console.log('selector',productSelector);

  return (
    // <div className='product-card'>
    //   <div className='product-image'>
    //     <img src='https://www.freeiconspng.com/uploads/headphones-png-1.png' alt='Product' className='imgSrc' />
    //   </div>
    //   <div className='product-info'>
    //     <h1>Wireless Headphones</h1>
    //     <p className="price">$129.99</p>
    //     <p className="description">Experience high-quality sound with headphones.
    //         Featuring noise cancellation, long-lasting battery life, and a sleek modern design for everyday use. </p>
    //     <button onClick={()=> dispatch(addItem(1))} className="btn">Add to Cart</button>
    //      <button onClick={()=> dispatch(removeItem(1))} className="btn remove-btn">Remove from Cart</button>
    //   </div>
    // </div>
    <div className='grid'>
      {
        productSelector.length && productSelector.map((item)=>(
          <div className='card' key={item.id}>
            <img src={item.thumbnail} />
          <div className ="content">
              <div className='title'>
                {item.title}
              </div>
              <div className='title'>{item.title}</div>
              <div className='brand'>{item.brand}</div>
              <div className='price'>{item.price}</div>
              <div className='rating'>{item.rating}</div>
          </div>
        </div>
        ))
      }
    </div>
  )
}
