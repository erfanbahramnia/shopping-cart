import React, { useState, useEffect, createContext } from 'react';

// api
import { getApi } from '../service/api';

// creating context
export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    // for saving data of products
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getApi());
        };

        fetchApi();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;