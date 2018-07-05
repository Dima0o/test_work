import './CommentsForm.scss';

import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
      error: false
    }
  }

  handlePropertyChange = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleSendClick = (event) => {
    const { onSend } = this.props;
    const { name, text } = this.state;
    if(!name.trim().length && !text.trim().length) {
      this.setState({
        error: true
      });
      event.preventDefault();
      return;
    }

    if(typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ name: '', text: '', error: false });
    }
    event.preventDefault();
  }

  render () {
    const { name, text, error } = this.state;

    const inputClass = classNames({
      'input--error': error
    });

    return (
      <form>
        Name: <input className={inputClass} type="text" onChange={this.handlePropertyChange('name')} value={name} /><br/>
        Message: <input className={inputClass} type="text"  onChange={this.handlePropertyChange('text')} value={text} /><br/>
        <button onClick={this.handleSendClick}>Send</button>
      </form>
    );
  } 
}