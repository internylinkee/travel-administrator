/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound,
  Reviews,
  ReviewDetail,
  Questions,
  QuestionsDetail,
  Tours,
  TourDetail
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login, isUseMasterLayout: false },
  // Post
  { path: '/posts', exact: true, component: Reviews },
  { path: '/posts/:id/detail', exact: true, component: ReviewDetail },
  { path: '/questions', exact: true, component: Questions },
  { path: '/questions/:id/detail', exact: true, component: QuestionsDetail },
  { path: '/tours', exact: true, component: Tours },
  { path: '/tours/:id/detail', exact: true, component: TourDetail },
  // Not found
  { component: NotFound, isUseMasterLayout: false }

];

export default routes;
