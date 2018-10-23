// Class Picker Stuff

// // MS2 Job Declarations 
// var knight = document.getElementById("knightLink")
// var zerker = document.getElementById("zerkerLink")
// var priest = document.getElementById("priestLink")
// var wizard = document.getElementById("wizardLink")
// var archer = document.getElementById("archerLink")
// var hgunner = document.getElementById("hgunnerLink")
// var thief = document.getElementById("thiefLink")
// var assassin = document.getElementById("assassinLink")

// Modal Areas
// The background of the model left side behind the job photo
var leftBackground = document.getElementById("left").style
// job Photo
var jobPhoto = document.getElementById("jobPhoto")
// job name 
var jobName = document.getElementById("jobName")
// top area
var skillBox = document.getElementById("top")
// skill desc area
var descriptionBox = document.getElementById("bottom")
// job video
var jobsVideo = document.getElementById("jobsVideo")

// video button
var videoButton = document.getElementById("videoButton")
// video div

// skills button
// document.getElementById("skillsButton")
var skillPhoto = document.getElementsByClassName("skillPhoto");

var show = document.getElementById("show")
// X button
var X = document.getElementById("X")

// Gray Box to add shadow
var greyBox = document.getElementById("greyBox")

var modal = document.getElementById("show")
// video / skill buttons 
var buttons = document.getElementsByClassName("button");

// click off model event 
// window.onclick = function(event) {
//     if(event.target == greyBox){
//         // gets ride of grey box
//         greyBox.style.background = "none"
//         greyBox.style.visibility = "hidden";
//         X.style.opacity = "0"
//         show.style.opacity = 0;
//         show.style.zIndex = -1;
//         buttons[0].style.background = "rgba(0, 0, 0, 0.8)";
//         buttons[1].style.background = "rgba(0, 0, 0, 0.5)";
//         jobsVideo.src = "none"
//     }
// }



// // shows video
// videoButton.addEventListener('click', showVideo)
// skillsButton.addEventListener('click', showSkills)

// function showVideo() {
//     skillBox.style.visibility = "hidden";
//     descriptionBox.style.visibility = "hidden";
//     video.style.visibility = "visible";
// }


// function showSkills() {
//     skillBox.style.visibility = "visible";
//     descriptionBox.style.visibility = "visible";
//     video.style.visibility = "hidden";
//     jobsVideo.src = "none"
// }

// skill highlight function
function clicked(event) {
    for(i=0; i<skillPhoto.length; i++) {
        skillPhoto[i].style.background = "none"
    }
    event.target.style.background = "rgba(0, 0, 0, 0.3)";
    // event.target.style.border = "none";
}

function clicked2(event) {
    for(i=0; i<buttons.length; i++) {
        buttons[i].style.background = "rgba(0, 0, 0, 0.5)";
    }
    event.target.style.background = "rgba(0, 0, 0, 0.8)";
    // event.target.style.border = "none";
}

X.addEventListener('click', function(){
    greyBox.style.background = "none"
    greyBox.style.visibility = "hidden";
    X.style.opacity = "0"
    show.style.opacity = 0;
    show.style.zIndex = -1;
    buttons[0].style.background = "rgba(0, 0, 0, 0.8)";
    buttons[1].style.background = "rgba(0, 0, 0, 0.5)";
})



// Events
knight.addEventListener("click", function(){
    // reset div by getting rid of all the skills
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

    // makes the first skill display on click
    descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.knight.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.knight.skills[0].description+'</p>'
    
    // add skill photos
    for(let i=0; i<jobs.knight.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.knight.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.knight.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.knight.skills[i].description+'</p>'
        })
        // default first skill has grey background
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
        buttons[0].style.background = "rgba(0, 0, 0, 0.8)"
    }

    // skill highlight
    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // skills / video button highlight
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', clicked2)
    }

    // changing video source
    jobsVideo.src = jobs.knight.video
    // background change (region)
    leftBackground.backgroundImage = jobs.knight.region
    // job photo
    jobPhoto.src = jobs.knight.photo
    // job name
    jobName.innerHTML = "Knight"
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible";
    // bringing the modal foward and changing opacity to cause fading 
    show.style.opacity = 1;
    show.style.zIndex = 1;
    // close button fade
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})

