import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
 
export default function App() {
 return (
   <Authenticator.Provider>
     <Routes />
   </Authenticator.Provider>
 );
}



