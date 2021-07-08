document.addEventListener('DOMContentLoaded', () => {
   fetchAllDogs()
   renderDogList()
   renderPupCard()
})

function fetchAllDogs(dog) {
    fetch(`http://localhost:3000/pups`)
    .then(response => response.json())
    .then(json => {             //console.log(json.forEach(dog)))
        json.forEach((dog => {
            renderDogList(json)
        }))
    })
}

function renderDogList(dog) {
    let dogNameDiv = document.querySelector("#dog-bar")
    let pupCardDiv = document.querySelector("#dog-info");
    dog.forEach((dog) => {
        let spanName = document.createElement('span')
        spanName.textContent = dog.name

        dogNameDiv.append(spanName)
    
        spanName.addEventListener('click', (e) => {
            e.preventDefault
            pupCardDiv.innerHTML = ""
            renderPupCard(dog)          
        })
    })
}
function renderPupCard(dog) {
    let pupCardDiv = document.querySelector("#dog-info");
        dog.forEach((dog) => {
            let h2Name = document.createElement('h2');
            let imgPup = document.createElement('img')
            let buttonPup = document.createElement('button')
            h2Name.textContent = dog.name
            imgPup.src = dog.image
            buttonPup.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"    
            pupCardDiv.append(h2Name, imgPup, buttonPup)  
    })   
}
// pupCardDiv.interHTML ="" 
            // let h2Name = document.createElement('h2');
            // let imgPup = document.createElement('img')
            // let buttonPup = document.createElement('button')
            // h2Name.textContent = dog.name
            // imgPup.src = dog.image
            // buttonPup.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
            // pupCardDiv.append(h2Name, imgPup, buttonPup) 