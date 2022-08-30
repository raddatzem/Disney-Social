import React from 'react';
import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import viewsRoutes from './views/routes';
import { RequireAuth } from './utils/requiredAuth';
import { Layout } from './components/layout';
import {Home} from './views';
 
//!!! ###DO NOT EDIT### !!!
//EDIT >> /views/routes << INSTEAD!!!
function Routes() {
 return (
   <BrowserRouter>
     <ReactRoutes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         {viewsRoutes.map((item: any, i: any) => {
           if (item.authRequired) {
             return (
               <Route key={i} path={item.path} element={
                 <RequireAuth>
                   {item.renderer()}
                 </RequireAuth>
               } />
             );
           } else {
             return (
               <Route key={i} path={item.path} element={item.renderer()} />
             );
           }
         })}
       </Route>
     </ReactRoutes>
   </BrowserRouter>
 );
        }

export default Routes;