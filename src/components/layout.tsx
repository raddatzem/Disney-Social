// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button} from '@aws-amplify/ui-react';
import "./navbar.css"
 
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
     <nav className="NavbarItems">
     <h1 className="navbar-logo">Disney Social</h1>
     <img className='icon' src=""></img>
       <Button className='nav-links' onClick={() => navigate('/')}>Home</Button>
       
       <Button className='nav-links'onClick={() => navigate('/cruisenews')}>
         Disney Cruise
       </Button>
       <Button className='nav-links' onClick={() => navigate('/timeline')}>
         Disney Parks
       </Button>
       <Button className='nav-links' onClick={() => navigate('/addArticle')}>
         Contribute
       </Button>
       <Button className='nav-links' onClick={() => navigate('/fetchArticles')}>
         User Articles
       </Button>
       {route !== 'authenticated' ? (
         <Button className='nav-links' onClick={() => navigate('/login')}>Login</Button>
       ) : (
         <Button className='nav-links' onClick={() => logOut()}>Logout</Button>
       )}
     </nav>
     <Outlet />
   </>
 );
}
