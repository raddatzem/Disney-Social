// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button} from '@aws-amplify/ui-react';
 
//https://ui.docs.amplify.aws/react/guides/auth-protected
export function Layout() {
 const { route, signOut } = useAuthenticator((context) => [
   context.route,
   context.signOut,
 ]);
 const navigate = useNavigate();
 
 function logOut() {
   signOut();
   navigate('/');
 }
 return (
   <>
     <nav>
       <Button onClick={() => navigate('/')}>Home</Button>
       <Button onClick={() => navigate('/timeline')}>
         First Protected Route
       </Button>
       <Button onClick={() => navigate('/timeline')}>
         Second Protected Route
       </Button>
       {route !== 'authenticated' ? (
         <Button onClick={() => navigate('/login')}>Login</Button>
       ) : (
         <Button onClick={() => logOut()}>Logout</Button>
       )}
     </nav>
     <Outlet />
   </>
 );
}
