const mongoose= require('mongoose');

//Slider Schema
const Slider = mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl:String,
    class: String
})

//Exporting Schema
module.exports = mongoose.model('slider',Slider);