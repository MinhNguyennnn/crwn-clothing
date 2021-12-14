import './App.css';
import { Route } from 'react-router-dom';

import HomePage from '../src/pages/homepage/homepage.component'

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
