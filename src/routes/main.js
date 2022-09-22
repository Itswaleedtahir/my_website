const express = require("express");

const routes = express();
const Detail = require('../models/Detail');

routes.get('/', async (req,res)=>{

    const details = await Detail.findOne({"_id":"632bdfac85cf55ca4dfcccf0"});
    console.log(details);
   res.render('index',{
        details: details
   })
});

routes.get('/gallery',(req,res)=>{
    res.render('gallery');
 });

module.exports = routes;