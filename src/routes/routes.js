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
  TourDetail,
  Admins,
  Members,
  TourGuides,
  TourGuideDetail,
  MemberDetail,
  AdminDetail,
  Profile,
  AdminNew
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login, isUseMasterLayout: false },
  // Post
  { path: '/reviews', exact: true, component: Reviews },
  { path: '/reviews/:id/detail', exact: true, component: ReviewDetail },
  { path: '/questions', exact: true, component: Questions },
  { path: '/questions/:id/detail', exact: true, component: QuestionsDetail },
  { path: '/tours', exact: true, component: Tours },
  { path: '/tours/:id/detail', exact: true, component: TourDetail },
  // Uses
  { path: '/admins', exact: true, component: Admins },
  { path: '/admins/:id/detail', exact: true, component: AdminDetail },
  { path: '/members', exact: true, component: Members },
  { path: '/members/:id/detail', exact: true, component: MemberDetail },
  { path: '/tourguides', exact: true, component: TourGuides },
  { path: '/tourguides/:id/detail', exact: true, component: TourGuideDetail },
  { path: '/profile', exact: true, component: Profile },
  { path: '/admins/create-new', exact: true, component: AdminNew },
  // Not found
  { component: NotFound, isUseMasterLayout: false }

];

export default routes;
