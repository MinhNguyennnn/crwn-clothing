import React from 'react'

import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

  constructor() {
    super();

    this.state = {
      currentuser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentuser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log('dmcs', this.state))
          console.log(this.state)
        });
      }
      this.setState({currentuser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header  currentuser={this.state.currentuser} />
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

export default App;
