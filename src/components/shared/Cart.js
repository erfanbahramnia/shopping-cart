import React from 'react';

// css module style
import styles from "./Cart.module.css";
// a function for make shorter the title of product
import { nameShorter } from '../../helper/functions';
// trash svg for buttons
import trash from "../../assets/icons/trash.svg";

const Cart = ({data, dispatch}) => {
    const {image, title, price, quantity} = data;
    return (
        <div className={styles.container}>
            <img alt='product-image' src={image} className={styles.productImage} />
            <div className={styles.details}>
                <h2 className={styles.name}>{nameShorter(title)}</h2>
                <p className={styles.price}>{price} $</p>
            </div>
            <span className={styles.quantity}>{quantity}</span>
            <div className={styles.buttons}>
                {quantity === 1 && <button onClick={() => dispatch({type: "remove", data: data})} className={styles.cartButton}><img width="20px" src={trash} alt='trash' /></button>}
                {quantity > 1 && <button onClick={() => dispatch({type: "decrease", data: data})} className={styles.cartButton}>-</button>}
                <button onClick={() => dispatch({type: "increase", data: data})}  className={styles.cartButton}>+</button>
            </div>
        </div>
    );
};

export default Cart;