import React from 'react';
import { Link } from "react-router-dom";

// shop icon
import shop from "../../assets/icons/shop.svg";
// css module style
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.homeLink} to="/">Products</Link>
            <div className={styles.cart}>
                <Link to="/"><img src={shop} /></Link>
                <span>0</span>
            </div>
        </div>
    );
};

export default Navbar;