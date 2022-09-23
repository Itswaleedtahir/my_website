//requiring NPM Packages

const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main');
const Detail = require('./models/Detail');
const Slider = require('./models/Slider');
const Service = require('./models/Service');
const mongoose = require('mongoose');

app.use("",routes);

//Static files path 
app.use('/static',express.static('public'));
//templating engine
app.set('view engine', 'hbs');
app.set('views','views');
hbs.registerPartials('views/partials');

//db connection
mongoose.connect('mongodb+srv://itswaleedtahir:itswaleedtahir123@cluster0.smf6v.mongodb.net/website_tut',()=>{
    console.log('Database connected');
        // Service.create([
        //     {
        //         icon:"fas fa-solid fa-camera",
        //         title:"Photo Editing",
        //         description:"We provide best photo editing service",
        //         linkText:"https://www.instagram.com/waleedzphotography/",
        //         link:"Check"
        //     },
        //     {
        //         icon:"fas fa-solid fa-video",
        //         title:"Photo Editing",
        //         description:"We provide best photo editing service",
        //         linkText:"https://www.instagram.com/waleedzphotography/",
        //         link:"Check"
        //     },
        //     {
        //         icon:"fas fa-solid fa-video",
        //         title:"Photo Editing",
        //         description:"We provide best photo editing service",
        //         linkText:"https://www.instagram.com/waleedzphotography/",
        //         link:"Check"
        //     },
            
        // ])
    // Slider.create([
    //     {
    //         title: "One of my favorite shot i took of nature",
    //         subTitle:"The picture describes the beauty of SWAT ",
    //         imageUrl:"/static/images/4.jpg"
    //     },
    //     {
    //         title: "One of my favorite shot i took of nature",
    //         subTitle:"The picture describes the beauty of SWAT ",
    //         imageUrl:"/static/images/2.jpg"
    //     },
    //     {
    //         title: "One of my favorite shot i took of nature",
    //         subTitle:"The picture describes the beauty of SWAT ",
    //         imageUrl:"/static/images/3.jpg"
    //     },
        
    // ])



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