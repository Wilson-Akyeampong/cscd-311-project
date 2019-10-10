const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

//creating conection to mongoose
mongoose.connect('mongodb://localhost:27017/student-portal', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('Database COnnected')
})
.catch(err => {
    console.log(err);
})

//import my models
require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//my routes
app.use('/', require('./routes'));

app.listen("5000", (err) => {
    if (err) throw err;
    console.log('Server started');
})