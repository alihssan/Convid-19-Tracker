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
			'#e6adbc',
			'#399cbd',
			'#cfb53b'
			],
			hoverBackgroundColor: [
			'#e75480',
			'blue',
			'yellow'
			]
		}]
	};
    return (
        <div>
            <Doughnut data={data} options={{ maintainAspectRatio: false }} width={"95%"} height={"250px"}/>
        </div>
    )
}