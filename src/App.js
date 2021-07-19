import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home/home.js";
import goods from "./page/goodsPage/goodsPage.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={Home}></Route>
        <Switch>
          <Route exact path={"/Home"} component={Home}></Route>
          <Route path={"/page1"} component={goods}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
