const express = require("express");

const routes = express();
const Detail = require('../models/Detail');
const Slider = require('../models/Slider');

routes.get('/', async (req,res)=>{

    const details = await Detail.findOne({"_id":"632bdfac85cf55ca4dfcccf0"});
    const slides = await Slider.find();
  //  console.log(slides);
   res.render('index',{
        details: details,
        slides: slides,
   })
});

routes.get('/gallery',async (req,res)=>{
    const details = await Detail.findOne({"_id":"632bdfac85cf55ca4dfcccf0"});
    res.render('gallery',{
        details: details
    });
 });

module.exports = routes;