

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
var skillsButton = document.getElementById("skillsButton")
// skill photo
var skillPhoto = document.getElementsByClassName("skillPhoto");
// modal
var show = document.getElementById("show")
// X button
var X = document.getElementById("X")
// Gray Box to add shadow
var greyBox = document.getElementById("greyBox")
// video / skill buttons 
var buttons = document.getElementsByClassName("button");

var currentJob = 


// adds all of the mini images
// for every element inside job array
// for(i=0; i<jobs.length; i++) {
//     // create new img
//     var jobImage = document.createElement("img");
//     // gives that img a class named classPhotos
//     jobImage.className = "jobPhotos"
//     // gives an img src to every img basted on what element its on
//     jobImage.src = jobs[i].miniImage
//     // adds that img to the classPicker div
//     classPicker.append(jobImage);
//     // add a click evenListener
//     jobImage.addEventListener('click', function(){
//         console.log(jobs[i]);
//     });
// }


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
    jobImage.addEventListener('click', function(){
        console.log(jobs.lastIndexOf(e));
        currentJob = jobs.lastIndexOf(e);
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


X.addEventListener('click', function(){
    greyBox.style.background = "none"
    greyBox.style.visibility = "hidden";
    X.style.opacity = "0"
    show.style.opacity = 0;
    show.style.zIndex = -1;
    buttons[0].style.background = "rgba(0, 0, 0, 0.8)";
    buttons[1].style.background = "rgba(0, 0, 0, 0.5)";
})