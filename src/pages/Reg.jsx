
import React, { useEffect } from 'react';

export default function Reg() {
  useEffect(() => {
    const cssFiles = ["loginandreg.css"];
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
      

<div className="container">

  <div className="left-side">
    <div className="logo-container">
      <img className="logo" src="brand.logo.png" alt="MENZO Logo" />
      <div className="tagline">Confidence in Every Thread</div>
    </div>
  </div>


  <div className="right-side">
    <div className="login-form">
      <h2>Register</h2>
      <p className="welcome-text">Welcome back to MENZO</p>
      <form action="login.html">
        <label htmlFor="username"><i className="fa-solid fa-user"> </i> Username</label>
        <input type="text" id="username" placeholder="Enter your username" required />

        <label htmlFor="email"><i className="fa-solid fa-envelope"> </i>  E-mail</label>
        <input type="email" id="email" placeholder="Enter your e-mail" required />

        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</div>
<div className="top-buttons">
  <a href="/login" className="btn">login</a>
  <a href="#" className="btn">Help</a>
</div>


    </>
  );
}
