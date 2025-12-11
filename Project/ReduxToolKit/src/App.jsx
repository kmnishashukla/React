import { useDispatch } from 'react-redux';
import './App.css'
import Header from "./component/Header"
import Products from './component/Product'
import { clearAllItems } from './redux/slice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartList from './component/CartList';

function App() {
const dispatch = useDispatch();
// https://www.youtube.com/watch?v=mxqJuc1W4ww    -- 1hours 42 mint
  return (
    <>
     <BrowserRouter>
      <Header />
      <h1>Redux Toolkit Tutorials</h1>
      {/* <button className='btn clear-btn' onClick={()=> dispatch(clearAllItems())}>Clear Cart</button> */}
      
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/cart' element={<CartList/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
