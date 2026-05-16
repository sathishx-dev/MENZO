
import React, { useEffect } from 'react';

export default function Bestseller() {
  useEffect(() => {
    const cssFiles = ["bestseller.css"];
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

  <section className="bestseller-section">
    <h1 className="bestseller-title">Best Sellers</h1>
    <div className="product-grid">
      
     
      <div className="product-card">
        <img src="https://via.placeholder.com/300x400" alt="Product 1" />
        <div className="product-info">
          <div className="product-name">Luxury Black Blazer</div>
          <div className="product-price">₹8,499</div>
          <div className="rating">★★★★★</div>
          <div className="sizes">
            <span>S</span><span>M</span><span>L</span><span>XL</span>
          </div>
          <div className="actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="wishlist"><i className="far fa-heart"></i></button>
          </div>
        </div>
      </div>

      
      <div className="product-card">
        <img src="https://via.placeholder.com/300x400" alt="Product 2" />
        <div className="product-info">
          <div className="product-name">Tailored White Shirt</div>
          <div className="product-price">₹2,999</div>
          <div className="rating">★★★★☆</div>
          <div className="sizes">
            <span>S</span><span>M</span><span>L</span><span>XL</span>
          </div>
          <div className="actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="wishlist"><i className="far fa-heart"></i></button>
          </div>
        </div>
      </div>

   
<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Slim+Fit+Grey+Trousers" alt="Product 3" />
  <div className="product-info">
    <div className="product-name">Slim Fit Grey Trousers</div>
    <div className="product-price">₹3,799</div>
    <div className="rating">★★★★☆</div>
    <div className="sizes"><span>30</span><span>32</span><span>34</span><span>36</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Leather+Loafers" alt="Product 4" />
  <div className="product-info">
    <div className="product-name">Classic Leather Loafers</div>
    <div className="product-price">₹5,499</div>
    <div className="rating">★★★★★</div>
    <div className="sizes"><span>7</span><span>8</span><span>9</span><span>10</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Beige+Chino+Pants" alt="Product 5" />
  <div className="product-info">
    <div className="product-name">Beige Chino Pants</div>
    <div className="product-price">₹2,999</div>
    <div className="rating">★★★★☆</div>
    <div className="sizes"><span>30</span><span>32</span><span>34</span><span>36</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Navy+Zipper+Jacket" alt="Product 6" />
  <div className="product-info">
    <div className="product-name">Navy Zipper Jacket</div>
    <div className="product-price">₹6,299</div>
    <div className="rating">★★★★★</div>
    <div className="sizes"><span>S</span><span>M</span><span>L</span><span>XL</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Royal+Velvet+Suit" alt="Product 7" />
  <div className="product-info">
    <div className="product-name">Royal Velvet Suit</div>
    <div className="product-price">₹11,999</div>
    <div className="rating">★★★★★</div>
    <div className="sizes"><span>38</span><span>40</span><span>42</span><span>44</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Maroon+Casual+Hoodie" alt="Product 8" />
  <div className="product-info">
    <div className="product-name">Maroon Casual Hoodie</div>
    <div className="product-price">₹3,299</div>
    <div className="rating">★★★★☆</div>
    <div className="sizes"><span>S</span><span>M</span><span>L</span><span>XL</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Premium+T-Shirt" alt="Product 9" />
  <div className="product-info">
    <div className="product-name">Premium White T-Shirt</div>
    <div className="product-price">₹1,899</div>
    <div className="rating">★★★★☆</div>
    <div className="sizes"><span>S</span><span>M</span><span>L</span><span>XL</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Tan+Slide+Slippers" alt="Product 10" />
  <div className="product-info">
    <div className="product-name">Tan Slide Slippers</div>
    <div className="product-price">₹1,499</div>
    <div className="rating">★★★☆☆</div>
    <div className="sizes"><span>7</span><span>8</span><span>9</span><span>10</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>


<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Designer+Black+Hoodie" alt="Product 11" />
  <div className="product-info">
    <div className="product-name">Designer Black Hoodie</div>
    <div className="product-price">₹4,499</div>
    <div className="rating">★★★★☆</div>
    <div className="sizes"><span>S</span><span>M</span><span>L</span><span>XL</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
    </div>
  </div>
</div>

<div className="product-card">
  <img src="https://via.placeholder.com/300x400?text=Royal+Blue+Silk+Shirt" alt="Product 12" />
  <div className="product-info">
    <div className="product-name">Royal Blue Silk Shirt</div>
    <div className="product-price">₹3,299</div>
    <div className="rating">★★★★★</div>
    <div className="sizes"><span>S</span><span>M</span><span>L</span><span>XL</span></div>
    <div className="actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="wishlist"><i className="far fa-heart"></i></button>
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
