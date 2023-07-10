import React from 'react';
import { SubHeading } from "../../components";
import './Chef.css';
import { images } from "../../constants";
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className='app__wrapper_img app__wrapper-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>what we blieve in.</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />

          <p className='p__opensans'>Lorem ipusm</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut cupiditate tenetur assumenda quia in possimus vel? Incidunt quam, nihil dicta nobis illo optio impedit dignissimos consequatur aut, eum veniam.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
