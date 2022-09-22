const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main')
const mongoose = require('mongoose');

app.use("",routes);


app.use('/static',express.static('public'));
//templating engine
app.set('view engine', 'hbs');
app.set('views','views');

//db connection
mongoose.connect('mongodb://localhost/website_tut',()=>{
    console.log('Database connected');
})

app.listen(process.env.PORT | 8000, ()=>{
        console.log("listening on port 8000...");
})