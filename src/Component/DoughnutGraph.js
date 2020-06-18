import React from 'react'
import {Doughnut} from 'react-chartjs-2';


export default function Dougnut(props){
	const data = {
		labels: [
			'Deaths',
			'Active',
			'Recovered'
		],
		datasets: [{
			data: [props.death, props.confirm, props.recover],
			backgroundColor: [
			'red',
			'green',
			'blue'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}]
	};
    return (
        <div>
            <Doughnut data={data} options={{ maintainAspectRatio: false }} width={"100%"} height={"250px"}/>
        </div>
    )
}