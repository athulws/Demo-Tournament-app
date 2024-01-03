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

const createTournament = (id, teams, round) => {

    // const currentTime = new Date();
    // const endTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000 );  // Time after 24 hours

    // const endTime = new Date(currentTime);
    // endTime.setMinutes(currentTime.getMinutes() + 1);

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
                round
               
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

module.exports = {
    // allTournament,
    createTournament
}