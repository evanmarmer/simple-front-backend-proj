// console.log('hello')

let createForm = document.getElementById('create-form')
let createName = document.getElementById('create-name-input')
let createPower = document.getElementById('create-power-input')
let createHealth = document.getElementById('create-health-input')



createForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if(isNaN(+createPower.value)){
        alert('Please put a number in for the power!')
        return
    }

    if(isNaN(+createHealth.value)){
        alert('Please put a number in for the health!')
        return
    }

    let maBod = {
        name: createName.value,
        power: createPower.value,
        health: createHealth.value
    }

    axios.post('/create-fighter', maBod)
    .then((response) => {
        loadFighterToDOM(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    
})


axios.get('/fighters')
.then((response) => {
    loadFighterToDOM(response.data)
})
.catch((error) => {
    console.log(error)
});


function loadFighterToDOM(fightersArray){

    document.getElementById('fighters-display').innerHTML = ''

    for(let i=0; i < fightersArray.length; i++) {

        let grandfatherDiv = document.getElementById('fighters-display')
        let fatherDiv = document.createElement('div')
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        
        grandfatherDiv.appendChild(fatherDiv)
        fatherDiv.appendChild(h3)
        fatherDiv.appendChild(p1)
        fatherDiv.appendChild(p2)


        h3.innerHTML = fightersArray[i].name
        p1.innerHTML = 'Power: ' + fightersArray[i].power
        p2.innerHTML = 'Health: ' + fightersArray[i].health
    }
}