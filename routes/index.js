const express = require('express');
const app = express();
const userRouter = require('./users');
const authRouter = require('./auth');


app.use('/',userRouter);
app.use('/',authRouter);


module.exports = app;