import React from "react";

// constexts
import ProductContextProvider from "./contexts/ProductContextProvider";

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
        <Navbar />
        <div style={componentsStyle}>
          <Store />
        </div>
      </ProductContextProvider>
    </div>
  );
}

export default App;
