import { Component } from 'react';
import './assets/main.css'

class Sticker extends Component {
  render() {
    return (
    <div className="mt-20 container mx-auto">
        {this.props.match.params.id}
    </div>

  )};


}

export default Sticker;
