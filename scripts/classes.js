// Class Picker Stuff

// MS2 Job Declarations 
var knight = document.getElementById("knightLink")
var zerker = document.getElementById("zerkerLink")
var priest = document.getElementById("priestLink")
var wizard = document.getElementById("wizardLink")
var archer = document.getElementById("archerLink")
var hgunner = document.getElementById("hgunnerLink")
var thief = document.getElementById("thiefLink")
var assassin = document.getElementById("assassinLink")

// Modal Areas
// The background of the model left side behind the job photo
var leftBackground = document.getElementById("left").style
// job Photo
var jobPhoto = document.getElementById("jobPhoto")
// job name 
var jobName = document.getElementById("jobName")

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
    // background change (region)
    leftBackground.backgroundImage = jobs.knight.region
    // job photo
    jobPhoto.src = jobs.knight.photo
    // job name
    jobName.innerHTML = "Knight"
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})






zerker.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.berserker.region
    // job photo
    jobPhoto.src = jobs.berserker.photo
    // job name
    jobName.innerHTML = jobs.berserker.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})

priest.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.priest.region
    // job photo
    jobPhoto.src = jobs.priest.photo
    // job name
    jobName.innerHTML = jobs.priest.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})

wizard.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.wizard.region
    // job photo
    jobPhoto.src = jobs.wizard.photo
    // job name
    jobName.innerHTML = jobs.wizard.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})

archer.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.archer.region
    // job photo
    jobPhoto.src = jobs.archer.photo
    // job name
    jobName.innerHTML = jobs.archer.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})

hgunner.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.heavyGunner.region
    // job photo
    jobPhoto.src = jobs.heavyGunner.photo
    // job name
    jobName.innerHTML = jobs.heavyGunner.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})

thief.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.thief.region
    // job photo
    jobPhoto.src = jobs.thief.photo
    // job name
    jobName.innerHTML = jobs.thief.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})

assassin.addEventListener("click", function(){
    // background change (region)
    leftBackground.backgroundImage = jobs.assassin.region
    // job photo
    jobPhoto.src = jobs.assassin.photo
    // job name
    jobName.innerHTML = jobs.assassin.name
    // background shade behind
    greyBox.style.display = 'block';
    // skill area
    // insert skills into top box
})


