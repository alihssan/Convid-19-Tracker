import React,{Suspense} from 'react';
import './App.css';
import {fetchdata} from "./Data"
import Sample from "./Component/Sample.js"
const data=fetchdata()

function App() {
  return (
    <div className="cont">

    <Suspense fallback={<h1>Loading.....</h1>}>

     <Sample data={data} />
    </Suspense>
  </div>

  )
}
export default App
