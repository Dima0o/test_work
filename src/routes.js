import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import Counter from 'components/Counter';

export default [
  {
    path: '/users',
    component: UserList,
    exact: true
  },
  {
    path: '/users/:userId',
    component: User,
    exact: true
  },
  {
    path: '/',
    component: Counter,
    exact: true
  }
]