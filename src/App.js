import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={'/shop'} component={ShopPage} />
        <Route path={'/signin'} component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
