// var jobPicker = document.getElementById("classPicker");
var body = document.getElementsByTagName("body");

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




// adds all of the mini images
// for every element inside job array
jobs.forEach(function(e){
    // create new img
    var jobImage = document.createElement("img");
    // gives that img a class named classPhotos
    jobImage.className = "jobPhotos"
    // gives an img src to every img basted on what element its on
    jobImage.src = e.miniImage
    // adds that img to the classPicker div
    classPicker.append(jobImage);
    // add a click evenListener
    jobImage.addEventListener('click', showModal)
    // when clicking any of the jobs do the following
    jobImage.addEventListener('click', function(){
        // console.log(e.skills.length);
        // reset div by getting rid of all the skills
        while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
    }

        // makes the first skill display on click
        descriptionBox.innerHTML = '<h1 class="skillName">'+e.skills[0].name+'</h1>' + '<p class="skillDescription">'+e.skills[0].description+'</p>'

        // add sskill photos
        for(let i=0; i<e.skills.length; i++){
            // creating img
            var skillImage = document.createElement("img");
            // giving img a class name of skillPhoto
            skillImage.className = "skillPhoto"
            // changing the src to show the correct image
            skillImage.src = e.skills[i].skill_photo
             // appending that img to the skillbox area
            skillBox.append(skillImage);
            // click an image to change the inside of the bottom box to the skill desscription
            skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = '<h1 class="skillName">'+e.skills[i].name+'</h1>' + '<p class="skillDescription">'+e.skills[i].description+'</p>'
            })  
            // // default first skill has grey background
            skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
            buttons[0].style.background = "rgba(0, 0, 0, 0.8)"
        }
        // changing video source
        jobsVideo.src = e.video
        // background change (region)
        leftBackground.backgroundImage = e.region
        // job photo
        jobPhoto.src = e.photo
        // job name
        jobName.innerHTML = e.name

        // skill highlight
        for(r=0; r<skillPhoto.length; r++){
        skillPhoto[r].addEventListener('click', clicked)
        }

        // skills / video button highlight
        for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', clicked2)
        }
    })
})



function showModal() {
    // adds a gray box to fade behind modal
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

}

function showVideo() {
    skillBox.style.visibility = "hidden";
    descriptionBox.style.visibility = "hidden";
    video.style.visibility = "visible";
}

// after hitting the skills button
function showSkills() {
    skillBox.style.visibility = "visible";
    descriptionBox.style.visibility = "visible";
    video.style.visibility = "hidden";var leftBackground = document.getElementById("left").style

}

// click off model event 
window.onclick = function(event) {
    if(event.target == greyBox){
        // gets ride of grey box
        greyBox.style.background = "none"
        greyBox.style.visibility = "hidden";
        X.style.opacity = "0"
        show.style.opacity = 0;
        show.style.zIndex = -1;
        buttons[0].style.background = "rgba(0, 0, 0, 0.8)";
        buttons[1].style.background = "rgba(0, 0, 0, 0.5)";
        jobsVideo.src = "none"
    }
}

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



// shows video
videoButton.addEventListener('click', showVideo)
skillsButton.addEventListener('click', showSkills)