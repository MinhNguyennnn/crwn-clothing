import React from "react";
import './homepage.styles.scss'

export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="contain">
            <h1 className="title">HATS</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="contain">
            <h1 className="title">JACKETS</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="contain">
            <h1 className="title">WOMEN</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="contain">
            <h1 className="title">MEN</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
