const express = require('express')

const cors = require('cors')

const logic = require('./services/logic')

const server = express()

server.use(cors({
    origin: 'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000, () => {
    console.log('server listening on port 8000');
})


// server.get('/get-tournaments',(req,res)=>{
//     logic.allTournament().then((result)=>{
//         res.status(result.statusCode).json(result)
//     })
// })

// create tournament function // ithil ulla body fixed aan
server.post('/create-tournament', (req, res) => {
    logic.createTournament(req.body.id, req.body.participants, req.body.format)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})