console.log("This is js file")


const weatherform = document.querySelector('form')
const search = document.querySelector('input')

const message1= document.querySelector('#message1')
const message2= document.querySelector('#message2')




weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value

    message1.textContent="Location data is fetching..."
    message2.textContent=""
    msg3=""
    fetch("http://localhost:3000/weather?address="+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            message1.textContent=data.error
        }else{
            console.log("in fetch else")
           
            msg3= data.forecast
            message2.textContent=msg3
            console.log(message2)
            console.log(data.forecast)
        }
    })
})

})
