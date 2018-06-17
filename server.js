const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

//Connection MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//Passport Middleware 

app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server running on port ${port}`));
 