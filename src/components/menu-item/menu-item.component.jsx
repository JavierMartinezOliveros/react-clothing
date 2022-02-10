import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="menu-item__content">
            <p className="menu-item__title">{ title }</p>
            <span className="menu-item__subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;