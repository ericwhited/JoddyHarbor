

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

var leftArrow = document.getElementById('leftIcon')

var rightArrow = document.getElementById('rightIcon')

var currentJob = 

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
        // reset div by getting rid of all the skills
        while(skillBox.firstChild){
        skillBox.removeChild(skillBox.firstChild);
        }

        // setting the current job 
        currentJob = jobs.lastIndexOf(e);

        // makes the first skill display on click
        descriptionBox.innerHTML = '<h1 class="skillName">'+ jobs[currentJob].skills[0].name + '</h1>' + '<p class="skillDescription">'+ jobs[currentJob].skills[0].description + '</p>'
        // add sskill photos
        for(let i=0; i<jobs[currentJob].skills.length; i++){
            // creating img
            var skillImage = document.createElement("img");
            // giving img a class name of skillPhoto
            skillImage.className = "skillPhoto"
            // changing the src to show the correct image
            skillImage.src = jobs[currentJob].skills[i].skill_photo
             // appending that img to the skillbox area
            skillBox.append(skillImage);
            // click an image to change the inside of the bottom box to the skill desscription
            skillImage.addEventListener('click', function(){
            descriptionBox.innerHTML = 
                // name
                '<h1 class="skillName">'+jobs[currentJob].skills[i].name+'</h1>' 
                // desc
                + '<p class="skillDescription">'+jobs[currentJob].skills[i].description+'</p>'
                // type 
                // + '<p id="skillType">' + e.skills[i].type + '</p>'
                // level requirement
                // + '<p id="'
                // skill requirements
                // additional types
                // weapon requirements
                // cooldown
            })  
            // // default first skill has grey background
            skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
            buttons[0].style.background = "rgba(0, 0, 0, 0.8)"
        }
        // changing video source
        jobsVideo.src = jobs[currentJob].video
        // background change (region)
        leftBackground.backgroundImage = jobs[currentJob].region
        // job photo
        jobPhoto.src = jobs[currentJob].photo
        // job name
        jobName.innerHTML = jobs[currentJob].name

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


X.addEventListener('click', function(){
    greyBox.style.background = "none"
    greyBox.style.visibility = "hidden";
    X.style.opacity = "0"
    show.style.opacity = 0;
    show.style.zIndex = -1;
    buttons[0].style.background = "rgba(0, 0, 0, 0.8)";
    buttons[1].style.background = "rgba(0, 0, 0, 0.5)";
})


// Make this section more DRY!


leftArrow.addEventListener('click', function(){
    // reset div by getting rid of all the skills
    while(skillBox.firstChild){
    skillBox.removeChild(skillBox.firstChild);
    }

    // setting the current job 
    currentJob = currentJob + -1
    console.log(currentJob);

    if(currentJob < 0) {
        currentJob = 7
    } else if(currentJob > 7) {
        currentJob = 0;
    }

    // makes the first skill display on click
    descriptionBox.innerHTML = '<h1 class="skillName">'+ jobs[currentJob].skills[0].name + '</h1>' + '<p class="skillDescription">'+ jobs[currentJob].skills[0].description + '</p>'
    // add sskill photos
    for(let i=0; i<jobs[currentJob].skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs[currentJob].skills[i].skill_photo
         // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
        descriptionBox.innerHTML = 
            // name
            '<h1 class="skillName">'+jobs[currentJob].skills[i].name+'</h1>' 
            // desc
            + '<p class="skillDescription">'+jobs[currentJob].skills[i].description+'</p>'
            // type 
            // + '<p id="skillType">' + e.skills[i].type + '</p>'
            // level requirement
            // + '<p id="'
            // skill requirements
            // additional types
            // weapon requirements
            // cooldown
        })  
        // // default first skill has grey background
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
        buttons[0].style.background = "rgba(0, 0, 0, 0.8)"
    }
    // changing video source
    jobsVideo.src = jobs[currentJob].video
    // background change (region)
    leftBackground.backgroundImage = jobs[currentJob].region
    // job photo
    jobPhoto.src = jobs[currentJob].photo
    // job name
    jobName.innerHTML = jobs[currentJob].name

    // skill highlight
    for(r=0; r<skillPhoto.length; r++){
    skillPhoto[r].addEventListener('click', clicked)
    }

    // skills / video button highlight
    for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', clicked2)
    }
})


rightArrow.addEventListener('click', function(){
    // reset div by getting rid of all the skills
    while(skillBox.firstChild){
    skillBox.removeChild(skillBox.firstChild);
    }

    // setting the current job 
    currentJob = currentJob + 1
    console.log(currentJob);

    if(currentJob < 0) {
        currentJob = 7
    } else if(currentJob > 7) {
        currentJob = 0;
    }

    // makes the first skill display on click
    descriptionBox.innerHTML = '<h1 class="skillName">'+ jobs[currentJob].skills[0].name + '</h1>' + '<p class="skillDescription">'+ jobs[currentJob].skills[0].description + '</p>'
    // add sskill photos
    for(let i=0; i<jobs[currentJob].skills.length; i++){
        // creating img
        var skillImage = document.createElement("img");
        // giving img a class name of skillPhoto
        skillImage.className = "skillPhoto"
        // changing the src to show the correct image
        skillImage.src = jobs[currentJob].skills[i].skill_photo
         // appending that img to the skillbox area
        skillBox.append(skillImage);
        // click an image to change the inside of the bottom box to the skill desscription
        skillImage.addEventListener('click', function(){
        descriptionBox.innerHTML = 
            // name
            '<h1 class="skillName">'+jobs[currentJob].skills[i].name+'</h1>' 
            // desc
            + '<p class="skillDescription">'+jobs[currentJob].skills[i].description+'</p>'
            // type 
            // + '<p id="skillType">' + e.skills[i].type + '</p>'
            // level requirement
            // + '<p id="'
            // skill requirements
            // additional types
            // weapon requirements
            // cooldown
        })  
        // // default first skill has grey background
        skillPhoto[0].style.background = "rgba(0, 0, 0, 0.4)"
        buttons[0].style.background = "rgba(0, 0, 0, 0.8)"
    }
    // changing video source
    jobsVideo.src = jobs[currentJob].video
    // background change (region)
    leftBackground.backgroundImage = jobs[currentJob].region
    // job photo
    jobPhoto.src = jobs[currentJob].photo
    // job name
    jobName.innerHTML = jobs[currentJob].name

    // skill highlight
    for(r=0; r<skillPhoto.length; r++){
    skillPhoto[r].addEventListener('click', clicked)
    }

    // skills / video button highlight
    for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', clicked2)
    }
})