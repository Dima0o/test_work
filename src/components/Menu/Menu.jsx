import './Menu.scss';
import React, { Component } from 'react';

export default class Menu extends Component {
  static defaultProps = {
    items: []
  }

  render () {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, idx) => <li key={idx}><a href={item.link}>{item.title}</a></li>)}
      </ul>
    )
  }
}