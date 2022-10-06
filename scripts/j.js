

const jokeUrl = 'https://icanhazdadjoke.com/'

const options = {
    headers: {
        Accept: 'application/json'
    }
}













document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.querySelector('#joke-container')
    const jokeButton = document.querySelector('#joke-button')

    jokeButton.addEventListener('click', () => {

    fetch(jokeUrl, options)

        .then(response => response.json())

        .then(jokeData => {
            console.log(jokeData)
            // clear out joke container
            while(jokeContainer.firstChild){
                jokeContainer.removeChild(jokeContainer.firstChild)
            }
            // create a p tag
            const p = document.createElement('p')
            // set p tag to
            p.innerText = jokeData.joke
            // append p tag to the joke container
            jokeContainer.append(p)

            // // const imageURL = `https://icahnhazdadjoke.com/j/${jokeData.id}.png`
            // // const image = new Image()
            // // image.src = imageURL
            // // image.alt = jokeData.joke
            // // jokeContainer.append(image)
        })

        .catch(err => console.error('no', err))
    })
})
