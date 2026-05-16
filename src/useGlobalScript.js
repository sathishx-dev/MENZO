import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGlobalScript() {
  const location = useLocation();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (e.target.closest('.hamburger')) {
        const navLinks = document.querySelector('.nav-links');
        const xmark = document.querySelector('.xmark');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks) navLinks.classList.add('show');
        if (xmark) xmark.style.display = 'inline';
        if (hamburger) hamburger.style.display = 'none';
      }

      if (e.target.closest('.xmark')) {
        const navLinks = document.querySelector('.nav-links');
        const xmark = document.querySelector('.xmark');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks) navLinks.classList.remove('show');
        if (xmark) xmark.style.display = 'none';
        if (hamburger) hamburger.style.display = 'inline';
      }

      if (e.target.closest('.clear-btn')) {
        const mobileSearch = document.getElementById('mobileSearch') || e.target.closest('.mobile-search-box')?.querySelector('input');
        if (mobileSearch) mobileSearch.value = '';

        const desktopSearch = document.getElementById('desktopSearch') || e.target.closest('.search-box')?.querySelector('input');
        if (desktopSearch) desktopSearch.value = '';
      }

      const iconItem = e.target.closest('.icon-item');
      if (iconItem && !e.target.closest('a')) {
        const link = iconItem.querySelector('a');
        if (link && link.href) {
            window.location.href = link.href;
        }
      }

      const addToCartBtn = e.target.closest('.btn-add') || e.target.closest('.add-cart-btn');
      if (addToCartBtn) {
        e.preventDefault();
        const productCard = addToCartBtn.closest(".combo-card, .product-card, .offer-card, .suit-item");
        if (productCard) {
            const product = {
              name: productCard.querySelector("h3")?.innerText || "Unnamed Product",
              description: productCard.querySelector("p")?.innerText || "",
              price: productCard.querySelector(".combo-price, .price")?.innerText || "₹0",
              image: productCard.querySelector("img")?.src || ""
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${product.name} added to your bag!`);
        }
      }

      const removeBtn = e.target.closest('button[data-remove-index]');
      if (removeBtn) {
          const index = removeBtn.getAttribute('data-remove-index');
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          window.dispatchEvent(new Event('cart-updated')); 
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [location]);
}
