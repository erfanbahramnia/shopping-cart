import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// shop icon
import shop from "../../assets/icons/shop.svg";
// css module style
import styles from "./Navbar.module.css";
// context
import { CartContext } from '../../contexts/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <Link className={styles.homeLink} to="/">Products</Link>
            <div className={styles.cart}>
                <Link to="/shoppingcart"><img src={shop} /></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;