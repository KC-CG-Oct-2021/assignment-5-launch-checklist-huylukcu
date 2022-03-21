// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.querySelector("#missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
        <p>Name: ${name}</p>
        <p>Diameter: ${diameter}</p>
        <p>Star: ${star}</p>
        <p>Distance from Earth: ${distance}</p>
        <p>Number of Moons: ${moons}</p>
        <img src="${imageUrl}">`

}

function validateInput(testInput) {

    if(!testInput.value){
         return "Empty";
    }

  
    if(!isNaN(testInput.value)){
        return "Is a Number";
    }
    if(isNaN(testInput.value)){
        return "Not a Number";
    }
   
}
    

function formSubmission(document = window.document, list, pilot, copilot, fuelLevel, cargoLevel) {

    document.addEventListener("submit", function(e){
        e.preventDefault();
        pilot = document.querySelector("input[name=pilotName]");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        cargoLevel = document.querySelector("input[name=cargoMass]");
        list = document.querySelector("#faultyItems");
        
        let output = "";
        let output1 = "";
        let output2 = "";

        if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
            output = "Please fill out all the fields.\n";
           
        }
           
       if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
       
        output1 = "Pilot and Co-pilot names must have only letters.\n";
       
       }
       if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        output2 = "Fuel level and cargo mass must be numbers.\n";
      
       }
       if(output || output1 || output2){
           let errors = output + output1 + output2;
           alert(errors);
     
           return list.style.visibility = 'hiden';
       }

       
       const launchStatus = document.querySelector("#launchStatus");
       const pilotStatus = document.querySelector("#pilotStatus");
       const copilotStatus = document.querySelector("#copilotStatus");
       const fuelStatus = document.querySelector("#fuelStatus");
       const cargoStatus = document.querySelector("#cargoStatus");

       pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
       copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;

       if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
           list.style.visibility = 'hidden';
           launchStatus.innerHTML = `Shuttle is Ready for Launch`;
           launchStatus.style.color = `green`;
       }
     
       else {
           list.style.visibility = 'visible';
           launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
           launchStatus.style.color = `red`;
           fuelStatus.innerHTML = (fuelLevel.value < 10000) ? `Fuel level too low for launch` : `Fuel level high enough for launch`;
           cargoStatus.innerHTML = ( cargoLevel.value > 10000) ? `Cargo mass too heavy for launch` : `Cargo mass low enough for launch`;

       }

    })
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json()
        });
        console.log("planetsReturned.Length:" + planetsReturned.length);
    return planetsReturned;
}

function pickPlanet(planets) {
    console.log("planets.Length:" + planets.length);
    let randomPlanet;
    let randNumber = Math.floor(Math.random() * (planets.length));
    randomPlanet = planets[randNumber];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
