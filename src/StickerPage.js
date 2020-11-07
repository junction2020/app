import { Link } from "react-router-dom";
import { Component } from "react";

class StickerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-20 container mx-auto px-20 stickercard">
        <div className="border-solid border-8 border-green-400 rounded-b-2xl rounded-t-2xl flex flex-wrap h-full pt-12 bg-gradient-to-r from-teal-400 to-blue-500">
          {this.props.stickers.map((sticker, i) => (
            <div key={i} className="h-auto items-stretch w-1/3 mb-12 h-3">
              <Link to={"sticker/" + i}>
                <div className="rounded-full h-auto w-70 p-5 ml-20 mr-20 flex items-center justify-center bg-gray-300">
                  <img
                    className={`object-contain w-full placeholder_chicken img-gray`}
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
