import './Header.css';
import React, { Component } from 'react';

import classNames from 'classnames';

import Menu from '../Menu';

const menuItems = [
  { link: 'https://geekbrains.com', title: 'Home' },
  { link: 'https://geekbrains.com/news', title: 'News' } 
]

export default class Header extends Component {
  static defaultProps = {
    size: 'maxi'
  }

  render () {
    const { size, children } = this.props;
    const headerClasses = classNames({
      header: true,
      'header--mini': size === 'mini',
      'header--maxi': size === 'maxi',
    })

    return (
      <div className={headerClasses}>
        Hello from header
        <div>{children}</div>
        <Menu items={menuItems} />
      </div>
    )
  }
}