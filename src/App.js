import React from "react";

// constexts
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

// conponents
import Navbar from "./components/shared/Navbar";
import Store from "./components/Store";

function App() {

  const containerStyle = {
    "width": "100%",
    "minHeight": "100vh",
    "backgroundColor": "#f7f7f7",
  }
  const componentsStyle = {
    "width": "100%",
    "display": "flex",
    "spaceBetween": "center",
    "alignItems": "center",
  }

  return (
    <div style={containerStyle}>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          
          <div style={componentsStyle}>
            <Store />
          </div>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
