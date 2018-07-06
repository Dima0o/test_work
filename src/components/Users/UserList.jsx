import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import User from './User';

export default class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    users: []
  };

  render() {
    const { users } = this.props; 
    return (


                <Fragment>

                        {users.map((user, idx) => <User key={idx} user={user} />)}
                </Fragment>

    );
  }
}
