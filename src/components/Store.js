import React, { useContext } from 'react';

// context
import { ProductContext } from '../contexts/ProductContextProvider';

// components
import Product from './shared/Product';

const Store = () => {
    // container style
    const containerStyle = {
        "margin": "30px 0px",
        "width": "100%",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexWrap": "wrap",
    }
    // datas of ProductContext
    const productsData = useContext(ProductContext);

    return (
        <div style={containerStyle}>
            {productsData.map(product => <Product key={product.id} data={product} />)}
        </div>
    );
};

export default Store;