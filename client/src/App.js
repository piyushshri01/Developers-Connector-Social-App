import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './components/redux/actions/authActions';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

// Redux stuff
import { Provider } from 'react-redux';
import store from './components/redux/store';

// check for token 
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decode = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decode));
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar/>  
            <Route exact path="/" component={ Landing }/>
            <div className="container">
              <Route exact path="/register" component={ Register }/>
              <Route exact path="/login" component={ Login }/>
            </div>
            <Footer/>      
          </div>
       </Router>
      </Provider>
      
      
    );
  } 
}

export default App;
