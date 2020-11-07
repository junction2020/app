import { Component } from 'react';
import './assets/main.css'
import {stickers} from "./data";

class Sticker extends Component {
  render() {
    return (
    <div className="mt-20 container mx-auto">
        {this.props.match.params.id} {stickers[this.props.match.params.id].brand.name}
    </div>

  )};


}

export default Sticker;
