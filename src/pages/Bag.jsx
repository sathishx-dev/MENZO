
import React, { useEffect } from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiLogIn } from 'react-icons/fi';


export default function Bag() {
  useEffect(() => {
    const cssFiles = ["bag.css"];
    const links = cssFiles.map(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/' + file;
      document.head.appendChild(link);
      return link;
    });

    const loadCart = () => {
      const cartItemsDiv = document.getElementById("cartItems");
      if (!cartItemsDiv) return;
      
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your bag is empty.</p>";
        return;
      }

      cartItemsDiv.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="/${item.image}" width="100" alt="${item.name}" />
          <div class="cart-details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button data-remove-index="${index}">Remove</button>
          </div>
        </div>
        <hr />
      `).join("");
    };

    const handleCartUpdate = () => loadCart();
    window.addEventListener('cart-updated', handleCartUpdate);
    loadCart();

    const orderBtn = document.getElementById("orderBtn");
    const handleOrder = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert("Your bag is empty. Add items before placing an order.");
        return;
      }
      alert("✅ Order placed successfully!");
      localStorage.removeItem("cart"); 
      loadCart(); 
    };
    if (orderBtn) orderBtn.addEventListener("click", handleOrder);

    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      window.removeEventListener('cart-updated', handleCartUpdate);
      if (orderBtn) orderBtn.removeEventListener("click", handleOrder);
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
      <a href="/login" > <i className="fa-solid fa-right-to-bracket"></i></a>
      <span>Login</span>
    </div>
  </div>
</nav>
</div>

  <h2>Your Shopping Bag</h2>
  <div id="cartItems"></div>
<div className="order-section">
  <button id="orderBtn" className="btn-order">Place Order</button>
</div>

    </>
  );
}
