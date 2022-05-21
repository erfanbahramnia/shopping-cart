import React from "react";

// constexts
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {

  const containerStyle = {
    "width": "100%",
    "minHeight": "100vh",
    "backgroundColor": "#f7f7f7",
  }

  return (
    <div style={containerStyle}>
      <ProductContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
