import React from 'react';
import { withRouter } from 'react-router';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="menu-item__content">
            <p className="menu-item__title">{ title }</p>
            <span className="menu-item__subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);