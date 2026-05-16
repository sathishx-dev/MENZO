
import React, { useEffect } from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiLogIn } from 'react-icons/fi';


export default function Collection() {
  useEffect(() => {
    const cssFiles = ["collecttion.css"];
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



  <div className="collections-page">
   
    <aside className="filters">
      <h3>Filters</h3>
      <div className="filter-section">
        <h4>Categories</h4>
        <label><input type="checkbox" checked /> Shirts</label>
        <label><input type="checkbox" /> T-Shirts</label>
        <label><input type="checkbox" /> Jackets</label>
        <label><input type="checkbox" /> Suits</label>
        <label><input type="checkbox" /> Pants</label>
        <label><input type="checkbox" /> Hoodies</label>
        <label><input type="checkbox" /> Shoes</label>
        <label><input type="checkbox" /> Slippers</label>
      </div>
    </aside>


    <section className="products">
      <h2>MENZO Collections</h2>

    
      <div className="category-group">
        <h3>Shirts</h3>
        <div className="product-grid">
          <div className="product-card">
            <img src="/shirt1.jpg" alt="Shirt 1" className="product-image" />
            <h4 className="product-title">White Cotton Shirt</h4>
            <p className="product-price">₹2,199</p>
            <div className="product-actions">
              <button className="wishlist-btn" title="Add to Wishlist"><i className="fa-regular fa-heart"></i></button>
              <button className="addcart-btn">Add to Cart</button>
            </div>
          </div>
        
          <div className="product-card">
            <img src="/shirt2.jpg" alt="Shirt 2" className="product-image" />
            <h4 className="product-title">Sky Blue Shirt</h4>
            <p className="product-price">₹1,899</p>
            <div className="product-actions">
              <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
              <button className="addcart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <img src="/shirt3.jpg" alt="Shirt 3" className="product-image" />
            <h4 className="product-title">Slim Fit Black Shirt</h4>
            <p className="product-price">₹2,599</p>
            <div className="product-actions">
              <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
              <button className="addcart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <img src="/shirt4.jpg" alt="Shirt 4" className="product-image" />
            <h4 className="product-title">Striped Navy Shirt</h4>
            <p className="product-price">₹2,399</p>
            <div className="product-actions">
              <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
              <button className="addcart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="category-group">
  <h3>T-Shirts</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/tshirt1.jpg" alt="T-Shirt 1" className="product-image" />
      <h4 className="product-title">Basic Black T-Shirt</h4>
      <p className="product-price">₹1,099</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/tshirt2.jpg" alt="T-Shirt 2" className="product-image" />
      <h4 className="product-title">White Printed T-Shirt</h4>
      <p className="product-price">₹1,299</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/tshirt3.jpg" alt="T-Shirt 3" className="product-image" />
      <h4 className="product-title">Oversized Graphic Tee</h4>
      <p className="product-price">₹1,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/tshirt4.jpg" alt="T-Shirt 4" className="product-image" />
      <h4 className="product-title">MENZO Signature T-Shirt</h4>
      <p className="product-price">₹1,699</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<div className="category-group">
  <h3>Jackets</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/jacket1.jpg" alt="Jacket 1" className="product-image" />
      <h4 className="product-title">Black Leather Biker Jacket</h4>
      <p className="product-price">₹4,999</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/jacket2.jpg" alt="Jacket 2" className="product-image" />
      <h4 className="product-title">Classic Tan Bomber Jacket</h4>
      <p className="product-price">₹3,799</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/jacket3.jpg" alt="Jacket 3" className="product-image" />
      <h4 className="product-title">Navy Quilted Winter Jacket</h4>
      <p className="product-price">₹4,299</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/jacket4.jpg" alt="Jacket 4" className="product-image" />
      <h4 className="product-title">MENZO Luxe Wool Blazer</h4>
      <p className="product-price">₹5,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

<div className="category-group">
  <h3>Suits</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/suit1.jpg" alt="Suit 1" className="product-image" />
      <h4 className="product-title">Classic Black 3-Piece Suit</h4>
      <p className="product-price">₹8,999</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/suit2.jpg" alt="Suit 2" className="product-image" />
      <h4 className="product-title">Midnight Blue Slim Suit</h4>
      <p className="product-price">₹9,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/suit3.jpg" alt="Suit 3" className="product-image" />
      <h4 className="product-title">Grey Check Formal Suit</h4>
      <p className="product-price">₹7,899</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/suit4.jpg" alt="Suit 4" className="product-image" />
      <h4 className="product-title">MENZO Ivory Wedding Suit</h4>
      <p className="product-price">₹10,299</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<div className="category-group">
  <h3>Pants</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/pant1.jpg" alt="Pant 1" className="product-image" />
      <h4 className="product-title">Tailored Slim Fit Trousers</h4>
      <p className="product-price">₹2,799</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/pant2.jpg" alt="Pant 2" className="product-image" />
      <h4 className="product-title">Beige Chino Pants</h4>
      <p className="product-price">₹2,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/pant3.jpg" alt="Pant 3" className="product-image" />
      <h4 className="product-title">Black Formal Trousers</h4>
      <p className="product-price">₹2,999</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/pant4.jpg" alt="Pant 4" className="product-image" />
      <h4 className="product-title">MENZO Stretch Cargo Pants</h4>
      <p className="product-price">₹2,599</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<div className="category-group">
  <h3>Hoodies</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/hoodie1.jpg" alt="Hoodie 1" className="product-image" />
      <h4 className="product-title">MENZO Essential Black Hoodie</h4>
      <p className="product-price">₹2,299</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/hoodie2.jpg" alt="Hoodie 2" className="product-image" />
      <h4 className="product-title">Beige Oversized Hoodie</h4>
      <p className="product-price">₹2,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/hoodie3.jpg" alt="Hoodie 3" className="product-image" />
      <h4 className="product-title">Olive Green Street Hoodie</h4>
      <p className="product-price">₹2,799</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/hoodie4.jpg" alt="Hoodie 4" className="product-image" />
      <h4 className="product-title">Charcoal Zip-Up Hoodie</h4>
      <p className="product-price">₹2,599</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<div className="category-group">
  <h3>Shoes</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/shoe1.jpg" alt="Shoe 1" className="product-image" />
      <h4 className="product-title">Classic Black Oxford Shoes</h4>
      <p className="product-price">₹4,199</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/shoe2.jpg" alt="Shoe 2" className="product-image" />
      <h4 className="product-title">Brown Leather Loafers</h4>
      <p className="product-price">₹3,899</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/shoe3.jpg" alt="Shoe 3" className="product-image" />
      <h4 className="product-title">White Minimal Sneakers</h4>
      <p className="product-price">₹3,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/shoe4.jpg" alt="Shoe 4" className="product-image" />
      <h4 className="product-title">Suede Chelsea Boots</h4>
      <p className="product-price">₹4,599</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<div className="category-group">
  <h3>Slippers</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src="/slipper1.jpg" alt="Slipper 1" className="product-image" />
      <h4 className="product-title">MENZO Leather Slide</h4>
      <p className="product-price">₹1,499</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/slipper2.jpg" alt="Slipper 2" className="product-image" />
      <h4 className="product-title">Brown Cross Strap Slippers</h4>
      <p className="product-price">₹1,299</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/slipper3.jpg" alt="Slipper 3" className="product-image" />
      <h4 className="product-title">Textured Black Slides</h4>
      <p className="product-price">₹1,099</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>

    <div className="product-card">
      <img src="/slipper4.jpg" alt="Slipper 4" className="product-image" />
      <h4 className="product-title">Luxury Indoor Slippers</h4>
      <p className="product-price">₹1,799</p>
      <div className="product-actions">
        <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        <button className="addcart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

    </section>
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
