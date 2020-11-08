import React, { Component } from "react";
import "./assets/main.css";
import StickerPage from "./StickerPage";
import * as stickerManager from "./stickerManager";

class Home extends Component {
  state = {
    amountOfPages: 0,
    pageIndex: 0,
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
        {this.state.pageIndex > 0 && (
          <button onClick={this.previousPage}>Vorige</button>
        )}
        <StickerPage stickers={this.state.currentPage} />
        {this.state.pageIndex < this.state.amountOfPages - 1 && (
          <button onClick={this.nextPage}>Volgende</button>
        )}
      </div>
    );
  }
}

export default Home;
