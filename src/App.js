import React from "react";
import { Routes, Route} from "react-router-dom";

// constexts
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

// conponents
import Navbar from "./components/shared/Navbar";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import CartShopping from "./components/CartShopping";

function App() {

  const containerStyle = {
    "width": "100%",
    "minHeight": "100vh",
    "backgroundColor": "#f7f7f7",
  }
  const componentsStyle = {
    "width": "100%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
  }

  return (
    <div style={containerStyle}>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          
          <div style={componentsStyle}>
            <Routes>
              <Route path="/" element={<Store />}/>
              <Route path="/shoppingcart" element={<CartShopping />} />
              <Route path="/products/:id" element={<ProductDetails />}/>
            </Routes>
          </div>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
