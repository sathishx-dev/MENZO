
import React, { useEffect } from 'react';

export default function Accessories() {
  useEffect(() => {
    const cssFiles = ["accessories.css"];
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
    <img src="brand.logo.png" alt="Logo" />
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
      <a href="#"><i className="fa-solid fa-user"></i></a>
      <span>Profile</span>
      <ul className="dropdown-menu">
        <li><a href="/myaccount">My Account</a></li>
        <li><a href="/order">Orders</a></li>
        <li><a href="/home">Logout</a></li>
      </ul>
    </div>
    <div className="icon-item">
      <a href="/whishlist"><i className="fa-solid fa-heart"></i></a>
      <span>Wishlist</span>
    </div>
    <div className="icon-item">
      <a href="/bag"><i className="fa-solid fa-bag-shopping"></i></a>
      <span>Bag</span>
    </div>
    <div className="icon-item">
      <a href="/login"><i className="fa-solid fa-right-to-bracket"></i></a>
      <span>Login</span>
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

   
<section className="accessories-page">
    <h1>Accessories</h1>
    <h2 className="section-title">Watches</h2>
    <div className="product-grid">
    
      <div className="product-card">
        <img src="watch1.jpg" alt="Watch" />
        <h3>Luxury Chrono Watch</h3>
        <p className="price">$299</p>
        <div className="rating">⭐⭐⭐⭐☆</div>
        <div className="actions">
          <button><i className="fa fa-heart"></i></button>
          <button><i className="fa fa-shopping-bag"></i></button>
        </div>
      </div>
      <div className="product-card"><img src="watch2.jpg" alt="Watch" /><h3>Classic Black Dial</h3><p className="price">$349</p><div className="rating">⭐⭐⭐⭐⭐</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="watch3.jpg" alt="Watch" /><h3>Menzo Metal Strap</h3><p className="price">$289</p><div className="rating">⭐⭐⭐⭐☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="watch4.jpg" alt="Watch" /><h3>Rose Gold Timer</h3><p className="price">$379</p><div className="rating">⭐⭐⭐⭐⭐</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
    </div>

    <h2 className="section-title">Bags</h2>
    <div className="product-grid">
      <div className="product-card"><img src="bag1.jpg" alt="Bag" /><h3>Tan Leather Bag</h3><p className="price">$199</p><div className="rating">⭐⭐⭐⭐☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="bag2.jpg" alt="Bag" /><h3>Black Travel Duffel</h3><p className="price">$239</p><div className="rating">⭐⭐⭐⭐⭐</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="bag3.jpg" alt="Bag" /><h3>Urban Streetpack</h3><p className="price">$179</p><div className="rating">⭐⭐⭐☆☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="bag4.jpg" alt="Bag" /><h3>Grey Office Brief</h3><p className="price">$259</p><div className="rating">⭐⭐⭐⭐☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
    </div>

    <h2 className="section-title">Sunglasses</h2>
    <div className="product-grid">
      <div className="product-card"><img src="glass1.jpg" alt="Sunglasses" /><h3>Polarized Shades</h3><p className="price">$99</p><div className="rating">⭐⭐⭐⭐⭐</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="glass2.jpg" alt="Sunglasses" /><h3>Classic Aviator</h3><p className="price">$129</p><div className="rating">⭐⭐⭐⭐☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="glass3.jpg" alt="Sunglasses" /><h3>Street Round Frames</h3><p className="price">$109</p><div className="rating">⭐⭐⭐☆☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
      <div className="product-card"><img src="glass4.jpg" alt="Sunglasses" /><h3>Brown Tint Wayfarer</h3><p className="price">$119</p><div className="rating">⭐⭐⭐⭐☆</div><div className="actions"><button><i className="fa fa-heart"></i></button><button><i className="fa fa-shopping-bag"></i></button></div></div>
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
