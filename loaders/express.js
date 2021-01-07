const { Console } = require('console');

module.exports = (app)=> {
    const passport = require('passport');
    const createError = require('http-errors');
    const express = require('express');
    const path = require('path');
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');
    const routes = require('../routes');
    const cors = require('cors');
    
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    
   // console.log('wea ere here')
    //require('../services/passport');
    // require('./config/passport')(passport);

    // This will initialize the passport object on every request
    
    app.use(cors());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/api/v1', routes);

    app.use(passport.initialize());
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.statusCode || 500);
        console.log(err);
        res.json({
            message: err.message,
            status: err.statusCode
        });
    });

};
