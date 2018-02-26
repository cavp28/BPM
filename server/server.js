const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-sessions');
const passport = require('passport');
const hbs = require('hbs');
const path = require('path');

var {mongoose} = require('./db/mongoose');

var app = express();
//process.env.PORT -> Port assigned by web hosting.
const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');
app.use("/public",express.static(path.join(__dirname, '/public')));

//app.use(morgan('dev'));
//app.use(cookieParser());
//app.use(bodyParser.json());

//this is required for passport
//app.use(session({ secret: 'lafabril123' })); // session secret
//app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions
//app.use(flash()); // use connect-flash for flash messages stored in session

//require('/routes.js')(app, passport);
//require('./config/passport')(passport);

//Setting handlebars for templating
app.set('view engine', 'hbs');

//Explicit where the views folder is
app.set('views', (__dirname + '/views'));

app.get('/', (req, res) => res.render('login.hbs', {}));
app.get('/dashboard', (req, res) => res.render('dashboard.hbs', {}));
app.get('/jde', (req, res) => {
  return res.send({'Location': 'www.google.com'}, 301)
});

app.listen(port, () => {
  console.log(`BPM APP Started on port ${port}`);
});

module.exports = {app};
