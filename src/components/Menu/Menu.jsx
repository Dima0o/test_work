
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Menu extends Component {
  static defaultProps = {
    items: []
  }

  render () {
    const { items } = this.props;

    return (
      <ul class="navbar-nav mr-auto">
        {items.map((item) => <li><a href={item.link}>{item.title}</a></li>)}
      </ul>
    )
  }
}