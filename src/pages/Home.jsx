import * as React from 'react';
import { Helmet } from 'react-helmet';
import phonebook from './FreeVector-Phonebook.png';
import './Home.css';

export default function Home() {
  return (
    <div className="homediv">
      <Helmet>
        <title>Contacts App</title>
      </Helmet>
      <div className="textdiv">
        <h2>Welcome to the Contacts App!</h2>
        <p>Please login or register if you are new user!</p>
      </div>
      <img src={phonebook} alt="phonebook" />
    </div>
  );
}
