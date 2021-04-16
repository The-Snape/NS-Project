import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import PA1 from './PA1';
import Home from './Home';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/pa1">
            <PA1/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
