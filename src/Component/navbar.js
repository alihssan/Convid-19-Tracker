import React,{useContext} from 'react'
import {TiChartLine} from 'react-icons/ti'
import {Share} from './Sample'
import CountryDetail from './CountryDetail'
import Loader from './Loader'
import CountUp from 'react-countup'
  
export default function ShowData(){
    let dat=useContext(Share);
    let data2=dat.global
    return (
    <div className="sidedata">
            <h1><TiChartLine color="blue" size={25} style={{marginLeft:"-20px"}}/>{data2.TotalConfirmed ? <CountUp end={data2.TotalConfirmed} duration={3}/> : <Loader/> }</h1>
            <p className="totalcase">Total Cases</p>
            <div className="total">
            <p className="value"><TiChartLine color="blue" size={25} style={{marginLeft:"-20px"}}/>{data2.TotalRecovered ? <CountUp end={data2.TotalRecovered} duration={3}/> : <Loader/>}</p>
            <p className="value2"><TiChartLine color="blue" size={25} style={{marginLeft:"-20px"}}/>{data2.TotalDeaths ? <CountUp end={data2.TotalDeaths} duration={3}/> : <Loader/>}</p>
            <p className="head">Total Recovered</p>
            <p className="head2">Total Deaths</p>
            
            <CountryDetail detail={dat}/>
        </div>
            

    </div>
    )
}
