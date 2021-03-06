import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadPost } from 'actions/users';
import Forms from 'components/Forms/Forms';
import UserList from 'components/Users/UserList';

import Loading from 'components/Loading';

import { Container, Row, Col,CardDeck } from 'reactstrap';
class UserListContainer extends PureComponent {
  componentDidMount() {
    const { load } = this.props;

    load();
  }

  render() {
    const { users, loading } = this.props;

    return (
        <Container>
          <Row>
            
            <Col xs="12">
              <Row>

                  { loading ? <Loading /> : <UserList users={users} /> }
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    users: state.users.users,
    loading: state.users.loading
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadPost(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);