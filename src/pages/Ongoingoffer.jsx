
import React, { useEffect } from 'react';

export default function Ongoingoffer() {
  useEffect(() => {
    const cssFiles = ["ongoingoffer.css"];
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
    <section className="offer-banner-section">
    <h2> Ongoing Offers on Men's Categories</h2>
    <div className="offer-carousel">

      <div className="offer-card">
        <img src="ongoingoffer.1.jpg" alt="Shirts Offer" />
        <div className="offer-info">
          <h3>Shirts</h3>
          <p>Style Meets Comfort</p>
          <strong>Min. 50% Off</strong>
          <button  className="btn-add">Shop Now</button>
        </div>
      </div>

 
      <div className="offer-card">
        <img src="ongoingoffer.2.jpg" alt="Pants Offer" />
        <div className="offer-info">
          <h3>Pants</h3>
          <p>Urban Modern Fit</p>
          <strong>Min. 40% Off</strong>
          <button  className="btn-add">Shop Now</button>
        </div>
      </div>

  
      <div className="offer-card">
        <img src="ongoing offer.3.webp" alt="Suits Offer" />
        <div className="offer-info">
          <h3>Suits</h3>
          <p>Luxury & Elegance</p>
          <strong>Min. 60% Off</strong>
          <button  className="btn-add">Shop Now</button>
        </div>
      </div>

      <div className="offer-card">
        <img src="ongoingoffer.4.jpg" alt="Watches Offer" />
        <div className="offer-info">
          <h3>Watches</h3>
          <p>Timeless Style</p>
          <strong>Flat 30% Off</strong>
          <button  className="btn-add">Shop Now</button>
        </div>
      </div>

    
      <div className="offer-card">
        <img src="ongoingoffer.5.jpg" alt="Bags Offer" />
        <div className="offer-info">
          <h3>Bags</h3>
          <p>Travel in Style</p>
          <strong>Min. 25% Off</strong>
          <button  className="btn-add">Shop Now</button>
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
