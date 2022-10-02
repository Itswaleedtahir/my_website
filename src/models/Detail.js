const mongoose = require('mongoose');

//Details Schema
const Detail = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
        label: String,
        url: String,
    },
    ],
});

//Exporting Schema
module.exports = mongoose.model('detail', Detail);