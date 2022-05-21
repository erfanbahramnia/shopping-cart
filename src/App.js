import React from "react";

// constexts
import ProductContextProvider from "./contexts/ProductContextProvider";

// conponents
import Navbar from "./components/shared/Navbar";

function App() {

  const containerStyle = {
    "width": "100%",
    "minHeight": "100vh",
    "backgroundColor": "#f7f7f7",
  }

  return (
    <div style={containerStyle}>
      <ProductContextProvider>
        <Navbar />
      </ProductContextProvider>
    </div>
  );
}

export default App;
