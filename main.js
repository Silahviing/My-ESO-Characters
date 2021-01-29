const charname = document.getElementById("inputname");
const chargender = document.getElementById("inputgender");
const charalliance = document.getElementById("inputalliance");
const charrace = document.getElementById("inputrace");
const charclass = document.getElementById("inputclass");
const charstory = document.getElementById("inputstory");
const addButton = document.getElementById("create");

addButton.addEventListener("click", createNewCharacter);

function createNewCharacter(ev) {
    let character = document.createElement("div");
    character.id = "char";

    let characterHead = document.createElement("div");
    characterHead.id = "char-head";

    let name = document.createElement("h3");
    name.innerText = charname.value;
/*
    let imgGen = document.createElement("img");

    if (chargender == "Female") {
        imgGen.src = "images/female.png";
    }
    else {
        imgGen.src = "images/male.png";
    }
*/

    let line = document.createElement("hr");

    let infopara = document.createElement("p");
    infopara.innerHTML = "Sex: " + chargender.value + (chargender.value == "Female"? "<img src='./images/female.png'></img>" : "<img src='./images/male.png'></img>") + "<br> Alliance: " + 
        charalliance.value + "<br> Race: " + charrace.value + "<br> Class: " + charclass.value;

    let storypara = document.createElement("p");
    storypara.innerText = charstory.value;

    character.appendChild(characterHead);
    characterHead.appendChild(name);
    character.appendChild(line);
    character.appendChild(infopara);
    character.appendChild(storypara);
    document.querySelector("body").appendChild(character);
}