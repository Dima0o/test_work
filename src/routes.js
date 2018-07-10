import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import Job from 'containers/Job';
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
    path: '/hh',
    component: Job,
    exact: true
  },
  {
    path: '/',
    component: Counter,
    exact: true
  }
]