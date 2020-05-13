import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App-top.styles.scss';
import './App.css';
import Footer from './components/footer/Footer';

let unsubscribeFromAuth = () => null;

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // createUserProfileDocument(user);
      setCurrentUser({ currentUser: user });
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <main>
      <header>
        <div className="App-top">
          <Header currentUser={currentUser} />
        </div>
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUpPage} />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
