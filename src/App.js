import './App.css';
import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import AllProduct from './component/AllProduct';
import { Route, Routes } from 'react-router-dom';
import ShoweProduct from './component/Showe-Product';
import CartProduct from "./component/Cart";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route
            path="/product"
            element={
              <>
                <NavBar />
                <AllProduct />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Carousel />
                <AllProduct />
              </>
            }
          />
          <Route
            path="products/:prodectId"
            element={
              <>
                <NavBar />
                <ShoweProduct />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <NavBar />
                <CartProduct />
              </>
            }
          />
          <Route
            path="/cart/:addId"
            element={
              <>
                <NavBar />
                <CartProduct />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
