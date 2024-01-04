const db = require('./db')

// to get all tournaments // database nte ullil ninn edukkan
// const allTournament = () => {
//     return db.Round.find().then(
//         (result) => {
//             if(result){
//                 return {
//                     statusCode: 200,
//                     tournaments: result
//                 }
//             }
//             else {
//                 return {
//                     statusCode: 404,
//                     message: 'No data is available'
//                 }
//             }
//         }
//     )
// }

const generateTeamNames = (numberOfTeams) => {
    return Array.from({ length: numberOfTeams }, (_, index) => `Team#${index + 1}`);
  };

const createTournament = (id, teams, round) => {



    return db.Round.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: 'Id already exist'
            }
        }
        else {
            const newTournament = new db.Round({
                id,
                teams,
                round,
                teamNames: generateTeamNames(teams)
            })

            newTournament.save()

            // const duration = endTime.getTime() - currentTime.getTime()

            // setTimeout(()=>{
            //     db.Round.findOneAndDelete({id})

            //     .then(() => {
            //         console.log(`Tournament with ID ${id} deleted after reaching end time.`);
            //     })
            //     .catch((error) => {
            //         console.error(`Error deleting tournament with ID ${id}: ${error}`);
            //     });

            // }, duration)

            return {
                statusCode: 200,
                message: 'new tournament created'
            }
        }
    })
}


//overview.jsx il pass cheyyan

const getTournamentDetail = (id) => {
    return db.Round.findOne({id}).then(
        (result) => {
            if(result){
                return {
                    statusCode: 200,
                    tournament: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'No data is available'
                }
            }
        }
    )
}









module.exports = {
    getTournamentDetail,
    createTournament
}