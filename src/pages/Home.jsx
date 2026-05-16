
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cssFiles = ["home.css"];
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
    <input type="text" id="desktopSearch" placeholder="🔍︎ What are you looking for?" />
    <button className="clear-btn" >
      <i className="fa-solid fa-xmark"></i>
    </button>
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





  <section className="hero-section">
    <div className="hero-text">
      <h1>Confidence in Every Thread</h1>
      <p>Minimal luxury, tailored for the modern man.</p>
      <a href="/newarrial" className="hero-btn">Shop New Arrivals</a>
    </div>
    <div className="hero-img">
      <img src="hero.img.png" alt="Luxury Fashion" />
    </div>
  </section>


  <section className="categories-section">
    <h2>Explore Our Categories</h2>
    <div className="category-grid">
      <div className="category-card">Suits</div>
      <div className="category-card">Footwear</div>
      <div className="category-card">Watches</div>
      <div className="category-card">Fragrances</div>
    </div>
  </section>


  <section className="luxury-spotlight fade-in">
  <div className="spotlight-img">
    <img src="hero2.png" alt="Green Streetwear Men Style" />
  </div>
  <div className="spotlight-text">
    <h2>Street Luxury, Redefined</h2>
    
    <p>Explore our urban essentials with timeless attitude.</p>
  </div>
</section>
<section className="featured-suits fade-in">
  <h2>Featured Suits</h2>
  <p className="section-subtext">Elevate your style with our premium tailored suits.</p>
  <div className="suits-grid">
    <div className="suit-item">
      <img src="suits1.jpg" alt="Navy Classic Suit" />
      <h3>Navy Classic Suit</h3>
      <p className="price">₹14,999</p>
      <button className="btn-add">Add to Cart</button>
    </div>
    <div className="suit-item">
      <img src="suits2.jpg" alt="Grey Slim-Fit Suit" />
      <h3>Grey Slim-Fit Suit</h3>
      <p className="price">₹15,999</p>
      <button className="btn-add">Add to Cart</button>
    </div>
    <div className="suit-item">
      <img src="suits.3.webp" alt="Ivory Double Breasted" />
      <h3>Ivory Double-Breasted</h3>
      <p className="price">₹18,499</p>
      <button className="btn-add">Add to Cart</button>
    </div>
    <div className="suit-item">
      <img src="suit.4.jpg" alt="Black Tuxedo" />
      <h3>Black Tuxedo</h3>
      <p className="price">₹19,999</p>
      <button className="btn-add">Add to Cart</button>
    </div>
  </div>
</section>




  <section className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-cards">
      <div className="testimonial">
        <p>"Unmatched quality and perfect fit. Menzo changed my style game."</p>
        <span>– Aarav K.</span>
      </div>
      <div className="testimonial">
        <p>"The details, the fabric, the packaging... just premium all around."</p>
        <span>– Rishi M.</span>
      </div>
    </div>
  </section>


  <section className="newsletter">
    <h2>Stay Updated</h2>
    <p>Subscribe to receive exclusive offers and first looks.</p>
    <form>
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
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
