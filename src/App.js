import React from 'react'

import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.action';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

const Jackets = () => {
  return (
    <div>
      <h1>Jackets PAGE</h1>
    </div>
  )
}

const Sneakers = () => {
  return (
    <div>
      <h1>Sneakers PAGE</h1>
    </div>
  )
}

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentuser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route exact path='/shop/Jackets' component={Jackets} />
          <Route exact path='/shop/Sneakers' component={Sneakers} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
