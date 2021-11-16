const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()


dotenv.config({path:'config.env'})
const port = process.env.PORT || 8000;

//for printing the logs
app.use(morgan('tiny'))

//parse request to body - parser
app.use(bodyparser.urlencoded({urlencoded:false}))
app.use(bodyparser.json());

//set view engine 
app.set('view engine','ejs')
// app.set('views',path.resolve(__dirname,"/views/ejs"))

//loading assests
app.use('/css',express.static(path.resolve(__dirname,"assests/css")))
app.use('/js',express.static(path.resolve(__dirname,"assests/js")))
app.use('/img',express.static(path.resolve(__dirname,"assests/img")))

app.use('/',require('./server/routes/router'))

app.set('views',path.join(__dirname,'/views/'))



app.get('/guru',(req,res)=>{
    res.send('We are in Second Route Buddy');
})

app.listen(port,()=>{
    console.log("Server Running");
})