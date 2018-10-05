// Class Picker Stuff

// MS2 Job Declarations 
var zerker = document.getElementById("zerkerLink")
var zerkerModel = document.getElementById("zerkerModel")

var knight = document.getElementById("")
// var modelBefore = document.getElementsByClassName = "classPopUpModelBefore"



zerker.addEventListener("click", function(){
    // change display to inline-block on zerker model
    zerkerModel.classList.toggle("classPopUpModelShow")  
    document.getElementById('modelWrap').classList.toggle('show')
})



// click out and exit model functionality
document.querySelector('body').addEventListener('click', function(e) {
    if (!e.target.classList.contains('classPhotos') && !hasSomeParentTheClass(e.target, 'classPopUpModel')) {
        zerkerModel.classList.remove("classPopUpModelShow")  
        document.getElementById('modelWrap').classList.remove('show')
    }
})

// click out and exit model functionality
function hasSomeParentTheClass(element, classname) {
    if (element.className && element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}


