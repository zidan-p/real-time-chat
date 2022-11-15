const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// -------------------------------------------
app.get('/test',(req,res)=>{
    res.send('ini adalah test express')
})

const userRouter = require('./route/user/user.router')
const roomRouter = require('./route/room/room.router')
const messageRouter = require('./route/message/message.router')

try {
    app.use("/message",messageRouter);
    app.use('/room',roomRouter);
    app.use('/user',userRouter);

    
} catch (error) {
    console.error(error)
}



module.exports = app;