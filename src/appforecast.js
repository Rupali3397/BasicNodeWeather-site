const forecast=require('./forecast.js')

forecast('Maharashtra',(error,data)=>{
    console.log(error)
    console.log(data)
})