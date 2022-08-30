import React from 'react';
import {
 Timeline as TimelineView,
 Home as HomeView,
 Login as LoginView
} from '.';
 
const routes = [
 {
   path: '/',
   renderer: (params = {}) => <HomeView {...params} />,
   authRequired: false
 },
 {
   path: '/home',
   renderer: (params = {}) => <HomeView {...params} />,
   authRequired: false
 },
 {
   path: '/timeline',
   renderer: (params = {}) => <TimelineView {...params} />,
   authRequired: true
 },
 {
   path: '/login',
   renderer: (params = {}) => <LoginView {...params} />,
   authRequired: false
 }
];
 
export default routes;
