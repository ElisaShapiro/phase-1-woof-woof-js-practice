document.addEventListener('DOMContentLoaded', () => {
   fetchAllDogs()
})

function fetchAllDogs() {
    fetch(`http://localhost:3000/pups`)
    .then(response => response.json())
    .then(json => { 
        json.forEach((user => {
            renderDogList(json)
        }))
    })
}

function renderDogList(dog) {
    let dogNameDiv = document.querySelector("#dog-bar")
    // console.log(dogDiv)

    let spanName = document.createElement('span')
    console.log(spanName)
    spanName.textContent = dog.name

    dogNameDiv.append(spanName)

    spanName.addEventListener('click', (e) => {
        e.preventDefault
        renderPupCard(dog)
    })
}



function renderPupCard(dog) {
    let pupCardDiv = document.querySelector("#dog-info");
    let h2Name = document.createElement('h2');
    let imgPup = document.createElement('img')
    let buttonPup = document.createElement('button')
    h2Name.textContent = dog.name
    imgPup.src = dog.image
    buttonPup = {
        if (isGoodDog === true) {
            return "Good Dog!"
        } else (isGoodDog === false) {
            return "Bad Dog!"
        }
    }
}