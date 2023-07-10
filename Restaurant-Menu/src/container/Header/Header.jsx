import React from 'react';
import { SubHeading } from '../../components'
import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Find Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem' }}>This is My sample site based on my these skills React.js RWD CSS3 and some others.</p>
      <button type='button' className='custom__button'>Explore Menu</button>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
