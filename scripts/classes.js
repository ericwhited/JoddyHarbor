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
var modal = document.getElementById("show")

window.onclick = function(event) {
    if(event.target == greyBox){
        greyBox.style.display = "none";
    }
}

// Events
knight.addEventListener("click", function(){
    // fill code here
    greyBox.style.display = 'block';
})

zerker.addEventListener("click", function(){
    greyBox.style.display = 'block';
})

priest.addEventListener("click", function(){
    greyBox.style.display = 'block';
})

wizard.addEventListener("click", function(){
    greyBox.style.display = 'block';
})

ranger.addEventListener("click", function(){
    greyBox.style.display = 'block';
})

hgunner.addEventListener("click", function(){
    greyBox.style.display = 'block';
})

thief.addEventListener("click", function(){
    greyBox.style.display = 'block';
})

assassin.addEventListener("click", function(){
    greyBox.style.display = 'block';
})




// document.querySelector('body').onclick = function() {
//     document.getElementById("show").id = "classPopUpModel"
// }



// click out and exit model functionality
// document.querySelector('body').addEventListener('click', function(e) {
//     if (!e.target.classList.contains('classPhotos') && !hasSomeParentTheClass(e.target, 'classPopUpModel')) {
//         document.getElementById("show").id = "classPopUpModel"
//         greyBox.style.visibility = 'hidden';
//     }
// })






// // click out and exit model functionality
// function hasSomeParentTheClass(element, classname) {
//     // 
//     if (element.className && element.className.split(' ').indexOf(classname)>=0) return true;
//     return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
// }







// var priestArr = [];

// class mapleJobs {
  
//   constructor (job, skillName, description) {
//     this.job = job;
//     this.skillName = skillName;
//     this.description = description;
//     window[this.job.toString()+"Arr"].push(this);
//   }
// }

// var priestSkill1 = new mapleJobs("priest", "holy symbol", "magic stuff");


// var priestSkillsButtons = document.getElementsByClassName("priestSkillButtons")

// for(i=0; i<priestSkillButtons.length; i++) {
//     priestSkillButtons[i].addEventListener('click', function() {
//         document.getElementsByClass("buttom")
//     })
// }
// console.log(priestArr);





// var jobs = {
//     knight: {
//         skills: {
//             name: "skill 1",
//             desc: "skill 1 desc",
//             level: "none"
//         }
//     },
//     berserker: {
//         skills: {
//             darkAura: {
//                 name: "Dark Aura",
//                 description: "Your latent dark power restores 10 spirit every second. Dark Aura stacks on hit, up to once per second, up to 10 times total. Each stack increases the amount restored by an additional 1 spirit.",
//                 level: "none"
//             }
//         }

//     }
// }
