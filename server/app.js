const express=require('express')
const dotenv=require('dotenv')
const bodyPraser=require('body-parser')
const db = require('./src/config/db');
const registerRoute=require('./src/routes/registerRoute')
const app=express()
dotenv.config()

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL!');
});
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello</h1')
})
app.use(bodyPraser.json())
app.use('/tasktrack',registerRoute)

app.listen(3001)