var jobs = {
    knight: {
        name: "Knight",
        photo: "images/knight/Knight.png",
        region: "url('images/backgrounds/perion.jpg')",
        skills: [

        ]
    },

    berserker: {
        name: "Berserker",
        photo: "images/zerker/zerker.png",
        region: "url('images/backgrounds/perion.jpg')",
        skills: [
            darkAura = {
                name: "Dark Aura",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Passive",
                additional_types: "Dark",
                weapon_requirements: "None",
                cooldown: "none",
                skill_photo: "https://c-7npsfqifvt34x24e2v6q4m5x78qbz4lx2edmpvegspoux2eofu.g00.gamepedia.com/g00/3_c-7nbqmftupsz3.hbnfqfejb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fe2v6q4m5x78qbz4l.dmpvegspou.ofux2fnbqmftupsz3_hbnfqfejbx2ffx2ffgx2fEbsl_Bvsb.qohx3fwfstjpox3d0df7b5d21f43b7744b18edg9f0dd299ex26j21d.nbslx3djnbhf_$/$/$/$/$",
                description: "Your latent dark power restores 10 spirit every second. Dark Aura stacks on hit, up to once per second, up to 10 times total. Each stack increases the amount restored by an additional 1 spirit." 
            },

            XSlash = {
                name: "X Slash",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "none",
                skill_photo: "https://c-7npsfqifvt34x24e2v6q4m5x78qbz4lx2edmpvegspoux2eofu.g00.gamepedia.com/g00/3_c-7nbqmftupsz3.hbnfqfejb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fe2v6q4m5x78qbz4l.dmpvegspou.ofux2fnbqmftupsz3_hbnfqfejbx2f2x2f28x2fY_Tmbti.qohx3fwfstjpox3d39584f50b43gf9geec0993bb6f6134d3x26j21d.nbslx3djnbhf_$/$/$/$/$",
                description: "Swing your greatsword in an X as you charge forward 4.5 m, dealing 75% damage 2 times to 5 enemies in your path. This skill can cancel other skills. You will be immune to knockback while this skill is active. Consumes 40 stamina." 
            },

            deathSpin = {
                name: "Death Spin",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Dark, Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "none",
                skill_photo: "",
                description: "Spin your greatsword, dealing 69% (114%) dark damage to 8 enemies within 3 m. During the attack, press a direction key to move 1.6 m. The distance decreases to 1.2 m on your second spin and to 0.8 m on your third and subsequent spins. Consumes 4 spirit." 
            },

            ragingSlash = {
                name: "Raging Slash",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Dark, Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "none",
                skill_photo: "",
                description: "Swing your weapon to deal 56% (83%) dark damage to 5 enemies up to 3 m in front of you. Keep pressing the key to trigger a 3-hit combo. The attack speed increases with each hit. The third hit is a double strike, and when finished you start over from the beginning. During the attack, press a direction key to move 0.6 m." 
            },

            voidSlash = {
                name: "Void Slash",
                level_requirements: "Level 10",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Dark, Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "none",
                skill_photo: "",
                description: "Swing your greatsword upward to deal 257% (410%) dark damage to 5 enemies up to 3 m in front of you. Press the skill key again to trigger a 2-hit combo. The second part is two quick swings, dealing 97% (151%) dark damage 2 times to 5 enemies up to 2 m in front of you. On the first hit, press a direction key to move 4 m and attack. On the secnod hit, the skill lasts while the skill key is held down. You will be immune to knockback while this skill is active. The first hit consumes 24 spirit and the second hit consumes 1 spirit." 
            },

            bloodLust = {
                name: "Blood Lust",
                level_requirements: "Level 13",
                skill_requirements: "Raging Slash [Level 2+]",
                type: "Active",
                additional_types: "Dark, Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "8 seconds",
                skill_photo: "",
                description: "Thrust your darkened greatsword into 2 enemies up to 3 m in front of you, then pull it out to deal 129% (210%) damage 2 times. The stab attack is always a critical, and pulling the sword out steals health from the enemy, restoring 7% (43%) of your max health. In PvP zones, the amount restored is halved." 
            },

            greatswordMastery = {
                name: "Greatsword Mastery",
                "level requirements": "Level 16",
                skill_requirements: "Raging Slash [Level 3+]",
                type: "Passive",
                additional_types: "None",
                weapon_requirements: "None",
                cooldown: "None",
                skill_photo: "",
                description: "Ten's lessons on asceticism increase your skill with a greatsword. Your weapon attack increases by 1% (6.4%) when you have a greatsword equipped." 
            },

            groundBreaker = {
                name: "Ground Breaker",
                level_requirements: "Level 19",
                skill_requirements: "Raging Slash [Level 2+], Death Spin [Level 3+]",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "None",
                skill_photo: "",
                description: "Thrust your darkened greatsword into 2 enemies up to 3 m in front of you, then pull it out to deal 129% (210%) damage 2 times. The stab attack is always a critical, and pulling the sword out steals health from the enemy, restoring 7% (43%) of your max health. In PvP zones, the amount restored is halved." 
            },

            darkBreaker = {
                name: "Dark Breaker",
                level_requirements: "Level 22",
                skill_requirements: "Raging Slash [Level 4+], Void Slash [Level 3+]",
                type: "Active",
                additional_types: "Dark, Close Range, Physical",
                weapon_requirements: "Two-handed Greatsword",
                cooldown: "None",
                skill_photo: "",
                description: "Gather dark power into your greatsword and strike down with great force to deal 357% (582%) dark damage to 8 enemies within 3 m. The impact area resonates with darkness for 5 sec, dealing 148% (238%) dark damage to 8 enemies in range every second. This skill can only be used by consuming Dark Aura at max stacks. You will be immune to knockback while this skill is active." 
            },

            intimidation = {
                name: "Intimidation",
                level_requirements: "Level 28",
                skill_requirements: "Greatsword Mastery",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "None",
                cooldown: "16 Seconds",
                skill_photo: "",
                description: "Overwhelm enemies with a show of force, dealing 121% (193%) damage to 5 enemies within 3 m. Enemies lost the will to fight, reducing their physical attack and magic attack by 9% (36%) and their movement speed and jump power by 9% (36%) for 4 sec. When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill. Some powerful enemies are immune." 
            },

            bloodPrice = {
                name: "Blood Price",
                level_requirements: "Level 31",
                skill_requirements: "Bloodlust [Level 6+], Adrenaline Rush [Level 2+]",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "None",
                cooldown: "16 Seconds",
                skill_photo: "",
                description: "Overwhelm enemies with a show of force, dealing 121% (193%) damage to 5 enemies within 3 m. Enemies lost the will to fight, reducing their physical attack and magic attack by 9% (36%) and their movement speed and jump power by 9% (36%) for 4 sec. When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill. Some powerful enemies are immune." 
            },
        ]
    },

    priest: {
        name: "Priest",
        photo: "images/priest/Priest.png",
        region: "url('images/backgrounds/ellinia.png')",
        skills: [

        ]
    },

    wizard: {
        name: "Wizard",
        photo: "images/wizard/Wizard.png",
        region: "url('images/backgrounds/ellinia.png')",
        skills: [

        ]
    },

    archer: {
        name: "Archer",
        photo: "images/archer/Archer.png",
        region: "url('images/backgrounds/hene.jpg')",
        skills: [

        ]
    },

    heavyGunner: {
        name: "Heavy Gunner",
        photo: "images/heavyGunner/HeavyGunner.png",
        region: "url('images/backgrounds/hene.jpg')",
        skills: [

        ]
    },

    thief: {
        name: "Thief",
        photo: "images/thief/Thief.png",
        region: "url('images/backgrounds/kern.jpg')",
        skills: [

        ]
    },

    assassin: {
        name: "Assassin",
        photo: "images/assassin/Assassin.png",
        region: "url('images/backgrounds/kern.jpg')",
        skills: [

        ]
    },

}

