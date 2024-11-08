const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send({msg: "All Ok"})
})

const start = async ()=>{
    try{
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is listening on port: ${process.env.PORT}`)
        })
    } catch (error){
        console.log(error);
        
    }
}

start()