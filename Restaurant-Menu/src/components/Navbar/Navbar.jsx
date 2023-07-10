import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      {/* <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" /> */}
      {/* </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#homes">Home</a></li>
        <li className='p__opensans'><a href="#abo">About</a></li>
        <li className='p__opensans'><a href="#menus">Menu</a></li>
        <li className='p__opensans'><a href="#awars">Awards</a></li>
        <li className='p__opensans'><a href="#contacts">Contact</a></li>
      </ul> */}
      {/* <div className='app__navbar-login'>
        <a href="#logisn" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book table</a>
      </div> */}
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            {/* <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#homes">Home</a></li>
              <li className='p__opensans'><a href="#abouts">About</a></li>
              <li className='p__opensans'><a href="#menus">Menu</a></li>
              <li className='p__opensans'><a href="#award">Awards</a></li>
              <li className='p__opensans'><a href="#contacts">Contact</a></li>
            </ul> */}
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
