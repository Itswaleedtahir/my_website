const express = require("express");
const routes = express();
const Detail = require('../models/Detail');
const Slider = require('../models/Slider');
const Service = require('../models/Service');

//GET API
routes.get('/', async (req,res)=>{

    const details = await Detail.findOne({"_id":"632bdfac85cf55ca4dfcccf0"});
    const slides = await Slider.find();
    const services = await Service.find();
  //  console.log(slides);
   res.render('index',{
        details: details,
        slides: slides,
        services: services
   })
});

routes.get('/gallery',async (req,res)=>{
    const details = await Detail.findOne({"_id":"632bdfac85cf55ca4dfcccf0"});
    res.render('gallery',{
        details: details
    });
 });

module.exports = routes;