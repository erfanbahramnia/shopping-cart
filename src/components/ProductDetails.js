import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom"

// context
import { ProductContext } from "../contexts/ProductContextProvider";
// css module style
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
    const params = useParams();
    console.log(params)

    // all products
    const products = useContext(ProductContext);
    console.log(products)
    // selected product
    const product = products[params.id - 1];

    return (
        <div className={styles.container}>
            <img alt='product-image' src={product.image} className={styles.image} />
            <div className={styles.details}>
                <h1 className={styles.name}>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}><span>Category: </span>{product.category}</p>
                <div className={styles.priceLink}>
                    <span className={styles.price}>{product.price} $</span>
                    <Link className={styles.link} to="/">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;