import React,{Component} from 'react';
import axios from "axios";
  
class Image extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null,
      response: null,
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "photo", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      //TODO
      let res = axios.post("http://127.0.0.1:5000/upload", formData); 
      this.setState({
        response: res.status
      })
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 

          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div> 
          <input type="file" onChange={this.onFileChange} /> 
          <button onClick={this.onFileUpload}> 
            Upload! 
          </button> 
          {this.fileData()} 
          <div class="mt-12 text-lg">
            {this.state.status}
          </div>
        </div> 
      ); 
    } 
  } 
  
  export default Image; 