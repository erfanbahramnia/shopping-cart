import React, { createContext, useReducer } from 'react';


// reducer of CartContext
import { reducer } from "./cartContextReducer";
// initial state for useReducer
const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false,
};

// creating context
export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;