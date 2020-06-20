import React,{useContext} from 'react'
import {TiChartLine} from 'react-icons/ti'
import {Share} from './Sample'
import CountryDetail from './CountryDetail'
import Loader from './Loader'
  
export default function ShowData(){
    let dat=useContext(Share);
    let data2=dat.global
    return (
    <div className="sidedata">
            <h1><TiChartLine color="red" size={25} style={{marginLeft:"-20px"}}/>{data2.TotalConfirmed ? data2.TotalConfirmed : <Loader/> }</h1>
            <p className="totalcase">Total Cases</p>
            <div className="total">
            <p className="value"><TiChartLine color="green" size={25} style={{marginLeft:"-20px"}}/>{data2.TotalRecovered ? data2.TotalRecovered : <Loader/>}</p>
            <p className="value2"><TiChartLine color="red" size={25} style={{marginLeft:"-20px"}}/>{data2.TotalDeaths ? data2.TotalDeaths : <Loader/>}</p>
            <p className="head">Total Recovered</p>
            <p className="head2">Total Deaths</p>
            
            <CountryDetail detail={dat}/>
        </div>
            

    </div>
    )
}
