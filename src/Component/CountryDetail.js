import React,{useState} from 'react'
import {TiChartBar} from 'react-icons/ti'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {NavLink,withRouter} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
        marginTop:'40px',
        marginLeft:'35px',
        borderBottom:'5px solid black'
      },
    },
  }));

function CountryDetails(props){
    const data=props.detail.country;
    const key=Object.keys(data)
    let CountryData=key.map(val=>{return {...data[val]}})
    const classes = useStyles();
    const [text,setext]=useState("")
    let khan=CountryData.filter(val=>text!=="" ? val["Country"].slice(0,1)===text  : val["Country"] )
    return(
        <React.Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Select Country" value={text} onChange={(e)=>setext(e.target.value)} />           
                
            </form>
            <div className="scrolling">
                {khan.map(val=>
                <NavLink to={`${val["Country"]}`}>
                <div className="country_card" 
                style={{border:props.location.pathname.slice(1)===val["Country"] 
                &&
                 ("2px solid black"),
                backgroundColor:props.location.pathname.slice(1)===val["Country"] && "pink",
                opacity:props.location.pathname.slice(1)===val["Country"] && "0.5",
                
                }} 
                 key={val["CountryCode"]}>
                    <p className="name">{val["Country"].length>=15 ? val["CountryCode"] : val["Country"]}</p>
                    <p className="amount">{val["TotalConfirmed"]}</p>
                    <TiChartBar size={25} color="green" style={{marginTop:"15px",float:"right"}}/>

                </div>
                </NavLink>
    )}  

            
            </div>
        </React.Fragment>
    )
}
export default withRouter(CountryDetails);