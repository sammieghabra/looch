var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var signinRouter = require('./routes/signin');
var storeRouter = require('./routes/store')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/chat', indexRouter);
app.use('/signin', signinRouter);
app.use('/', storeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(8000)

const io = require("socket.io")(server)

function getCookie(name, cookie) {
  let value = "; " + cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

io.on('connection', ( socket) => {
  console.log("new user connected")

  socket.on('new_message', (data) => {
    let message = data.message
    console.log(('getting new message'))
    console.log(data)
    const username = getCookie('looch-auth', data.cookie)
    io.sockets.emit('client_message', {
      message: message, username: username
    })
  })

})

module.exports = app;
