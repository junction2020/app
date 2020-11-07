import { Component } from 'react';
import './assets/main.css'
import {stickers} from "./data";
import {barChartData, barChartOptions} from "./chart-data";
import { Bar } from 'react-chartjs-2';

class Sticker extends Component {
    render() {
    return (
        <div className="mt-20 container mx-auto">
            {/* <h3 className="text-2xl font-bold mb-12">{stickers[this.props.match.params.id].brand.name}</h3> */}
            <div className="flex flex-wrap">
                <div className="h-auto items-stretch w-1/3 mb-12 h-12">
                    <h3 className="text-xl font-bold text-center mb-4">Chicken 🐔</h3>
                    <Bar data={barChartData(0)} options={barChartOptions} />
                </div>
                <div className="h-auto items-stretch w-1/3 mb-12 h-12">
                    <h3 className="text-xl font-bold text-center mb-4">Pork 🐷</h3>
                    <Bar data={barChartData(1)} options={barChartOptions} />
                </div>
                <div className="h-auto items-stretch w-1/3 mb-12 h-12">
                    <h3 className="text-xl font-bold text-center mb-4">Beef 🐮</h3>
                    <Bar data={barChartData(2)} options={barChartOptions} />
                </div>
            </div>
        </div>
    )};

}

export default Sticker;
