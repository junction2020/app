import { Component } from 'react';
import './assets/main.css'
import Image from "./Image";
import Header from "./Header";

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <div className="mt-20 container mx-auto">
        <Image />
      </div>
    </div>
  )};
}

export default App;
