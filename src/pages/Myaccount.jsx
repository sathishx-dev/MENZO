import React, { useEffect } from 'react';

export default function Myaccount() {
  useEffect(() => {
    const cssFiles = ["myaccount.css"];
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



  <div className="account-header">
    <h1>My Account</h1>
    <div className="auth-buttons">
    <a href="/login" > <button >Login</button>  </a>
      <a href="/reg"><button>Signup</button></a>
    </div>
  </div>

  


  
  <div className="section">
    <div className="section-left">
      <i className="fas fa-box"></i>
      <div className="section-title">Orders</div>
    </div>
    <i className="fas fa-chevron-right"></i>
  </div>


  <div className="section">
    <div className="section-left">
      <i className="fas fa-headset"></i>
      <div className="section-title">Help Center</div>
    </div>
    <i className="fas fa-chevron-right"></i>
  </div>

  <div className="section">
    <div className="section-left">
      <i className="fas fa-ticket-alt"></i>
      <div className="section-title">Coupons</div>
    </div>
    <i className="fas fa-chevron-right"></i>
  </div>



  

  <div className="section">
    <div className="section-left">
      <i className="fas fa-user-cog"></i>
      <div>
        <div className="section-title">Manage Account</div>
        <div className="section-desc">Edit profile and saved addresses</div>
      </div>
    </div>
    <i className="fas fa-chevron-right"></i>
  </div>


  <div className="section">
    <div className="section-left">
      <i className="fas fa-heart"></i>
      <a href="/whishlist" style={{"textDecoration":"none"}} >
        <div>
          <div className="section-title">Wishlist</div>
          <div className="section-desc">Your most loved styles</div>
        </div>
      </a>
    </div>
    <i className="fas fa-chevron-right"></i>
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
