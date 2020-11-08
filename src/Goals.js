import { Component } from "react";
import "./assets/main.css";
import { goals } from "./data";
import { withRouter } from "react-router-dom";
import * as stickerManager from "./stickerManager";

class Goals extends Component {
  state = {
    pledgedPages: {},
    pledgedIndex: null
  };

  onPledgeClick(index) {
    stickerManager.pledgePage(this.props.match.params.pageIndex, index);
    this.setState({
      pledgedPages: stickerManager.getPledgedPages(),
      pledgedIndex: index
    })
  }

  componentDidMount() {
    if (this.props.match.params.pageIndex) {
      let pledgedPages = stickerManager.getPledgedPages();
      this.setState({
        pledgedPages,
        pledgedIndex: pledgedPages[this.props.match.params.pageIndex] 
      })
    }
  }

  render() {
    let pageIndex = this.props.match.params.pageIndex;
    let isOnPledgedPage = pageIndex ? stickerManager.isPagePledged(pageIndex) : false;
    return (
      <div className="mt-20 container mx-auto">
        <div className="flex flex-wrap -mx-2">
          {goals.map((goal, i) => (
            <div key={i} className="flex h-auto items-stretch w-full sm:w-1/2 md:w-1/3 mb-12 h-12 px-4">
              <div className="relative rounded overflow-hidden shadow-lg h-full">
                {pageIndex &&
                  <div className="absolute right-0 top-0 mt-2">
                    <button
                      className={"text-white font-bold py-2 px-4 border border-blue-700 rounded mr-2 " + (isOnPledgedPage ? "bg-gray-500 hover:bg-gray-700 cursor-not-allowed" : "bg-green-500 hover:bg-green-700")}
                      onClick={() => this.onPledgeClick(i)}
                      disabled={isOnPledgedPage}
                    >
                      {!isOnPledgedPage ? "⭐ Pledge now!" : (this.state.pledgedIndex === i ? "Thanks! 🌎❤️" : "⭐ Pledge now!")}
                  </button>
                  </div>
                }

                <img
                  className="w-full"
                  src={goal.img_url}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{goal.title}</div>
                  <p className="text-gray-700 text-base">
                    {goal.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="w-full rounded bg-grey-light mt-2">
                    <div
                      className="absolute bottom-0 mb-4 bg-yellow-600 rounded text-xs leading-none py-1 text-center text-white"
                      style={{ width: `${goal.progress * 100}%` }}
                    >
                      {goal.progress * 100}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Goals);
