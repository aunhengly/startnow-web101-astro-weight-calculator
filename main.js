var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9],
];
planets.reverse();

var selection = document.getElementById("planets");

planets.forEach(function(planet) {
    var element = document.createElement("option"); //Creates an <option> 
    element.setAttribute("value", planet[0]); //Sets value of option
    element.innerText = planet[0]; //Sets text of <option>TEXT</option>
    selection.appendChild(element);
});

function calculateWeight(myWeight, gravityMultiplier) {
    return myWeight * gravityMultiplier;
};

function handleClickEvent() {
    var planetName = $('#planets').find(':selected').text()
    var myWeight = document.getElementById("user-weight").value;
    var selectedPlanetName = $('#planets').find(':selected').val();
    var gravityMultiplier;
    // now that you have planet name, use it to find the gravityMultiplier in the array
    for (var i = 0; i < planets.length; i++) {
        // as loop through array find the index of Neptun, then gravity of that array
        if (planets[i][0] == selectedPlanetName) {
            gravityMultiplier = planets[i][1];
        }
    }
    document.getElementById('output').textContent = "If you were on " + planetName + ", you would weigh " + calculateWeight(myWeight, gravityMultiplier) + "lbs!";
};
var mybutton = document.getElementById('calculate-button')
mybutton.addEventListener('click', handleClickEvent)

function removeFnc() {
    if (removechkb.checked === true) {
        for (var i = 0; i < selection.length; i++) {
            if (selection.options[i].value == "Pluto") {
                selection.remove(i);
            }
        }
    } else {
        var element = document.createElement("option");
        element.setAttribute("Pluto", 0.06);
        element.innerText = "Pluto";
        selection.appendChild(element);
    }
}
var removechkb = document.getElementById('remove');
removechkb.addEventListener("click", removeFnc);

function addNewPlanet() {
    var element = document.createElement("option");
    var addPlanet = document.getElementById("addPlanetName").value;   
    var planetWeight = document.getElementById("addPlanetWeight").value;
  
    for (var i = 0; i < selection.length; i++) {
        if (selection.options[i].value === addPlanet) {
          console.log('already exists!!!');
          return; // Stop the for loop
        } 
    }
    element.setAttribute("value", addPlanet);
    element.innerText = addPlanet;
    planets.push([addPlanet, parseFloat(planetWeight)]);
    console.log("selected", element);
    selection.appendChild(element);
    console.log(element);
}

var addButton = document.getElementById("addPlanet-button");
addButton.addEventListener("click", addNewPlanet);