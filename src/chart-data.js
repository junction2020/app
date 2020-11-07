const farmData = [
	[{"footprint": 23, "co2": 12, "sq_animal": 4, "lifespan": 1.0, "outdoor": "yes", "antibiotic": "no"},
	{"footprint": 26, "co2": 12, "sq_animal": 2, "lifespan": 0.1, "outdoor": "no", "antibiotic": "yes"}],
	[{"footprint": 349, "co2": 14, "sq_animal": 5, "lifespan": 1.0, "outdoor": "yes", "antibiotic": "no"},
	{"footprint": 520, "co2": 14, "sq_animal": 2, "lifespan": 0.5, "outdoor": "no", "antibiotic": "yes"}],
	[{"footprint": 520, "co2": 2300, "sq_animal": 10, "lifespan": 3.0, "outdoor": "yes", "antibiotic": "no"},
	{"footprint": 630, "co2": 2300, "sq_animal": 5, "lifespan": 1.5, "outdoor": "no", "antibiotic": "yes"}]
];

export const barChartData = (i) => {
	let hkscan = Object.values(farmData[i][0]).filter((item, i) => i<4).map(val => val+(Math.random()-0.5)*val )
	let rest = Object.values(farmData[i][1]).filter((item, i) => i<4).map(val => val+(Math.random()-0.5)*val )
	console.log(hkscan);
	return {
		labels: [
			"Footprint", "CO2", "Sq. per animal", "Lifespan"
		],
		datasets: [{
			label: 'HKScan',
			data: hkscan,
			backgroundColor: ["#843AF4", "#FA00BD", "#FF3582", "#FF8455", "#FFC448", "#F9F871"]
		},
		{
			label: 'Rest',
			data: rest,
			backgroundColor: ["#E9EFF4"]
		}]
	}
};	

export const barChartOptions = {
	legend: {
		display: false,
		labels: {
			// This more specific font property overrides the global property
			fontColor: '#343434',
			fontSize: 16,
			fontStyle: 'bold',
			padding: 16,
		}
	},
	scales: {
        xAxes: [{
            gridLines: {
                display:false
			},
			ticks: {
				fontSize: 16,
				fontStyle: "bold",
				fontColor: "#343434"
			}
		}],
		yAxes: [{

			type: 'logarithmic',
			position: 'left',
			ticks: {
				fontSize: 16,
				fontColor: "#343434",
				beginAtZero: true,
				callback: function (value, index, values) {
					return Number(value.toString());//pass tick values as a string into Number function
				}
			},
			afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
				chartObj.ticks = [];
				chartObj.ticks.push(0.1);
				chartObj.ticks.push(1);
				chartObj.ticks.push(10);
				chartObj.ticks.push(100);
				chartObj.ticks.push(1000);
				chartObj.ticks.push(10000);
			}
		}]

    },
	tooltips: {
		enabled: false
	}
};
