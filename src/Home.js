import React, { Component } from "react";
import "./assets/main.css";
import StickerPage from "./StickerPage";
import { stickers } from "./data";
import * as stickerManager from "./stickerManager";

class Home extends Component {
  render() {
    return (
      <div>
        <StickerPage stickers={stickerManager.loadStickers()} />
      </div>
    );
  }
}

export default Home;
