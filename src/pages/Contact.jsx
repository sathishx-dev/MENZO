
import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const cssFiles = ["contact.css"];
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



<div className="container">
  <div className="contact-header">
    <h1>Contact Us</h1>
    <p>We’re here to help! Reach out to us with any questions or concerns.</p>
  </div>
  <div className="contact-content">
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> support@modernecommerce.com</p>
      <p><strong>Phone:</strong> +1-555-123-4567</p>
      <p><strong>Address:</strong> 123 Fashion Ave, New York, NY 10001, USA</p>
      <p><strong>Hours:</strong> Mon-Fri 9am - 6pm (EST)</p>
    </div>
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
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
