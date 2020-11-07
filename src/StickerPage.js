import { stickers } from "./data";
import { Link } from "react-router-dom";
import { Component } from "react";

class StickerPage extends Component {
  render() {
    return (
      <div className="mt-20 container mx-auto px-20 stickercard">
        <div className="border-dotted border-8 border-green-200 rounded-b-2xl rounded-t-2xl flex flex-wrap h-full pt-12">
          {stickers.map((sticker, i) => (
            <div key={i} className="h-auto items-stretch w-1/3 mb-12 h-3">
              <Link to={"sticker/" + i}>
                <div className="rounded-full h-auto w-100 p-5 ml-20 mr-20 flex items-center justify-center bg-gray-300">
                  <img
                    className={`object-contain w-full ${
                      i % 3 === 0 && "img-gray"
                    }`}
                    src={sticker.sticker_image}
                    alt={"unicorn" + i}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StickerPage;