zerker.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.berserker.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.berserker.skills[0].description+'</p>'


    // add skill photos
    for(let i=0; i<jobs.berserker.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.berserker.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.berserker.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.berserker.skills[i].description+'</p>'
        })
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // changing video source
    jobsVideo.src = jobs.berserker.video
    // background change (region)
    leftBackground.backgroundImage = jobs.berserker.region
    // job photo
    jobPhoto.src = jobs.berserker.photo
    // job name
    jobName.innerHTML = jobs.berserker.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";

})

priest.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.priest.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.priest.skills[0].description+'</p>'


    // add skill photos
    for(let i=0; i<jobs.priest.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.priest.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.priest.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.priest.skills[i].description+'</p>'
        }) 
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }
    
    // changing video source
    jobsVideo.src = jobs.priest.video
    // background change (region)
    leftBackground.backgroundImage = jobs.priest.region
    // job photo
    jobPhoto.src = jobs.priest.photo
    // job name
    jobName.innerHTML = jobs.priest.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1;
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})

wizard.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.wizard.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.wizard.skills[0].description+'</p>'


    for(let i=0; i<jobs.wizard.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.wizard.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.wizard.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.wizard.skills[i].description+'</p>'
        }) 
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // changing video source
    jobsVideo.src = jobs.wizard.video
    // background change (region)
    leftBackground.backgroundImage = jobs.wizard.region
    // job photo
    jobPhoto.src = jobs.wizard.photo
    // job name
    jobName.innerHTML = jobs.wizard.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1;
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})

archer.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.archer.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.archer.skills[0].description+'</p>'
    

    for(let i=0; i<jobs.archer.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.archer.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.archer.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.archer.skills[i].description+'</p>'
        }) 
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // changing video source
    jobsVideo.src = jobs.archer.video
    // background change (region)
    leftBackground.backgroundImage = jobs.archer.region
    // job photo
    jobPhoto.src = jobs.archer.photo
    // job name
    jobName.innerHTML = jobs.archer.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1;
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})

hgunner.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.heavyGunner.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.heavyGunner.skills[0].description+'</p>'


    for(let i=0; i<jobs.archer.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.heavyGunner.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.heavyGunner.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.heavyGunner.skills[i].description+'</p>'
        }) 
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // changing video source
    jobsVideo.src = jobs.heavyGunner.video
    // background change (region)
    leftBackground.backgroundImage = jobs.heavyGunner.region
    // job photo
    jobPhoto.src = jobs.heavyGunner.photo
    // job name
    jobName.innerHTML = jobs.heavyGunner.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1;
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})

thief.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.thief.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.thief.skills[0].description+'</p>'


    for(let i=0; i<jobs.thief.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.thief.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.thief.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.thief.skills[i].description+'</p>'
        }) 
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
        
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // changing video source
    jobsVideo.src = jobs.thief.video
    // background change (region)
    leftBackground.backgroundImage = jobs.thief.region
    // job photo
    jobPhoto.src = jobs.thief.photo
    // job name
    jobName.innerHTML = jobs.thief.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1;
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})

assassin.addEventListener("click", function(){
    // reset div
    while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

     // makes the first skill display on click
     descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.thief.skills[0].name+'</h1>' + '<p class="skillDescription">'+jobs.thief.skills[0].description+'</p>'


    for(let i=0; i<jobs.assassin.skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs.assassin.skills[i].skill_photo
        // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+jobs.assassin.skills[i].name+'</h1>' + '<p class="skillDescription">'+jobs.assassin.skills[i].description+'</p>'
        }) 
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
    }

    for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
    }

    // changing video source
    jobsVideo.src = jobs.assassin.video
    // background change (region)
    leftBackground.backgroundImage = jobs.assassin.region
    // job photo
    jobPhoto.src = jobs.assassin.photo
    // job name
    jobName.innerHTML = jobs.assassin.name
    // background shade behind
    greyBox.style.background = "rgba(0, 0, 0, .3)"
    greyBox.style.visibility = "visible"
    show.style.opacity = 1;
    show.style.zIndex = 1;
    X.style.opacity = 1;
    // resets skills / video buttons to show skills button on default
    video.style.visibility = "hidden";
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
})


