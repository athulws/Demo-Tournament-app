const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/contest')

const Teams=mongoose.model('Teams',
{
    id: String,
    teams: String,
    round: String,
})

module.exports={
    Teams
}