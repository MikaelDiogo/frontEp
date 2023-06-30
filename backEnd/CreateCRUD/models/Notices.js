const mongoose = require('mongoose')

const Notices = mongoose.model("Notices", {
    name: String,
    img: String,
    text: String
})



module.exports = Notices