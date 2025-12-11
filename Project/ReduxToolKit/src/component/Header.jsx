import React from 'react'
import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="logo">MyShop </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    
                     
                </ul>
            </nav>
            <AddToCart />
    </header>
  )
}
