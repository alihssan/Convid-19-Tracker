import React,{Suspense} from 'react';
import './App.css';
import {fetchdata} from "./Data"
import Sample from "./Component/Sample.js"
import Loader from './Component/Loader'
const data=fetchdata()

function App() {
  return (
    <div className="cont">

    <Suspense fallback={<Loader/>}>

         <Sample data={data} />
    </Suspense>
  </div>

  )
}
export default App
