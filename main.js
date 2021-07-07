const charname = document.getElementById("inputname");
const chargender = document.getElementById("inputgender");
const charalliance = document.getElementById("inputalliance");
const charrace = document.getElementById("inputrace");
const charclass = document.getElementById("inputclass");
const charstory = document.getElementById("inputstory");
const addButton = document.getElementById("create");
const createnew = document.getElementById("createnew");
const home = document.getElementById("home");
const lore = document.getElementById("lore");
const about = document.getElementById("about");


// Naviagtion

home.addEventListener("click", backhome);

createnew.addEventListener("click", ev => {
    let contentdiv = document.getElementsByClassName("content")[0];
    contentdiv.classList.remove("hidden");
    let containerdiv = document.getElementsByClassName("container")[0];
    containerdiv.classList.add("hidden");
    let lorediv = document.getElementsByClassName("lore")[0];
    lorediv.classList.add("hidden");
    let aboutdiv = document.getElementsByClassName("about")[0];
    aboutdiv.classList.add("hidden");
})

lore.addEventListener("click", ev => {
    let lorediv = document.getElementsByClassName("lore")[0];
    lorediv.classList.remove("hidden");
    let containerdiv = document.getElementsByClassName("container")[0];
    containerdiv.classList.add("hidden");
    let contentdiv = document.getElementsByClassName("content")[0];
    contentdiv.classList.add("hidden");
    let aboutdiv = document.getElementsByClassName("about")[0];
    aboutdiv.classList.add("hidden");
})

about.addEventListener("click", ev => {
    let lorediv = document.getElementsByClassName("lore")[0];
    lorediv.classList.add("hidden");
    let containerdiv = document.getElementsByClassName("container")[0];
    containerdiv.classList.add("hidden");
    let contentdiv = document.getElementsByClassName("content")[0];
    contentdiv.classList.add("hidden");
    let aboutdiv = document.getElementsByClassName("about")[0];
    aboutdiv.classList.remove("hidden");
})

//New Character Creation

addButton.addEventListener("click", createNewCharacter);

function backhome(ev) {
    let contentdiv = document.getElementsByClassName("content")[0];
    contentdiv.classList.add("hidden");
    let containerdiv = document.getElementsByClassName("container")[0];
    containerdiv.classList.remove("hidden");
    let lorediv = document.getElementsByClassName("lore")[0];
    lorediv.classList.add("hidden");
    let aboutdiv = document.getElementsByClassName("about")[0];
    aboutdiv.classList.add("hidden");
}

function createNewCharacter(ev) {
    let character = document.createElement("div");
    character.id = "char";
    character.classList.add("char");

    let characterHead = document.createElement("div");
    characterHead.id = "char-head";
    characterHead.classList.add("char-head");

    let name = document.createElement("h3");
    name.innerHTML = charname.value;

    let allianceImg = document.createElement("img");
    allianceImg.src = createAllianceImg(charalliance);

    let line = document.createElement("hr");

    let infopara = document.createElement("p");
    infopara.innerHTML = "Sex: " + chargender.value +" "+ createGenderImg(chargender) + "<br> Alliance: " + 
        charalliance.value + "<br> Race: " + charrace.value + "<br> Class: " + charclass.value;

    let storypara = document.createElement("p");
    storypara.innerHTML = "<span style='color: rgb(199, 164, 51);'>Story:</span> " +charstory.value;
    storypara.classList.add("scrollable");


    character.appendChild(characterHead);
    characterHead.appendChild(name);
    characterHead.appendChild(allianceImg);
    character.appendChild(line);
    character.appendChild(infopara);
    character.appendChild(storypara);
    document.getElementsByClassName("row")[0].appendChild(character);

    charname.value = "";
    chargender.value = "";
    charalliance.value = "";
    charrace.value = "";
    charclass.value = "";
    charstory.value = "";
    
    backhome();
}

//get the rigth gender symbol

function createGenderImg(genderInputHTML) {
    let resultStr = "";
    if (genderInputHTML != null) {
        const gender = genderInputHTML.value;
        if (gender == "Female") {
            resultStr = "<img src='./images/female.png'></img>";
        } else {
            resultStr = "<img src='./images/male.png'></img>";
        }
    }
    return resultStr;
}

//get the right alliance symbol

function createAllianceImg(allianceInputHTML){
    let resultStr = "";
    if (allianceInputHTML != null) {
        const alliance = allianceInputHTML.value;
        if (alliance == "Aldmeri Dominion") {
            resultStr = "./images/aldmeri-dominion.png";
        }else if (alliance == "Ebonheart Pact") {
            resultStr = "./images/ebonheart-pact.png";
        }else {
            resultStr = "./images/daggerfall-covenant.png";
        }
    }
    return resultStr;
}

//back to top button

function backtotop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//audio player for practice (I hate websites that have those automatic audio players and can't find them to turn them off...)

const forblood = "audio/ForBloodForGloryForHonor.mp3";
const omens = "audio/OmensInTheClouds.mp3";
const moons = "audio/MoonsOfEveningStar.mp3";
const beauty = "audio/BeautyOfDawn.mp3";

let audio = document.getElementById("myaudio");
audio.volume = 0.3;

audio.onended = function (){
    if (audio.currentSrc.includes(forblood)){
        audio.src = omens;
    } else if (audio.currentSrc.includes(omens)){
        audio.src = moons;
    } else if(audio.currentSrc.includes(moons)){
        audio.src = beauty;
    } else {
        audio.src = forblood;
    }
}
