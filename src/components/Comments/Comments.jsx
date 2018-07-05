import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comments extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  }

  static defaultProps = {
    items: []
  }

  componentWillMount() {
    // До render
  }

  componentWillReceiveProps(nextProps) {
    this.props
  }

  shouldComponentUpdate() {

  }

  componentWillUpdate() {}

  render () {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, idx) => <li key={idx}>{item.name}: {item.text}</li>)}
      </ul>
    );
  }
  
  componentDidUpdate() {

  }

  componentDidCatch() {

  }

  componentDidMount() {
    // После рендер
  }

  componentWillUnmount() {

  }
}