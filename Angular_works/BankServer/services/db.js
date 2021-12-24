const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/bank', {
    useNewUrlParser: true
})


//model creation
const User = mongoose.model('User', {
    accno:Number,
    password:String,
    uname: String,
    balance: Number,
    transactions: []
})

module.exports = {
    User
}