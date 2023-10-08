const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/api')
//
const connectDB = require('./config/db')
//set app
const app = express()
//
connectDB();
app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/api', routes)
//error handle
app.use((err, req, res, next)=>{
   // console.log(err)
   res.status(422).send({error: err.message})
})




app.listen(process.env.port || 4000 , ()=>{
    console.log('Listening for reqs')
})