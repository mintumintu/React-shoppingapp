import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
