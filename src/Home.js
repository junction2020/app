import React, { Component } from "react";
import "./assets/main.css";
import StickerPage from "./StickerPage";
import * as stickerManager from "./stickerManager";

class Home extends Component {
  state = {
    amountOfPages: 0,
    pageIndex: 0,
    generationPossible: false,
    currentPage: [],
  };

  componentDidMount() {
    let amountOfPages = stickerManager.getAmountOfPages();
    let pageIndex = amountOfPages - 1;
    let currentPage = stickerManager.getStickersByPage(pageIndex);
    this.setState({
      amountOfPages,
      pageIndex,
      currentPage,
    });
  }

  previousPage = () => {
    let pageIndex = this.state.pageIndex - 1;
    let currentPage = stickerManager.getStickersByPage(pageIndex);
    this.setState({ pageIndex, currentPage });
  };

  nextPage = () => {
    let pageIndex = this.state.pageIndex + 1;
    let currentPage = stickerManager.getStickersByPage(pageIndex);
    this.setState({ pageIndex, currentPage });
  };

  render() {
    console.log(this.state.currentPage);
    return (
      <div>
        <StickerPage stickers={this.state.currentPage} />
        <div class="flex justify-around mt-8">
          {this.state.pageIndex > 0 ? (
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={this.previousPage}>Previous</button>
          ) : <span></span>}
          {this.state.generationPossible ? (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={this.previousPage}>Choose goal</button>

          ) : <span></span>}
          {this.state.pageIndex < this.state.amountOfPages - 1 ? (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
            onClick={this.nextPage}>Next</button>
          ) : <span></span>}
        </div>
      </div>
    );
  }
}

export default Home;
