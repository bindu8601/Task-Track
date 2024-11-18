const express=require('express')
const dotenv=require('dotenv')
const db = require('./src/config/db');
const app=express()
dotenv.config()
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello</h1')
})
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL!');
});

app.listen(3001)