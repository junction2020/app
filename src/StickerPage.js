import { Link } from "react-router-dom";
import { Component } from "react";
import chickenjpg from "./assets/chicken-vector-illustration.png";
import Tilt from "react-tilt";
import ReactTooltip from "react-tooltip";
import * as moment from "moment";

class StickerPage extends Component {
  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
    return (
      <div className="mt-10 container mx-auto w-full lg:w-4/5 xl:w-1/2">
        <div className="border-solid border-8 border-green-400 rounded-b-2xl rounded-t-2xl flex flex-wrap h-full pt-12 bg-gradient-to-r from-teal-400 to-blue-500">
          {this.props.stickers.slice(0, 15).map((sticker, i) => (
            <div
              key={i}
              className="h-auto items-stretch w-1/3 mb-12 h-3 flex justify-center"
              data-tip={"You gained this " + moment(sticker.timestamp).fromNow()}
            >
              <Tilt className="Tilt" options={{ max: 60 }}>
                <Link to={"sticker/" + sticker.id}>
                  <div
                    className="rounded-full w-16 md:w-32 h-16 md:h-32 md:p-5 ml-5 mr-5 md:ml-20 md:mr-20 bg-gray-300 flex justify-center items-center growing"
                  >
                    <img
                      className={`object-contain w-full placeholder_chicken`}
                      src={sticker.brand.logo}
                      alt={"unicorn" + i}
                    />
                  </div>
                </Link>
              </Tilt>
            </div>
          ))}
          {this.props.stickers.length < 15 &&
            [...Array(15 - this.props.stickers.length)].map((_, index) => (
              <div
                key={index}
                className="h-auto items-stretch w-1/3 mb-12 h-3 flex justify-center"
              >
                <div className="Tilt-inner">
                  <div className="rounded-full w-16 md:w-32 h-16 md:h-32 md:p-5 ml-5 mr-5 md:ml-20 md:mr-20 flex items-center justify-center bg-gray-300">
                    <img
                      className={`object-contain w-full placeholder_chicken img-gray`}
                      src={chickenjpg}
                      alt={"unicorn" + index}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <ReactTooltip effect="solid" place="top" />
      </div>
    );
  }
}

export default StickerPage;
