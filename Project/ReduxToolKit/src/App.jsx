import { useDispatch } from 'react-redux';
import './App.css'
import Header from "./component/Header"
import Products from './component/Product'
import { clearAllItems } from './redux/slice';

function App() {
const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h1>Redux Toolkit Tutorials</h1>
      <button className='btn clear-btn' onClick={()=> dispatch(clearAllItems())}>Clear Cart</button>
      <Products />
    </>
  )
}

export default App
