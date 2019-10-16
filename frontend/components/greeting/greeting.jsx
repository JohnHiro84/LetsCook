import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
    <Link to="/" >
      <h1>Lets Cook!</h1>
    </Link>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <Link to="/" className="header-left">
        <h2>Lets Cook!</h2>
      </Link>
      <div className="header-right">
      <Link className="header-link" to="/">Home</Link>
      <Link className="header-link" to="/search" >Search</Link>
      <Link className="header-link" to="/yourrecipes">Your Recipes</Link>
      <Link className="header-link" to="/newrecipe" >Submit Recipe!</Link>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>

      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
