/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound,
  ListPosts,
  DetailPost
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login },
  // Post
  { path: '/listposts', exact: true, component: ListPosts },
  { path: '/detailpost', exact: true, component: DetailPost },
  // Not found
  { component: NotFound }

];

export default routes;
