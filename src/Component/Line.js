import React from 'react';
import {Line} from 'react-chartjs-2';


export default function LineGraph(props){
  let key=Object.keys(props.data.dataa)
  const value=props.data.dataa
  let x_label=key.map(val=>(value[val]["Cases"]))
  let y=key.map(val=>value[val]["Date"].slice(0,10))
  const data = {
    labels: y,
    datasets: [
      {
        label: 'Active Cases',
        fill: true,
        lineTension: 0.5,
        backgroundColor: '#44a6c6',
        borderColor: '#44a6c6',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "pink",
        pointBackgroundColor: 'pink',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'pink',
        pointHoverBorderColor: 'pink',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 15,
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
