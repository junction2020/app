import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { withRouter } from "react-router-dom";
import * as stickers from "./stickerManager";
 
class Reader extends Component {
  
  handleScan = data => {
    if (data) {
      stickers.generateNewSticker(data);
      this.props.history.push(`/`)
    
    }
  }
  
  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => this.handleScan("1")}
        >
          Something is wrong - take me ahead&hellip;
        </button>
      </div>
    )
  }
}

export default withRouter(Reader);