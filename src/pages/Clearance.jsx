
import React, { useEffect } from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiLogIn } from 'react-icons/fi';


export default function Clearance() {
  useEffect(() => {
    const cssFiles = ["clearance.css"];
    const links = cssFiles.map(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/' + file;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return (
    <>
      

 <div className="navbar">
<nav className="nav-wrapper">
  <div className="logo">
    <img src="/brand.logo.png" alt="Logo" />
  </div>

  <div className="hamburger">
    <i className="fa-solid fa-bars"></i>
  </div>

  <ul className="nav-links">
      <p className="xmark" style={{"display":"none"}}>
    <i className="fa-solid fa-xmark"></i>
      </p>
    <li className="dropdown">
      <a href="#">Home</a>
      <ul className="dropdown-menu">
        <li><a href="/home">Homepage</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Collections</a>
      <ul className="dropdown-menu">
        <li><a href="/collection">All Collections</a></li>
        <li><a href="/newarrial">New Arrivals</a></li>
        <li><a href="/bestseller">Best Sellers</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Shop</a>
      <ul className="dropdown-menu">
        <li><a href="/formal">Formal</a></li>
        <li><a href="/casual">Casual</a></li>
        <li><a href="/streetwear">Streetwear</a></li>
      </ul>
    </li>

    <li><a href="/accessories">Accessories</a></li>

    <li className="dropdown">
      <a href="#">Sale</a>
      <ul className="dropdown-menu">
        <li><a href="/ongoingoffer">Ongoing Offers</a></li>
        <li><a href="/clearance">Clearance</a></li>
      </ul>
    </li>
  </ul>

  <div className="nav-center">
    <div className="search-box">
      <input type="text" placeholder="🔍︎ What are you looking for?" />
      <button className="clear-btn"><i className="fa-solid fa-xmark"></i></button>
    </div>
  </div>

  <div className="icon-links">
    <div className="icon-item dropdown">
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}><FiUser size={18} /> <span>Profile</span></a>
      <ul className="dropdown-menu">
        <li><a href="/myaccount">My Account</a></li>
        <li><a href="/order">Orders</a></li>
        <li><a href="/home">Logout</a></li>
      </ul>
    </div>
    <div className="icon-item">
      <a href="/whishlist" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}><FiHeart size={18} /> <span>Wishlist</span></a>
    </div>
    <div className="icon-item">
      <a href="/bag" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}><FiShoppingBag size={18} /> <span>Bag</span></a>
    </div>
    <div className="icon-item">
      <a href="/login" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}><FiLogIn size={18} /> <span>Login</span></a>
    </div>
  </div>
</nav>
</div>

<div className="mobile-search-box" id="searchInput2">
  <input type="text" id="mobileSearch" placeholder="🔍︎ What are you looking for?" />
  <button className="clear-btn" >
    <i className="fa-solid fa-xmark"></i>
  </button>
</div>

<section className="clearance-page">
    <h1>Clearance Sale – Up to 50% Off</h1>
    <div className="product-grid">
      
     
      <div className="product-card">
        <span className="sale-tag">40% OFF</span>
        <img src="/clearance.1.webp" alt="Clearance Shirt" />
        <div className="card-content">
          <h3>Classic White Shirt</h3>
          <p>Pure cotton luxury fabric</p>
          <div className="price">₹1,199 <span className="old-price">₹1,999</span></div>
          <a href="#" className="add-cart-btn"><i className="fa fa-cart-plus"></i> Add to Cart</a>
        </div>
      </div>

      
      <div className="product-card">
        <span className="sale-tag">50% OFF</span>
        <img src="/clearance.2.webp" alt="Clearance Jacket" />
        <div className="card-content">
          <h3>Wool Blend Jacket</h3>
          <p>Italian cut, perfect for evenings</p>
          <div className="price">₹2,499 <span className="old-price">₹4,999</span></div>
          <a href="#" className="add-cart-btn"><i className="fa fa-cart-plus"></i> Add to Cart</a>
        </div>
      </div>

      
      <div className="product-card">
        <span className="sale-tag">30% OFF</span>
        <img src="/clearance.3.webp" alt="Clearance Shoes" />
        <div className="card-content">
          <h3>Tan Oxford Shoes</h3>
          <p>Handcrafted leather shoes</p>
          <div className="price">₹2,099 <span className="old-price">₹2,999</span></div>
          <a href="#" className="add-cart-btn"><i className="fa fa-cart-plus"></i> Add to Cart</a>
        </div>
      </div>

      
      <div className="product-card">
        <span className="sale-tag">45% OFF</span>
        <img src="/clearance.4.webp" alt="Clearance Hoodie" />
        <div className="card-content">
          <h3>Premium Grey Hoodie</h3>
          <p>Comfy and stylish winterwear</p>
          <div className="price">₹1,099 <span className="old-price">₹1,999</span></div>
          <a href="#" className="add-cart-btn"><i className="fa fa-cart-plus"></i> Add to Cart</a>
        </div>
      </div>

    </div>
  </section>

  <footer className="footer">
    <div className="footer-content">
      <p>© 2025 MENZO. All rights reserved.</p>
      <div>
        <a href="#">Privacy</a> |
        <a href="#">Terms</a> |
        <a href="/contact">Contact</a>
      </div>
    </div>
  </footer>

    </>
  );
}
