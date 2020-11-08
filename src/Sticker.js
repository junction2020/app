import { Component } from 'react';
import './assets/main.css'
import {stickers, brands} from "./data";
import {barChartData, barChartOptions} from "./chart-data";
import { Chart, Bar } from 'react-chartjs-2';

class Sticker extends Component {
    componentWillMount() {
        Chart.Legend.prototype.afterFit = function() {
            this.height = this.height + 50;
        };
    }
    render() {
    let name = stickers[this.props.match.params.id].brand.name;
    let produce = brands.filter(brand => brand.name === name)[0]?.produce;
    console.log(produce);
    return (
        <div className="mt-20 container mx-auto">
            <h3 className="text-2xl font-bold mb-12">{name}</h3>
            <div className="flex flex-wrap -mx-4">
                
                {produce.includes("chicken") && (
                    <div style={{height: "400px"}} className="items-stretch w-full mb-24 px-4 md:w-1/3">
                        <h3 className="text-xl font-bold text-center mb-4">Chicken 🐔</h3>
                        <Bar data={barChartData(0, name)} options={barChartOptions} />
                    </div>
                )}
                {produce.includes("pork") && (
                    <div style={{height: "400px"}} className="items-stretch w-full mb-24 px-4 md:w-1/3">
                        <h3 className="text-xl font-bold text-center mb-4">Pork 🐷</h3>
                        <Bar data={barChartData(1, name)} options={barChartOptions} />
                    </div>
                )}
                {produce.includes("beef") && (
                    <div style={{height: "400px"}} className="items-stretch w-full mb-24 px-4 md:w-1/3">
                        <h3 className="text-xl font-bold text-center mb-4">Beef 🐮</h3>
                        <Bar data={barChartData(2, name)} options={barChartOptions} />
                    </div>
                )}
                <div className="items-stretch w-full mb-24 px-4 md:w-1/3">
                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://www.organicauthority.com/.image/t_share/MTU5MzI5ODM5Njc2MjA0MjQ2/group-of-free-range-chickens-foraging-in-meadow-grass.jpg" alt="Roam freee"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Roam free</div>
                            <p className="text-gray-700 text-base">
                            Our animals are roam free. They have enough space and are not locked in cages.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="items-stretch w-full mb-24 px-4 md:w-1/3">
                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-fc6ueumjahkk5r615ctem0ivk5-20160925014715.Medi.jpeg" alt="Antibiotics"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">No antibiotics</div>
                            <p className="text-gray-700 text-base">
                            Our animals do not get any antibiotic injections, while a lot of animals around the world get them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Sticker;
