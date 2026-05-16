
import React, { useEffect } from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiLogIn } from 'react-icons/fi';


export default function Streetwear() {
  useEffect(() => {
    const cssFiles = ["streetwear.css"];
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
    <h2 className="combo-title"> Streetwear Combos</h2>
    <div className="combo-grid">
      
      
      <div className="combo-card">
        <img src="/sreetwear.1.png" className="combo-img" alt="Combo 1" />
        <div className="combo-info">
          <h3>Urban Oversized Tee + Cargo Pants + Jordans</h3>
          <p>Perfect for street-style looks with edge and comfort.</p>
          <div className="combo-price">₹4,499</div>
          <div className="combo-buttons">
            <button className="btn-add">Add to Cart</button>
            <button><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>

     
      <div className="combo-card">
        <img src="/streetwear.2.webp" className="combo-img" alt="Combo 2" />
        <div className="combo-info">
          <h3>Graffiti Hoodie + Joggers + Chunky Sneakers</h3>
          <p>Comfy and bold — great for daily flexing.</p>
          <div className="combo-price">₹5,199</div>
          <div className="combo-buttons">
            <button className="btn-add">Add to Cart</button>
            <button><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>

     
      <div className="combo-card">
        <img src="/streetwear.3.webp" className="combo-img" alt="Combo 3" />
        <div className="combo-info">
          <h3>Flannel Shirt + Ripped Jeans + High Tops</h3>
          <p>Classic skater vibe with a street twist.</p>
          <div className="combo-price">₹3,999</div>
          <div className="combo-buttons">
            <button className="btn-add">Add to Cart</button>
            <button><i className="fa-regular fa-heart"></i></button>
          </div>
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
