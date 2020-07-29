const express = require('express')
const path=require('path')
const hbs=require('hbs')

const forecast=require('./forecast.js')


const app=express()


//define path for express config
const publicdir = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//for static asset
app.use(express.static(publicdir))

//setup handlebars engine and views
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)



app.get('/index',(req,res)=>{
    res.render('index',{
        title:'Weather Show Site',
        name:'Rupali',
        footer:'Created by Aeronwin'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Rupali',
        footer:'Created by Aeronwin'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help',
        name:'Rupali',
        footer:'Created by Aeronwin'
    })
})

app.get('/welcome',(req,res) => {
    res.send("<h1>Welcome to Express!!</h1>")
})

// app.get('/help',(req,res) =>{
//     res.send("Contact to :rupalihajare3397@gmail.com")
// })

// app.get('/about',(req,res)=>{
//     res.send("This website gives you detail about current weather!!")
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Enter address please"
        })
    }
 
    forecast(req.query.address,(error,data)=>{
      
        
        if(error!='undefined'){
            
            return  res.send({error})
        }
         
         res.send({
             forecast:data,
             address:req.query.address
         })
        
    })
})


app.get('/products',(req,res)=>{
    if(!req.query.search){
      return  res.send({
            error:"Please enter your search game"
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]
    })

})

app.get('/help/*',(req,res)=>{
  res.render('errorpage',{
      msg:'help article not found'
  })
})

app.get('*',(req,res)=>{
    res.render('errorpage',{
        msg:'Page not found'
    })
})

app.listen(3000,() =>{
    console.log("Server is up and running")
})

