import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import FavoriteBeers from "./pages/FavoriteBeers";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div id="App">
      <Router>
        <div className="app-header">
          <Navbar />
        </div>
        <div id="main-content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <Route
              exact
              path="/favorites/:id"
              component={FavoriteBeers}
            ></Route>
          </Switch>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
