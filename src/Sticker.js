import { Component } from "react";
import "./assets/main.css";
import { stickers } from "./data";
import { barChartData, barChartOptions } from "./chart-data";
import { Chart, Bar } from "react-chartjs-2";

class Sticker extends Component {
  componentWillMount() {
    Chart.Legend.prototype.afterFit = function () {
      this.height = this.height + 50;
    };
  }
  render() {
    return (
      <div className="mt-20 container mx-auto">
        <h3 className="text-2xl font-bold mb-12">
          {stickers[this.props.match.params.id].brand.name}
        </h3>
        <div className="flex flex-wrap mb-8 -mx-8">
          <div
            style={{ height: "400px" }}
            className="items-stretch w-full md:w-1/3 px-8 mb-12"
          >
            <h3 className="text-xl font-bold text-center mb-4">Chicken 🐔</h3>
            <Bar data={barChartData(0)} options={barChartOptions} />
          </div>
          <div
            style={{ height: "400px" }}
            className="items-stretch w-full md:w-1/3 px-8 mb-12"
          >
            <h3 className="text-xl font-bold text-center mb-4">Pork 🐷</h3>
            <Bar data={barChartData(1)} options={barChartOptions} />
          </div>
          <div
            style={{ height: "400px" }}
            className="items-stretch w-full md:w-1/3 px-8 mb-12"
          >
            <h3 className="text-xl font-bold text-center mb-4">Beef 🐮</h3>
            <Bar data={barChartData(2)} options={barChartOptions} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div class="w-full mx-auto sm:w-1/3 mb-12 rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://www.organicauthority.com/.image/t_share/MTU5MzI5ODM5Njc2MjA0MjQ2/group-of-free-range-chickens-foraging-in-meadow-grass.jpg"
              alt="Roam freee"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Roam free</div>
              <p class="text-gray-700 text-base">
                Our animals are roam free. They have enough space and are not
                locked in cages.
              </p>
            </div>
          </div>
          <div class="w-full mx-auto sm:w-1/3 mb-12 rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-fc6ueumjahkk5r615ctem0ivk5-20160925014715.Medi.jpeg"
              alt="Antibiotics"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">No antibiotics</div>
              <p class="text-gray-700 text-base">
                Our animals do not get any antibiotic injections, while a lot of
                animals around the world get them.
              </p>
            </div>
          </div>
        </div>
        <ul className="list-disc">
          <li className="text-xl">Our animals roam free</li>
          <li className="text-xl">Our animals have no antibiotic injection</li>
        </ul>
      </div>
    );
  }
}

export default Sticker;
