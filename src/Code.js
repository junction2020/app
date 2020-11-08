import { Component } from 'react';
import './assets/main.css';
import QRCode from 'react-qr-code';


class Sticker extends Component {
  render() {
    return (
    <div className="mt-20 container mx-auto">
        <QRCode value="markmoestweerperseeenandereqrcode" />
    </div>

  )};


}

export default Sticker;
