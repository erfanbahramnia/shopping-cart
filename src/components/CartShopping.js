import React, { useContext } from 'react';

// cart context
import { CartContext } from '../contexts/CartContextProvider';
// components
import Cart from './shared/Cart';
// css module style
import styles from "./CartShopping.module.css";

const CartShopping = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.carts}>
                {state.selectedItems.map(product => <Cart key={product.id} data={product} dispatch={dispatch} />)}
            </div>
            <div className={styles.ckeckout}>
                <p className={styles.totalItems}><span>Total Items: </span>{state.itemCounter}</p>
                <p className={styles.totalPayments}><span>Total Payments: </span>{state.total.toFixed(2)} $</p>
                <div className={styles.buttons}>
                    <button className={styles.clearButton} onClick={() => dispatch({type: "clear"})}>Clear</button>
                    <button className={styles.checkoutButton} onClick={() => dispatch({type: "checkout"})}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartShopping;