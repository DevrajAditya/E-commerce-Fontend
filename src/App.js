import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = ()=>{
  
  return(
        <Router>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products/:category' element={<ProductList/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/cart' element={<Cart/>} />
            
            </Routes>
        </Router>
  
  )
}

export default App;