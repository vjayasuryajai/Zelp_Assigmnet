import React, { Component } from 'react'

import Display from './Display'
import Chart from './Chart'
import './Apidemo.css'

export class Apidemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value: "" ,
             chartdata : [],
             chartDisplay : [],
             chartKeys : [],
             chartvalues : []
        }

        this.onChange = this.onChange.bind(this)
    }
    
    async onChange(e) {

    this.setState ({value: e.target.value})

    const response = await fetch(   'https://api.coindesk.com/v1/bpi/currentprice.json' )
    const json = await response.json()
    const rateCurrencyNames = Object.keys(json.bpi)
    const rateCurrencyValues = Object.values(json.bpi)
    const chartData = []
    for (let i = 0; i < rateCurrencyNames.length; i += 1) {
      chartData.push([ rateCurrencyValues[i]])
    }
this.setState({chartdata : chartData})
   // https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=2013-09-01&end=2013-09-10

   const chartdata = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${e.target.value}&start=2013-09-01&end=2013-09-10`)
   const chartjson = await chartdata.json()
   console.log(chartjson)
   const ratechartNames = Object.keys(chartjson.bpi)
    const ratechartValues = Object.values(chartjson.bpi)
    const chartDisplayq = []
    const chartKeys =[]
    const chartValues =[]

    for (let i = 0; i < ratechartNames.length; i += 1) {
        chartKeys.push(ratechartNames[i])
        chartValues.push(ratechartValues[i])
        chartDisplayq.push([ratechartNames[i], ratechartValues[i]])
    }
    console.log(chartKeys)
    console.log(chartValues)
    this.setState({chartDisplay : chartjson,
        chartKeys :chartKeys,
        chartValues : chartValues
    })

console.log(this.state.chartDisplay)
    }

    render() {  

        // console.log(this.state.Posts)
        return (
            <>
            <div className="container">
            <div className ="row ">
              <div className ="col-sm-3  col-md-6">
                <p>1 BitCoin Equals</p>
                <select onChange={this.onChange}  value={this.state.value}>
                <option value="USD" >United States Dollar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">British Pound Sterling</option>
                </select>

                <div className ="row">
                <Display  posts ={this.state.chartdata}   value={this.state.value}/>
                </div>
                </div>


                <div className ="col-sm-9   col-md-6">
               
                <Chart className="chart" chart={this.state.chartDisplay} chartValues ={this.state.chartValues} chartKeys={this.state.chartKeys}/>
                
                </div>
                </div>

                
             </div>

            

             

            </>
        )
    }
}

export default Apidemo
