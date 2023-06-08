import React from "react";
import Link from "next/link";


const Header = () => {
    return (
        <header>
        <nav>
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/card">Card</Link>
        <Link href="/orders">Orders</Link>
        </nav>
        </header>
    );
};

export default Header;