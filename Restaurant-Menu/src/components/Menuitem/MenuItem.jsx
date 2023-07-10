import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='P__cormorant' style={{ color: '#dcca87' }}>{title}</p>
      </div>
<div className='app__menuitem-dash'/>
      <div className='app__menuitem-price'>
        <p className='P__cormorant'>{price}</p>
      </div>

    </div>

<div className='app__,emiote-sib'>

<p className='p__opensans'  style={{color:'#AAA'}}>{tags}</p>

</div>

  </div>
);

export default MenuItem;

 