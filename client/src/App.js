import logo from './logo.svg';
import './App.css';
import Searchpage from './pages/Searchpage';
import Signup from './pages/signup';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './pages/gameDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Searchpage}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
        {/* <Details /> */}
      </div>
    </Router>
  );
}

export default App;
