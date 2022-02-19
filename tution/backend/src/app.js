const express=require('express');

const app=express();
app.use(express.json());

const connect=require('./config/db');


const studentcontroller=require('./controllers/student.controller');


app.use('/students',studentcontroller);



app.listen(2755,()=>{
    connect();
    console.log('listening 2755');
})

