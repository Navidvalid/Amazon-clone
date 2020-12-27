import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/LoginPage/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Checkout/Subtotal/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Checkout/Order/Orders';

const promise = loadStripe(
  'pk_test_51I2rp1HmZyAJRfzGJuBL3aJYKiVhbaazd5bWcj5YU9OlfwJ2cEZYfcokEPzmlx1QMQBpcMpv8CjVRIGhdJFKTdVy00U5kj3oKs'
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/order'>
            <Header />
            <Orders />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
