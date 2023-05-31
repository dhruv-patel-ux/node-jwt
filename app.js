const express = require("express");
const app = express();
const mongoose=require('mongoose');
const userRouter = require('./router/user')
mongoose.connect('mongodb+srv://dhruvsoftreine:ECQ2tbXKj9rxt0V0@cluster0.7ucrknj.mongodb.net/').then(()=>{
    console.log('connection successfully');
},err=>{
    console.log('connection failed');
});
var db = mongoose.connection;
app.use(express.json());
app.use('/api/v1/user/',userRouter)

app.listen(3000, (error)=>{
    if(error){
        console.log('Error in server setup')
    }else{
        console.log('app is started on 3000');
    }
})