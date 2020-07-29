const request=require('request')



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



const forecast= (address,callback)=>{
    console.log("in forecast")
    const weatherurl='http://api.weatherstack.com/current?access_key=2be039f2d3e4231002bae93af8ca6692&query='+address+''
    //const weatherurl='http://api.weatherstack.com/current?access_key=2be039f2d3e4231002bae93af8ca6692&query=New%20York'
    


    request({url:weatherurl,json:true},(error,response)=>{
       if(error){
           console.log("in unable to connect weatherstack")
           callback('Unable to connect to weatherstack')
       }else if(response.body.error){
           console.log("in unable to find location")
           callback('Unable to find location')
       }else{
           
           callback('undefined',{
            currentdata:"It is currently "+response.body.current.wind_degree+" degree out"+" Chance of rain observed time is"+response.body.current.observation_time
           })
          
        }
       })

    
}

module.exports =forecast
