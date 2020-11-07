import { Component } from 'react';
import './assets/main.css'
import Reader from "./Reader";

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
    <div>
      <div className="mt-20 container mx-auto">
        {this.state.isToggleOn ? <Reader /> : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => this.handleClick()}>
            Scan QR Code
          </button>
        )}


      </div>
    </div>
  )};
}

export default QR;
