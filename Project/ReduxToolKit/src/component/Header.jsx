import React from 'react'
import AddToCart from './AddToCart'

export default function Header() {
  return (
    <header>
        <div className="logo">MyShop </div>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Products</a></li>
                     
                </ul>
            </nav>
            <AddToCart />
    </header>
  )
}
