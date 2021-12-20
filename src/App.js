import './App.css';
import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';

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


function App() {
  return (
    <div>
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/Jackets' component={Jackets} />
        <Route exact path='/shop/Sneakers' component={Sneakers} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>

  );
}

export default App;
