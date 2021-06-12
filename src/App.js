import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path='/league/:leagueId'>
          <LeagueDetails></LeagueDetails>
          <Footer></Footer>
        </Route>
        <Route exact path='/'>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
