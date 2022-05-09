import React from "react";
import "./mobile.css";
import { Link } from "react-router-dom";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fi fi-rr-cross-circle"></i>
      </div>
      <div className="topic">
        <Link to="/Womens">WOMEN</Link>
        <Link to="/mens">MEN</Link>
        <Link to="/kids">KIDS</Link>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="/home">HOME</a>
        </div>
        <div className="mobile-option">
          <a href="/new-arrivals">NEW ARRIVALS</a>
        </div>
        <div className="mobile-option">
          <a href="/designers">DESIGNERS</a>
        </div>
        <div className="mobile-option">
          <a href="/clothing">CLOTHING</a>
        </div>
        <div className="mobile-option">
          <a href="/shoes">SHOES</a>
        </div>
        <div className="mobile-option">
          <a href="/bags">BAGS</a>
        </div>
        <div className="mobile-option">
          <a href="/accessories">ACCESSORIES</a>
        </div>
        <div className="mobile-option">
          <a href="/jewelary">JEWELRY</a>
        </div>
        <div className="mobile-option">
          <a href="/vacation">VACATION</a>
        </div>
        <div className="mobile-option">
          <a href="/sale">Sale</a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
