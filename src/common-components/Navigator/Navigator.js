import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigator.scss';

const linkCssClassName = 'navigator-link';
const activeLinkCssClassName = 'active-link';

export default () => (
  <div className='navigator'>
    <NavLink
      className={linkCssClassName}
      activeClassName={activeLinkCssClassName}
      to='/'
      exact
    >
      Home
    </NavLink>
    <NavLink
      className={linkCssClassName}
      activeClassName={activeLinkCssClassName}
      to='/blocks'
      exact
    >
      Blocks
    </NavLink>
  </div>
);
