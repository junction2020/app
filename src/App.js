import { Component } from 'react';
import './assets/main.css'
import Home from "./Home";
import Header from "./Header";
import QR from "./QR";
import { Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/qr"><QR /></Route>
      </Switch>
    </div>

  )};


}

export default App;
