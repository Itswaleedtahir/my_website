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
module.exports = mongoose.model('detail', Detail);