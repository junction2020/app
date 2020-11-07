import { Component } from 'react';
import './assets/main.css'
import {stickers} from "./data";
import {barChartData, barChartOptions} from "./chart-data";
import { Bar } from 'react-chartjs-2';


class Sticker extends Component {
    render() {
    return (
        <div className="mt-20 container mx-auto">
            <h3 className="text-xl font-bold mb-12">{stickers[this.props.match.params.id].brand.name}</h3>
            <Bar data={barChartData(this.props.match.params.id)} options={barChartOptions} />
        </div>
    )};

}

export default Sticker;
