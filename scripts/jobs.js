var jobs = {
    knight: {
        name: "Knight",
        photo: "images/knight/Knight.png",
        video: "https://www.youtube.com/embed/CHLD3I1fqCE",
        region: "url('images/backgrounds/perion.jpg')",
        skills: [
            ironDefense = {
                name: "Iron Defense",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "None",
                weapon_requirements: "Off-hand Shield",
                cooldown: "5 Seconds",
                skill_photo: "images/knight/inronDefense.png",
                description: "Adopt a knightly defensive stance, restoring 4 spirit every 0.3 sec and decreasing damage taken by 10%, but also reducing physical and magic attack by 25%. Press the skill key again to toggle the stance." 
            },

            shieldCharge = {
                name: "Shield Charge",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Physical",
                weapon_requirements: "Off-hand Shield",
                cooldown: "None",
                skill_photo: "images/knight/shieldCharge.png",
                description: "Charge forward 4.5 m, dealing 70% damage to 5 enemies and knocking them back 3 m. While charging, you cannot be knocked back. This skill can cancel other skills. Consumes 40 stamina." 
            },

            crossCut = {
                name: "Cross Cut",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "Main Hand Longsword",
                cooldown: "None",
                skill_photo: "images/knight/crossCut.png",
                description: "A swing of your sword deals 79% (133%) 2 times to 5 enemies up to 3 m in front of you." 
            },

            torndaoSlash = {
                name: "Tornado Slash",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "Main Hand Longsword",
                cooldown: "None",
                skill_photo: "images/knight/tornadoSlash.png",
                description: "Perform a spin slash, dealing 81% (126%) damage 3 times to 8 enemies within 3 m and pulling them in 1 m. Consumes 12 spirit." 
            },

            ironShield = {
                name: "Iron Shield",
                level_requirements: "10",
                skill_requirements: "None",
                type: "Active",
                additional_types: "None",
                weapon_requirements: "Off-hand Shield",
                cooldown: "None",
                skill_photo: "images/knight/ironShield.png",
                description: "Adopt a defensive stance with your shield, reducing incoming damage by 25% (70%). The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved." 
            },

            divineStrike = {
                name: "Divine Strike",
                level_requirements: "13",
                skill_requirements: "Tornado Slash [Level 2+], Cross Cut [Level 2+]",
                type: "Active",
                additional_types: "Holy, Close Range, Physical",
                weapon_requirements: "Main Hand Longsword",
                cooldown: "8 seconds",
                skill_photo: "images/knight/divineStrike.png",
                description: "Gathers light and smashes it down, creating a shockwave that deals 501% (816%) holy damage to 8 enemies and knocks them back 2 m. Enemy attacks will not push you back while this skill is active." 
            },

        ]
    },

    berserker: {
        name: "Berserker",
        photo: "images/zerker/zerker.png",
        video: "https://www.youtube.com/embed/yxtKKjhqoMQ?rel=0&amp;showinfo=0",
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
                skill_photo: "images/zerker/DarkAura.png",
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
                skill_photo: "images/zerker/xSlash.png",
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
                skill_photo: "images/zerker/DeathSpin.png",
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
                skill_photo: "images/zerker/RagingSlash.png",
                description: "Swing your weapon to deal 56% (83%) dark damage to 5 enemies up to 3 m in front of you. Keep pressing the key to trigger a 3-hit combo. The attack speed increases with each hit. The third hit is a double strike, and when finished you start over from the beginning. During the attack, press a direction key to move 0.6 m." 
            },

            // voidSlash = {
            //     name: "Void Slash",
            //     level_requirements: "Level 10",
            //     skill_requirements: "None",
            //     type: "Active",
            //     additional_types: "Dark, Close Range, Physical",
            //     weapon_requirements: "Two-handed Greatsword",
            //     cooldown: "none",
            //     skill_photo: "",
            //     description: "Swing your greatsword upward to deal 257% (410%) dark damage to 5 enemies up to 3 m in front of you. Press the skill key again to trigger a 2-hit combo. The second part is two quick swings, dealing 97% (151%) dark damage 2 times to 5 enemies up to 2 m in front of you. On the first hit, press a direction key to move 4 m and attack. On the secnod hit, the skill lasts while the skill key is held down. You will be immune to knockback while this skill is active. The first hit consumes 24 spirit and the second hit consumes 1 spirit." 
            // },

            // bloodLust = {
            //     name: "Blood Lust",
            //     level_requirements: "Level 13",
            //     skill_requirements: "Raging Slash [Level 2+]",
            //     type: "Active",
            //     additional_types: "Dark, Close Range, Physical",
            //     weapon_requirements: "Two-handed Greatsword",
            //     cooldown: "8 seconds",
            //     skill_photo: "",
            //     description: "Thrust your darkened greatsword into 2 enemies up to 3 m in front of you, then pull it out to deal 129% (210%) damage 2 times. The stab attack is always a critical, and pulling the sword out steals health from the enemy, restoring 7% (43%) of your max health. In PvP zones, the amount restored is halved." 
            // },

            // greatswordMastery = {
            //     name: "Greatsword Mastery",
            //     "level requirements": "Level 16",
            //     skill_requirements: "Raging Slash [Level 3+]",
            //     type: "Passive",
            //     additional_types: "None",
            //     weapon_requirements: "None",
            //     cooldown: "None",
            //     skill_photo: "",
            //     description: "Ten's lessons on asceticism increase your skill with a greatsword. Your weapon attack increases by 1% (6.4%) when you have a greatsword equipped." 
            // },

            // groundBreaker = {
            //     name: "Ground Breaker",
            //     level_requirements: "Level 19",
            //     skill_requirements: "Raging Slash [Level 2+], Death Spin [Level 3+]",
            //     type: "Active",
            //     additional_types: "Close Range, Physical",
            //     weapon_requirements: "Two-handed Greatsword",
            //     cooldown: "None",
            //     skill_photo: "",
            //     description: "Thrust your darkened greatsword into 2 enemies up to 3 m in front of you, then pull it out to deal 129% (210%) damage 2 times. The stab attack is always a critical, and pulling the sword out steals health from the enemy, restoring 7% (43%) of your max health. In PvP zones, the amount restored is halved." 
            // },

            // darkBreaker = {
            //     name: "Dark Breaker",
            //     level_requirements: "Level 22",
            //     skill_requirements: "Raging Slash [Level 4+], Void Slash [Level 3+]",
            //     type: "Active",
            //     additional_types: "Dark, Close Range, Physical",
            //     weapon_requirements: "Two-handed Greatsword",
            //     cooldown: "None",
            //     skill_photo: "",
            //     description: "Gather dark power into your greatsword and strike down with great force to deal 357% (582%) dark damage to 8 enemies within 3 m. The impact area resonates with darkness for 5 sec, dealing 148% (238%) dark damage to 8 enemies in range every second. This skill can only be used by consuming Dark Aura at max stacks. You will be immune to knockback while this skill is active." 
            // },

            // intimidation = {
            //     name: "Intimidation",
            //     level_requirements: "Level 28",
            //     skill_requirements: "Greatsword Mastery",
            //     type: "Active",
            //     additional_types: "Close Range, Physical",
            //     weapon_requirements: "None",
            //     cooldown: "16 Seconds",
            //     skill_photo: "",
            //     description: "Overwhelm enemies with a show of force, dealing 121% (193%) damage to 5 enemies within 3 m. Enemies lost the will to fight, reducing their physical attack and magic attack by 9% (36%) and their movement speed and jump power by 9% (36%) for 4 sec. When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill. Some powerful enemies are immune." 
            // },

            // bloodPrice = {
            //     name: "Blood Price",
            //     level_requirements: "Level 31",
            //     skill_requirements: "Bloodlust [Level 6+], Adrenaline Rush [Level 2+]",
            //     type: "Active",
            //     additional_types: "Close Range, Physical",
            //     weapon_requirements: "None",
            //     cooldown: "16 Seconds",
            //     skill_photo: "",
            //     description: "Overwhelm enemies with a show of force, dealing 121% (193%) damage to 5 enemies within 3 m. Enemies lost the will to fight, reducing their physical attack and magic attack by 9% (36%) and their movement speed and jump power by 9% (36%) for 4 sec. When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill. Some powerful enemies are immune." 
            // },
        ]
    },

    priest: {
        name: "Priest",
        photo: "images/priest/Priest.png",
        video: "https://www.youtube.com/embed/OOZbpmr6hjU",
        region: "url('images/backgrounds/ellinia.png')",
        skills: [
            heavenlyWings = {
                name: "Heavenly Wings",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Holy",
                weapon_requirements: "Off-hand Codex",
                cooldown: "None",
                skill_photo: "images/priest/heavenlyWings.png",
                description: "Spread your wings of light and soar to the farthest ally up to 6 m in front of you. The wings then transform into a divine aura, increasing you and your target's movement speed by 20% for 5 sec and restoring health up to 90% of your magic attack. If no allies are in range, you'll fly 4.5 m forward. This skill can cancel other skills. You will be immune to knockback while this skill is active. Consumes 60 stamina." 
            },

        ]
    },

    wizard: {
        name: "Wizard",
        photo: "images/wizard/Wizard.png",
        video: "https://www.youtube.com/embed/BwHnmCtUnXg",
        region: "url('images/backgrounds/ellinia.png')",
        skills: [
            manaFont = {
                name: "Mana Font",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Passive",
                additional_types: "None",
                weapon_requirements: "None",
                cooldown: "None",
                skill_photo: "images/wizard/manaFont.png",
                description: "Your fine control over your magical powers allows you to recover 1 spirit every 0.3 sec at will." 
            },

        ]
    },

    archer: {
        name: "Archer",
        photo: "images/archer/Archer.png",
        video: "https://www.youtube.com/embed/mU-CmVJrwKE?rel=0&amp",
        region: "url('images/backgrounds/hene.jpg')",
        skills: [
            eagleGlide = {
                name: "Eagle Glide",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "None",
                weapon_requirements: "None",
                cooldown: "None",
                skill_photo: "images/archer/eagleGlide.png",
                description: "Summon Bronze Eagle and grab onto him to fly 7.5 m forward. This skill can cancel other skills. Consumes 80 stamina." 
            },

        ]
    },

    heavyGunner: {
        name: "Heavy Gunner",
        photo: "images/heavyGunner/HeavyGunner.png",
        video: "https://www.youtube.com/embed/T2e3LXeqme4",
        region: "url('images/backgrounds/hene.jpg')",
        skills: [
            jetBoots = {
                name: "Jet Boots",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "None",
                weapon_requirements: "None",
                cooldown: "None",
                skill_photo: "images/heavyGunner/jetBoots.png",
                description: "Propel 6 m forward with your jet boots, leaving behind a shockwave that deals 120% damage to 5 enemies within 1.5 m. Consumes 60 stamina." 
            },

        ]
    },

    thief: {
        name: "Thief",
        photo: "images/thief/Thief.png",
        video: "https://www.youtube.com/embed/FxvQsbPFYzc",
        region: "url('images/backgrounds/kern.jpg')",
        skills: [
            mindStealer = {
                name: "Mind Stealer",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "Close Range, Physical",
                weapon_requirements: "None",
                cooldown: "None",
                skill_photo: "images/thief/mindStealer.png",
                description: "Nimbly move forward 4.5 m, dealing 40% damage to 3 enemies in your path and absorbing their energy to restore 10 spirit per target." 
            },

        ]
    },

    assassin: {
        name: "Assassin",
        photo: "images/assassin/Assassin.png",
        video: "https://www.youtube.com/embed/Z2UbJG4YkuM",
        region: "url('images/backgrounds/kern.jpg')",
        skills: [
            dash = {
                name: "Dash",
                level_requirements: "None",
                skill_requirements: "None",
                type: "Active",
                additional_types: "None",
                weapon_requirements: "None",
                cooldown: "None",
                skill_photo: "images/assassin/dash.png",
                description: "Deftly leap forward 4.5 m. This skill can cancel other skills. Consumes 40 stamina." 
            },

        ]
    },

}