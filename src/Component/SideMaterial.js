import React,{useState,useEffect,useContext} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {GrBarChart} from 'react-icons/gr'
import {GiWorld} from 'react-icons/gi'
import LineGraph from './Line'
import {fetchdailydata} from './../Data'
import Doughnut from './DoughnutGraph'
import {Share} from './Sample'
import {withRouter} from 'react-router-dom'
import Map from './Mapbox.js'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
 function SideMaterial(props){
    let [dail,setdail]=useState({dataa:{}})
    let [link,setlink]=useState(true);
    const classes = useStyles();
    const condat=useContext(Share);
    const dataapi=condat;
    const data=dataapi.country;
    const key=Object.keys(data)
    let CountryData=key.filter(val=>
      data[val]["Country"]===props.name)
    let dataCountry= data[CountryData]!==undefined ? data[CountryData] : 0;
    const {NewConfirmed,NewDeaths,NewRecovered}=dataCountry;
    const {TotalConfirmed,TotalDeaths,TotalRecovered}=dataCountry;
    useEffect(()=>{
      fetchdailydata(props.name)
      .then(data=>setdail({dataa:{...data}}))
    })
    console.log(dail)
    return(
        <div className="side">
            <Button
        variant="contained"
        color="white"
        className={classes.button}
        startIcon={<GrBarChart />}
        onClick={()=>setlink(true)}
      >
        Graph
      </Button>
      <Button
        variant="contained"
        color="white"
        className={classes.button}
        startIcon={<GiWorld />}
        onClick={()=>setlink(false)}

      >
        Map
      </Button>
      {link===true ?
      <div className="chartdiv">
        <div className="linechart">
          <LineGraph data={dail}/>
        </div>
        <div className="doughnut1">
        <h1>Latest Stats</h1>

        <Doughnut confirm={NewConfirmed} death={NewDeaths} recover={NewRecovered}/>

        </div>

        <div className="doughnut2">
        <h1>Overall Stats</h1>

        <Doughnut confirm={TotalConfirmed} death={TotalDeaths} recover={TotalRecovered}/>

        </div>
      </div>
      :
      <Map/>

 }
 

        </div>
    )
}
export default withRouter(SideMaterial);