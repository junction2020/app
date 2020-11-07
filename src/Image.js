import React,{Component} from 'react';
import axios from "axios";
  
class Image extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null,
      status: null,
      btnDisabled: true,
      tags: [],
      img: ""
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] });
      this.setState({btnDisabled: false});
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
      let post = axios.post("http://127.0.0.1:5000/upload", formData); 
      post.then(res =>{
        if(res.status === 200){
          this.setState({
            status: "Uploaded successful!",
            tags: res.data.tags,
          });
          this.setState({img: URL.createObjectURL(this.state.selectedFile) });
        } else {
          this.setState({
            status: "Upload failed!"
          });
        }

      })


      console.log(this.state.status)
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
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div> 
          <input type="file" onChange={this.onFileChange} /> 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={this.state.btnDisabled} onClick={this.onFileUpload}> 
            Upload! 
          </button> 
          {this.fileData()} 
          <div className="mt-12 text-lg">
            {this.state.status}
          </div>
          <div class="flex mb-4">
            <div class="w-1/2">
              {this.state.tags && (
                <table class="table-auto">
                  <thead>
                    <tr>
                      <th class="px-4 py-2">Tag</th>
                      <th class="px-4 py-2">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tags.map((tag, i) => (
                      <tr key={i}>
                        <td class="border px-4 py-2">{tag[0]}</td>
                        <td class="border px-4 py-2">{tag[1]}</td>
                      </tr>
                    ))}

                  </tbody>
                </table> 
              )}
              </div>
              <div class="w-1/2">
                {this.state.img && <img src={this.state.img}/>}
              </div>
          </div>
        </div> 
      ); 
    } 
  } 
  
  export default Image; 