const express = require('express')

const cors = require('cors')

const logic = require('./services/logic')

const server = express()

server.use(express.json())

server.use(cors({
    origin:'http://localhost:3000'
}))

//add participents

server.post('/create-tournament', (req, res) => {
    logic.createTournament(req.body.id, req.body.participants, req.body.format)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})

server.listen(8005,()=>{
    console.log('listening on port 8005');
})





