const mongoose = require('mongoose');

//Services schema
const Service=mongoose.Schema({
    icon:String,
    title: String,
    description: String,
    linkText:String,
    link: String
})

//Exporting schema
module.exports= mongoose.model('services',Service);