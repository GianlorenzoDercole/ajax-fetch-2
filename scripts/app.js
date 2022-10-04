console.log('app.js')

fetch('https://cat-fact.herokuapp.com/facts')

    .then(responseData => {
        // does not run until we hear back from cat facts
        //convert data payload into readable json
        return responseData.json()
    })
    .then(jsonData => {

        console.log(jsonData)
    })
// console.log the data
