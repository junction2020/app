import { Component } from "react";
import "./assets/main.css";
import Home from "./Home";
import Header from "./Header";
import Goals from "./Goals";
import Code from "./Code";
import Sticker from "./Sticker";
import QR from "./QR";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/qr">
            <QR />
          </Route>
          <Route path="/code">
            <Code />
          </Route>
          <Route path="/goals">
            <Goals />
          </Route>
          <Route path="/sticker/:id" component={Sticker} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
