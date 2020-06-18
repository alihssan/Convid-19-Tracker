import React from 'react';
import {Line} from 'react-chartjs-2';


export default function LineGraph(props){
  let key=Object.keys(props.data.dataa)
  console.log(`${key}khan`)
  const value=props.data.dataa
  let x_label=key.map(val=>(value[val]["Cases"]))
  let y=key.map(val=>value[val]["Date"].slice(0,10))
  console.log(x_label,y)
  const data = {
    labels: y,
    datasets: [
      {
        label: 'Active Cases',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'green',
        borderColor: 'green',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: x_label,
      }
    ]
  };
    return(
        <div>
        <Line data={data}  options={{ maintainAspectRatio: false }} width={"100%"} height={"250px"}/>
        </div>
    )
}
