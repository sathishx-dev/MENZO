
import React, { useEffect } from 'react';

export default function Whishlist() {
  useEffect(() => {
    const cssFiles = ["whishlist.css"];
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




  <div className="wishlist-container">
    <h2>My Wishlist</h2>

    <div className="wishlist-item">
      <div className="wishlist-left">
        <img src="https://via.placeholder.com/80x100?text=Black+Tee" alt="Black Slim T-Shirt" />
        <div className="wishlist-info">
          <strong>Black Slim T-Shirt</strong><br />
          ₹1,299 | Size: M
        </div>
      </div>
      <div className="wishlist-actions">
        <button>Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>

    <div className="wishlist-item">
      <div className="wishlist-left">
        <img src="https://via.placeholder.com/80x100?text=Charcoal+Shirt" alt="Charcoal Shirt" />
        <div className="wishlist-info">
          <strong>Charcoal Formal Shirt</strong><br />
          ₹2,199 | Size: L
        </div>
      </div>
      <div className="wishlist-actions">
        <button>Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>

    <div className="wishlist-item">
      <div className="wishlist-left">
        <img src="https://via.placeholder.com/80x100?text=Beige+Suit" alt="Beige Suit" />
        <div className="wishlist-info">
          <strong>Beige Luxury Suit</strong><br />
          ₹7,999 | Size: 42
        </div>
      </div>
      <div className="wishlist-actions">
        <button>Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>

    <div className="wishlist-item">
      <div className="wishlist-left">
        <img src="https://via.placeholder.com/80x100?text=Leather+Shoes" alt="Leather Shoes" />
        <div className="wishlist-info">
          <strong>Brown Leather Shoes</strong><br />
          ₹4,499 | Size: 9
        </div>
      </div>
      <div className="wishlist-actions">
        <button>Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>

    <div className="wishlist-item">
      <div className="wishlist-left">
        <img src="https://via.placeholder.com/80x100?text=Grey+Pant" alt="Grey Pant" />
        <div className="wishlist-info">
          <strong>Grey Slim Pant</strong><br />
          ₹2,199 | Size: 32
        </div>
      </div>
      <div className="wishlist-actions">
        <button>Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>

    <div className="wishlist-item">
      <div className="wishlist-left">
        <img src="https://via.placeholder.com/80x100?text=Oversized+Hoodie" alt="Oversized Hoodie" />
        <div className="wishlist-info">
          <strong>Oversized Tan Hoodie</strong><br />
          ₹2,799 | Size: XL
        </div>
      </div>
      <div className="wishlist-actions">
        <button>Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  </div>

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
