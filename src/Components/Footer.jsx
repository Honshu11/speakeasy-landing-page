import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white" id='footer'>
      <div className="container-fluid">
        <div className="row media-container">
          <div className="col">
            <a href="https://www.instagram.com">
              <i className="bi bi-instagram pe-2"></i>
            </a>
            <a href="https://www.facebook.com">
              <i className="bi bi-facebook pe-2"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="bi bi-twitter pe-2"></i>
            </a>
            <a href="https://www.tiktok.com">
              <i className="bi bi-tiktok pe-2"></i>
            </a>
            <a href="https://www.whatsapp.com">
              <i className="bi bi-whatsapp pe-2"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col pt-1">
            <small>&#169; Copyright Gonzo LLC.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;