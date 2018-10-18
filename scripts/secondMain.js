// var jobPicker = document.getElementById("classPicker");
var body = document.getElementsByTagName("body");

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