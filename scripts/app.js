// console.log('app.js')

// fetch('https://cat-fact.herokuapp.com/facts')

//     .then(responseData => {
//         // does not run until we hear back from cat facts
//         //convert data payload into readable json
//         return responseData.json()
//     })
//     .then(jsonData => {

//         console.log(jsonData)
//     })
// // console.log the data





//

// const url = 'http://www.redit.com/search.json?q=kittens'
//     // fetch data
// fetch(url)
//     // jsonify data
//     .then(responseData => responseData.json()) // implicit return
//     // do something with data
//     .then(console.log())
//     // handle error
//     .catch(err => {
//         console.error('no', err)
//     })




//



const peopleUrl = 'http://randomuser.me/api/?results=10'

document.addEventListener('DOMContentLoaded', () => {
    fetch(peopleUrl)

        .then(responseData => responseData.json())

        .then(jsonData => {
            console.log(jsonData)
        })
        .catch(err => {
            console.error('no')
        })
})
