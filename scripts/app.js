fetch('https://cat-fact.herokuapp.com/facts')

    .then(responseData => {
        return responseData.json()
    })
    .then(jsonData => {
        console.log(jsonData)
    })
