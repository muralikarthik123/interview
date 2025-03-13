import React, { useState } from 'react';
import './header.css';
import Footer from './f1.jsx';
import Data from './data.json';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Filter the data based on searchText (case insensitive)
  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="header">
      {/* Hamburger Button */}
      <button className="nav" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>

      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'mob' : 'lap'}>
        <button onClick={toggleMenu} className="close">
          <RxCross1 className="cancel" />
        </button>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Services</li>
      </ul>

      <hr />

      {/* Search and Filter */}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='search'
        />

        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                marginLeft: '5%',
                marginTop: '100px',
              }}
            >
              <img src={item.image} className="images" alt={item.name} />
              <p>
                <strong>Name:</strong> {item.name}
                <br />
                <br />
                <strong>Storage:</strong> {item.storage}
              </p>
            </div>
          ))
        ) : (
          <p style={{ marginLeft: '5%', marginTop: '50px' }}>
            No results found!
          </p>
        )}
      </div>

      <hr />

      <Footer />
    </div>
  );
}
