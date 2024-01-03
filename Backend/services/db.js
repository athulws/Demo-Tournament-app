const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/contest')

const Round = mongoose.model('Round',{
    id: String,
    teams: String,
    round: String,
    from_time: String,
    to_time: String
})

module.exports={
    Round
}