import React from 'react';
import './NavBar/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Términos y condiciones</a>
          <a href="/">Política de privacidad</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
