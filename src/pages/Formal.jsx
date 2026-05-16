
import React, { useEffect } from 'react';

export default function Formal() {
  useEffect(() => {
    const cssFiles = ["formal.css"];
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
      <a href="#"><i className="fa-solid fa-user"></i> <span>Profile</span></a>
      <ul className="dropdown-menu">
        <li><a href="/myaccount">My Account</a></li>
        <li><a href="/order">Orders</a></li>
        <li><a href="/home">Logout</a></li>
      </ul>
    </div>
    <div className="icon-item">
      <a href="/whishlist"><i className="fa-solid fa-heart"></i> <span>Wishlist</span></a>
    </div>
    <div className="icon-item">
      <a href="/bag"><i className="fa-solid fa-bag-shopping"></i> <span>Bag</span></a>
    </div>
    <div className="icon-item">
      <a href="/login"><i className="fa-solid fa-right-to-bracket"></i> <span>Login</span></a>
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
  <section className="combo-section">
    <h2 className="section-title">Formal Combo Packs</h2>
    <div className="combo-container">

     
      <div className="combo-card">
        <img src="formal.1.jpg" alt="Formal Combo 1" />
        <h3>Elegant Executive Combo</h3>
        <p>White Shirt + Navy Pant + Black Oxfords</p>
        <div className="price-rating">
          <span className="price">₹4,999</span>
          <span className="rating">★★★★☆ (128)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>

      
      <div className="combo-card">
        <img src="formal.2.webp" alt="Formal Combo 2" />
        <h3>Premium Charcoal Combo</h3>
        <p>Charcoal Shirt + Grey Pant + Brown Brogues</p>
        <div className="price-rating">
          <span className="price">₹5,499</span>
          <span className="rating">★★★★★ (96)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>

      
      <div className="combo-card">
        <img src="formal.3.jpg" alt="Formal Combo 3" />
        <h3>Boardroom Blue Combo</h3>
        <p>Sky Blue Shirt + Black Pant + Loafers</p>
        <div className="price-rating">
          <span className="price">₹4,749</span>
          <span className="rating">★★★★☆ (74)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>

   
      <div className="combo-card">
        <img src="formal.4.jpg" alt="Formal Combo 4" />
        <h3>Minimalist Grey Combo</h3>
        <p>Light Grey Shirt + Beige Pant + White Derbys</p>
        <div className="price-rating">
          <span className="price">₹5,199</span>
          <span className="rating">★★★★★ (88)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
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
