// Left Div
var left = document.getElementById("videoBkgd")
// Right Div
var right = document.getElementById("rightSide")

// Skills text left side
var menuSkills = document.getElementById("menuSkills")
// video
var video = document.getElementById("videoBkgd")




// Mouse over show left side
left.addEventListener("mouseover", mouseOn);

function mouseOn() {
    left.style.transition = "all 1s"
    left.style.opacity = "1"
    // menuSkills.style.color = "white"
    video.style.opacity = 0.3
}

// Mouse off hide left side
left.addEventListener("mouseout", mouseOff);

function mouseOff() {
    left.style.opacity = "0"
    menuSkills.style.color = "black"
}



// right.addEventListener("mouseover", rmouseOn)

// function rmouseOn() {
//     right.style.background = "block"
// }
