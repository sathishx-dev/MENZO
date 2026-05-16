
import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const cssFiles = ["about.css"];
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
      <a href="/login" > <i className="fa-solid fa-right-to-bracket"></i></a>
      <span>Login</span>
    </div>
  </div>
</nav>
</div>

  
  <section className="about-hero">
    <div className="container">
      <h1>About MENZO</h1>
      <p>Refining the definition of modern masculinity through timeless luxury.</p>
    </div>
  </section>

  <section className="about-content">
    <div className="container">
      <h2>Our Story</h2>
      <p>Founded with a vision to redefine men’s fashion, MENZO blends luxury with understated elegance. Born out of a desire to elevate everyday style, we believe fashion is more than clothing—it's a lifestyle rooted in confidence, detail, and individuality.</p>

      <h2>Craftsmanship & Quality</h2>
      <p>Every MENZO piece is crafted with precision and care using premium materials, ensuring exceptional fit, comfort, and lasting sophistication. We partner with experienced artisans who share our passion for quality and timeless design.</p>

      <h2>Our Mission</h2>
      <p>To empower modern men by offering clothing that enhances identity, embraces style, and stands the test of time—combining luxury with versatility.</p>

      <h2>Why MENZO?</h2>
      <ul>
        <li><i className="fas fa-check-circle"></i> Premium Materials</li>
        <li><i className="fas fa-check-circle"></i> Tailored Elegance</li>
        <li><i className="fas fa-check-circle"></i> Designed for the Modern Gentleman</li>
        <li><i className="fas fa-check-circle"></i> Ethical and Sustainable Approach</li>
      </ul>
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
