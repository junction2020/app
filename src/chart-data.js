export const barChartData = (i) => {
	let data = [farmData[i].water_use, farmData[i].drink_use, farmData[i].wash_use];
	return {
		labels: [
			'Water use 💧',
			'Drink use 🚰',
			'Wash use 🧼'
		],
		datasets: [{
			label: 'Water use',
			data: data,
			backgroundColor: ["#843AF4", "#FA00BD", "#FF3582", "#FF8455", "#FFC448", "#F9F871"]
		}]
	};
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
			ticks: {
				fontSize: 16,
				fontColor: "#343434",
				beginAtZero: true,
				max: 4000
			}
		}]

    },
	tooltips: {
		enabled: false
	}
};


export const farmData = [
	{"amount": 455000, "water_use": 3035.5, "drink_use": 2825.5, "wash_use": 210},
	{"amount": 433000, "water_use": 2801.5, "drink_use": 2611.5, "wash_use": 190},
	{"amount": 495000, "water_use": 3200, "drink_use": 3000, "wash_use": 200},
	{"amount": 450000, "water_use": 2998, "drink_use": 2788, "wash_use": 210},
	{"amount": 452000, "water_use": 3010, "drink_use": 2840, "wash_use": 170},
	{"amount": 470000, "water_use": 3244, "drink_use": 3044, "wash_use": 200},
	{"amount": 425000, "water_use": 2800, "drink_use": 2610, "wash_use": 190},
	{"amount": 420000, "water_use": 2750, "drink_use": 2540, "wash_use": 210},
	{"amount": 456000, "water_use": 3100, "drink_use": 2900, "wash_use": 200},
	{"amount": 455000, "water_use": 2900, "drink_use": 2670, "wash_use": 230}
]