import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MoveiSeats from './Component/Home/MovieSeats/MoveiSeats';
import NoMatch from './Component/NoMatch/NoMatch';
import Login from './Component/Login/Login';
import PrivetRoute from './Component/Login/PrivetRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivetRoute path="/movieSeat/:id">
          <MoveiSeats/>
        </PrivetRoute>
         <Route path="/login">
          <Login/>
        </Route>
        <PrivetRoute exact path="/">
          <Home />
        </PrivetRoute>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
