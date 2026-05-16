
import React, { useEffect } from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiLogIn } from 'react-icons/fi';


export default function Index() {
  useEffect(() => {
    const cssFiles = ["index.css"];
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
      

  <section className="video-section">
   
    <video autoPlay muted loop playsInline className="landing-video">
      <source src="/White and Grey Simple Animated Formal Mens Wear Promo Video4555.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="video-overlay">


     
      <a href="/home">
        <button className="cta">
          <span className="hover-underline-animation"> Shop now </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  </section>


    </>
  );
}
