import React from 'react';
import { Link } from "react-router-dom";

// helper functions
import { nameShorter } from '../../helper/functions';

// css module style
import styles from "./Product.module.css";

const Product = ({data}) => {
    const {image, title, price, id} = data;
    const name = nameShorter(title);
    return (
        <div className={styles.container}>
            <img className={styles.productImg} src={image} />
            <div className={styles.productInf}>
                <p className={styles.productName}>{name}</p>
                <p className={styles.productPrice}>{price} $</p>
            </div>
            <div className={styles.productDetails}>
                <Link className={styles.detailLink} to={`/products/${id}`}>Details</Link>
                <button className={styles.addProduct}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;