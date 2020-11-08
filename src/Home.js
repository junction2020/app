import React, { Component } from "react";
import "./assets/main.css";
import StickerPage from "./StickerPage";
import * as stickerManager from "./stickerManager";
import { Link } from "react-router-dom";

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
    let isPledged = stickerManager.isPagePledged(this.state.pageIndex);
    return (
      <div>
        <div className="flex justify-center mt-5 text-2xl font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
          Sticker Page {this.state.pageIndex + 1} 🤓
        </div>
        <StickerPage stickers={this.state.currentPage} />
        <div class="flex justify-around mt-8">
          {this.state.pageIndex > 0 ? (
            <button
              class="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={this.previousPage}
            >
              Previous
            </button>
          ) : (
            <span></span>
          )}
          {!stickerManager.isPagePledged(this.state.currentPage) &&
          this.state.currentPage.length === 15 ? (
            <Link to={"goals/" + this.state.pageIndex}>
              <button
                className={
                  "text-white font-bold py-2 px-4 border border-blue-700 rounded " +
                  (isPledged
                    ? "bg-gray-500 hover:bg-gray-700 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700 text-white ")
                }
                disabled={isPledged}
              >
                {isPledged ? "Already pledged!" : "Choose goal"}
              </button>
            </Link>
          ) : (
            <span></span>
          )}
          {this.state.pageIndex < this.state.amountOfPages - 1 ? (
            <button
              className={
                "text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              }
              onClick={this.nextPage}
            >
              Next
            </button>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
