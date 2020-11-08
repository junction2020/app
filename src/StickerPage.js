import { Link } from "react-router-dom";
import { Component } from "react";
import chickenjpg from "./assets/chicken-vector-illustration.png";

class StickerPage extends Component {
  render() {
    console.log("stickers", this.props.stickers);
    return (
      <div className="mt-20 container mx-auto w-full lg:w-4/5 xl:w-1/2">
        <div className="border-solid border-8 border-green-400 rounded-b-2xl rounded-t-2xl flex flex-wrap h-full pt-12 bg-gradient-to-r from-teal-400 to-blue-500">
          {this.props.stickers.slice(0, 15).map((sticker, i) => (
            <div key={i} className="h-auto items-stretch w-1/3 mb-12 h-3">
              <Link to={"sticker/" + sticker.id}>
                <div className="rounded-full w-16 md:w-32 h-16 md:h-32 p-5 ml-20 mr-20 flex items-center justify-center bg-gray-300">
                  <img
                    className={`object-contain w-full placeholder_chicken`}
                    src={sticker.brand.logo}
                    alt={"unicorn" + i}
                  />
                </div>
              </Link>
            </div>
          ))}
          {this.props.stickers.length < 15 &&
            [...Array(15 - this.props.stickers.length)].map((_, index) => (
              <div key={index} className="h-auto items-stretch w-1/3 mb-12 h-3">
                <div className="rounded-full w-16 md:w-32 h-16 md:h-32 p-5 ml-20 mr-20 flex items-center justify-center bg-gray-300">
                  <img
                    className={`object-contain w-full placeholder_chicken img-gray`}
                    src={chickenjpg}
                    alt={"unicorn" + index}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default StickerPage;
