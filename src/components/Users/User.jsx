import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, FormFeedback } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class User extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      body: PropTypes.string
    }).isRequired
  };
  showTitelPost=()=>{
    const { user } = this.props;
    alert(user.title);
  }
  render() {
    const { user } = this.props; 
    return (
            <div to={`/users/${user.id}`}>
              <Card inverse>
                <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle onClick={this.showTitelPost}>{user.title}</CardTitle>
                  <CardText>{user.body}</CardText>
                  <FormFeedback>You will not be able to see this</FormFeedback>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
              
            </div>

    );
  }
}
//https://redux-form.com/6.5.0/examples/simple/