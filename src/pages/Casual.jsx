
import React, { useEffect } from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiLogIn } from 'react-icons/fi';


export default function Casual() {
  useEffect(() => {
    const cssFiles = ["casual.css"];
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



  <section className="combo-section">
    <h2 className="section-title">Casual Combo Packs</h2>
    <div className="combo-container">

      
      <div className="combo-card">
        <img src="/casual.1.jpg" alt="Casual Combo 1" />
        <h3>Weekend Vibe Combo</h3>
        <p>Graphic T-Shirt + Ripped Jeans + Sneakers</p>
        <div className="price-rating">
          <span className="price">₹2,799</span>
          <span className="rating">★★★★☆ (142)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>

      
      <div className="combo-card">
        <img src="/casual.2.webp" alt="Casual Combo 2" />
        <h3>Urban Street Combo</h3>
        <p>Oversized Tee + Cargo Joggers + Canvas Shoes</p>
        <div className="price-rating">
          <span className="price">₹3,199</span>
          <span className="rating">★★★★★ (110)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>

      <div className="combo-card">
        <img src="/casual.3.jpg" alt="Casual Combo 3" />
        <h3>Denim Day Combo</h3>
        <p>Checked Shirt + Blue Jeans + High Tops</p>
        <div className="price-rating">
          <span className="price">₹3,499</span>
          <span className="rating">★★★★☆ (88)</span>
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>

      <div className="combo-card">
        <img src="/casual.4.png" alt="Casual Combo 4" />
        <h3>Chill Out Combo</h3>
        <p>Hoodie + Relaxed Fit Shorts + Slides</p>
        <div className="price-rating">
          <span className="price">₹2,599</span>
          <span className="rating">★★★★★ (73)</span>
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
