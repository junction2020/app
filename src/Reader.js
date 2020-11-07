import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { withRouter } from "react-router-dom";
 
class Reader extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    result: 'No result'
  };
  
  handleScan = data => {
    if (data) {
      this.props.history.push(`/sticker/${data}`)
      this.setState({
        result: data
      })
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
          fake result
        </button>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default withRouter(Reader);