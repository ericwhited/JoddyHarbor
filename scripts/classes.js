// Class Picker Stuff

// MS2 Job Declarations 
var knight = document.getElementById("knightLink")
var zerker = document.getElementById("zerkerLink")
var priest = document.getElementById("priestLink")
var wizard = document.getElementById("wizardLink")
var ranger = document.getElementById("rangerLink")
var hgunner = document.getElementById("hgunnerLink")
var thief = document.getElementById("thiefLink")
var assassin = document.getElementById("assassinLink")

// models
var knightModel = document.getElementById("knightModel")
var zerkerModel = document.getElementById("zerkerModel")
var priestModel = document.getElementById("priestModel")
var wizardModel = document.getElementById("wizardModel")
var rangerModel = document.getElementById("rangerModel")
var hgunnerModel = document.getElementById("hgunnerModel")
var thiefModel = document.getElementById("thiefModel")
var assassinModel = document.getElementById("assassinModel")

// Gray Box to add shadow
var greyBox = document.getElementById("greyBox")



// Events
knight.addEventListener("click", function(){
    knightModel.classList.toggle("classPopUpModelShow")  
    document.getElementById('modelWrap').classList.toggle('show')
    greyBox.style.visibility = 'visible';
})

zerker.addEventListener("click", function(){
    zerkerModel.classList.toggle("classPopUpModelShow")  
    document.getElementById('modelWrap').classList.toggle('show')
    greyBox.style.visibility = 'visible';
    // document.getElementById("classesBody").classList.toggle('classesBodyShow')
    // document.getElementById("classesBody").style.background = "linear-gradient(to left, #000 40%";
})

priest.addEventListener("click", function(){
    priestModel.classList.toggle("classPopUpModelShow")  
    document.getElementById('modelWrap').classList.toggle('show')
    greyBox.style.visibility = 'visible';
})

wizard.addEventListener("click", function(){
    wizardModel.classList.toggle("classPopUpModelShow")  
    document.getElementById('modelWrap').classList.toggle('show')
    greyBox.style.visibility = 'visible';
})

ranger.addEventListener("click", function(){
    rangerModel.classList.toggle("classPopUpModelShow")  
    document.getElementById('modelWrap').classList.toggle('show')
    greyBox.style.visibility = 'visible';
})


// skill expand
var skills = document.getElementsByClassName("skills")

for(i = 0; i<skills.length; i++) {
    // skills[i].style.color = "red"
    skills[i].onclick = function() {
        skills.style.height = "82%"
    }
}

// click out and exit model functionality
document.querySelector('body').addEventListener('click', function(e) {
    if (!e.target.classList.contains('classPhotos') && !hasSomeParentTheClass(e.target, 'classPopUpModel')) {
        knightModel.classList.remove("classPopUpModelShow")  
        zerkerModel.classList.remove("classPopUpModelShow"),
        priestModel.classList.remove("classPopUpModelShow"),
        wizardModel.classList.remove("classPopUpModelShow"),
        rangerModel.classList.remove("classPopUpModelShow"),
        hgunnerModel.classList.remove("classPopUpModelShow"),
        thiefModel.classList.remove("classPopUpModelShow"),
        assassinModel.classList.remove("classPopUpModelShow"),
        document.getElementById('modelWrap').classList.remove('show')
        greyBox.style.visibility = 'hidden';
    }
})



// click out and exit model functionality
function hasSomeParentTheClass(element, classname) {
    // 
    if (element.className && element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}



// var modelBefore = document.getElementsByClassName = "classPopUpModelBefore"