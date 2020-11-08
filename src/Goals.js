import { Component } from "react";
import "./assets/main.css";
import { goals } from "./data";
import { withRouter } from "react-router-dom";

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    console.log("Goals location state:", this.props.match.params.pageIndex);
    return (
      <div className="mt-20 container mx-auto">
        <div className="flex flex-wrap -mx-2">
          {goals.map((goal, i) => (
            <div key={i} className="flex h-auto items-stretch w-full sm:w-1/2 md:w-1/3 mb-12 h-12 px-4">
              <div className="relative rounded overflow-hidden shadow-lg h-full">
                <div className="absolute right-0 top-0 mt-2">
                  <span className="inline-block text-gray-900 bg-gray-200 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    active
                  </span>
                </div>

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
