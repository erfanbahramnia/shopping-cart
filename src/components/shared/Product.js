import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// trash svg for button
import trash from "../../assets/icons/trash.svg"
// helper functions
import { nameShorter, isInCart, amountOfProduct } from '../../helper/functions';
// css module style
import styles from "./Product.module.css";
// context
import { CartContext } from '../../contexts/CartContextProvider';

const Product = ({data}) => {

    const {state, dispatch} = useContext(CartContext)

    const {image, title, price, id} = data;
    const name = nameShorter(title);
    return (
        <div className={styles.container}>
            <img className={styles.productImg} src={image} alt="product" />
            <div className={styles.productInf}>
                <p className={styles.productName}>{name}</p>
                <p className={styles.productPrice}>{price} $</p>
            </div>
            <div className={styles.productDetails}>
                <Link className={styles.detailLink} to={`/products/${id}`}>Details</Link>
                <div className={styles.buttons}>
                    {!isInCart(state, id) && <button onClick={() => dispatch({type: "add", data: data})}  className={styles.addProduct}>Add to Cart</button>}
                    {isInCart(state, id) && amountOfProduct(state, id) === 1 && <button onClick={() => dispatch({type: "remove", data: data})} className={styles.cartButton}><img width="20px" src={trash} alt='trash' /></button>}
                    {isInCart(state, id) && amountOfProduct(state, id) > 1 && <button onClick={() => dispatch({type: "decrease", data: data})}  className={styles.cartButton}>-</button>}
                    {isInCart(state, id) && <span className={styles.quantityOfProduct}>{amountOfProduct(state, id)}</span>}
                    {isInCart(state, id) && <button onClick={() => dispatch({type: "increase", data: data})}  className={styles.cartButton}>+</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;