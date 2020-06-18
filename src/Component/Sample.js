import React,{Fragment,useState,useEffect,createContext} from 'react';
import ShowData from './navbar'
import SideMaterial from './SideMaterial'
import {Route} from 'react-router-dom'
export const Share=createContext();
function Sample(props){
    const data=props.data;
    let [st,setst]=useState({global:{},country:{}})

    useEffect(()=>{
        data.then(val=>setst({global:{...val.Global},country:{...val.Countries}}))
            
          
    },[])
    let key=Object.keys(st.country);
    let CountryNames=key.map(val=>st.country[val]["Country"])

    return(
        <Fragment>
            <Share.Provider value={st}>
                <ShowData/>
                {CountryNames.map(name=>
                <Route exact path={`/${name}`}>
                <SideMaterial name={name}/>
                </Route>
                )}
                <Route exact path="/" render={(props)=>props.history.push("/Pakistan")}/>
    </Share.Provider>
        </Fragment>
    )
}

export default Sample;