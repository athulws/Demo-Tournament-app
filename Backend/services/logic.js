const db = require('./db')

// add participents

const createTournament = (id, teams, round) =>{
    return db.Teams.findOne({id}).then(
        (result)=>{
            if (result) {
                return{
                    
                    statusCode:404,
                    message:"Participents Id already exists"
                }
            }
            else{
               const newParticipents = new db.Teams({
                id,
                teams,
                round
               })
               newParticipents.save()
               return{
                
                statusCode:200,
                message:"New Participents added successfully"
            }
            }
        }
    )
}

module.exports = {
    createTournament
}