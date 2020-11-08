import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="sticky bottom-0 w-full text-gray-700 bg-green-600">
        {/*<div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">*/}
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between mt-24">
          <div className="p-4 flex flex-row items-center justify-between">
            <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
              Sticker Collection World - Powered by HKScan | @Hackjunction 2020
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
