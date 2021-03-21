import React from 'react'

import './Chart.css'
import {Line}  from 'react-chartjs-2'

function Chart (props) {

console.log(props)
   
    const data = {labels : props.chartKeys,
        datasets:[ {
       label : "Last 60 days trends",
        data : props.chartValues, }]}


      
     
    return(

        <div className ="Chart">{
        <Line  data ={data} /> 


        }
        
        </div>
    )
      }
export default Chart
