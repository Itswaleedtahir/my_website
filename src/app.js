const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main');
const Detail = require('./models/Detail');
const mongoose = require('mongoose');

app.use("",routes);


app.use('/static',express.static('public'));
//templating engine
app.set('view engine', 'hbs');
app.set('views','views');
hbs.registerPartials('views/partials');

//db connection
mongoose.connect('mongodb+srv://itswaleedtahir:itswaleedtahir123@cluster0.smf6v.mongodb.net/website_tut',()=>{
    console.log('Database connected');
    // Detail.create({
    //     brandName: "Waleedz Photography",
    //     brandIconUrl:"https://yt3.ggpht.com/uBceQFYCeTQLHxcq8J1Ok9cT0HStGyr5t5UkXa8APs-rbysfBtpOMyLzBvixm5hkiFfYo5CvO90=s88-c-k-c0x00ffffff-no-rj",
    //     links:[
    //         {
    //             label: 'Home',
    //             url: '/'
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label: 'Gallery',
    //             url:'/gallery'
    //         },
    //         {
    //             label:'About',
    //             url:'/about'
    //         },
    //         {
    //             label:'Contact',
    //             url:'/contact-us'
    //         },
    //     ]
    // })
})

app.listen(process.env.PORT | 8000, ()=>{
        console.log("listening on port 8000...");
})