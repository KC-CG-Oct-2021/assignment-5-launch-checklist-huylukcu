// Write your JavaScript code here!
window.addEventListener("load", function(e) {
    e.preventDefault()
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       
    listedPlanets = result;
    
       let randomPlanet = pickPlanet(listedPlanets);
      
       addDestinationInfo(window.document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image) 
   
   })
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       formSubmission();

 
});
