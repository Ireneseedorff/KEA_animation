window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;
let timeLeft = 60;
let point = 0;
let life = 3;

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting

    // -> showStart
    showStart();
}

// START SPIL

function showStart() {
    // note i console
    console.log("showStart");

    document.querySelector("#party_lys").classList.add("lys");
    //document.querySelector("#party_lys_venstre").classList.add("lys");

    //Vis startskærm
    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#start").classList.add("show");
    // Start animation på startskærm
    document.querySelector("#play").classList.add("pulse");

    //click to play
    document.querySelector("#play").addEventListener("click", hideStart);

    //click to settings
    document.querySelector("#settings_button").addEventListener("click", showSettings);




}

function hideStart() {
    console.log("hideStart");

    // Stop animation på startskærm
    document.querySelector("#play").classList.remove("pulse");
    //Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // når fade-animationen er færdig -> startgame
    document.querySelector("#start").addEventListener("animationend", startGame);


}


function startGame() {
    console.log("startGame");
    document.querySelector("#start").removeEventListener("animationend", startGame);

    timeLeftFc();

    // Skjul startskærm
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");

    //skul startskærm
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#gameover").classList.remove("show");

    //skul startskærm
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("show");


    // Vis spilskærm
    document.querySelector("#game").classList.add("show");

    //start music
    document.querySelector("#myMusic").play();

    document.querySelector("#game_ui").classList.remove("hide");
    document.querySelector("#game_elements").classList.remove("hide");

    // start spil med elementer
    document.querySelector("#fluesvamp1").classList.add("fall_down");
    document.querySelector("#fluesvamp2").classList.add("fall_down");
    document.querySelector("#fluesvamp3").classList.add("fall_down");
    document.querySelector("#redbull").classList.add("fall_down");
    document.querySelector("#godsvamp1").classList.add("fall_down");
    document.querySelector("#godsvamp2").classList.add("fall_down");
    document.querySelector("#godsvamp3").classList.add("fall_down");
    document.querySelector("#godsvamp4").classList.add("fall_down");


    // så er der klasser på ... nu skal vi kunne klikke
    document.querySelector("#godsvamp1").addEventListener("click", clickSvamp);
    document.querySelector("#godsvamp2").addEventListener("click", clickSvamp);
    document.querySelector("#godsvamp3").addEventListener("click", clickSvamp);
    document.querySelector("#godsvamp4").addEventListener("click", clickSvamp);
    document.querySelector("#redbull").addEventListener("click", clickRedbull);
    document.querySelector("#fluesvamp1").addEventListener("click", clickFluesvamp);
    document.querySelector("#fluesvamp2").addEventListener("click", clickFluesvamp);
    document.querySelector("#fluesvamp3").addEventListener("click", clickFluesvamp);

    // Check om vi har nået bunden
    document.querySelector("#godsvamp1").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#godsvamp2").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#godsvamp3").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#godsvamp4").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#redbull").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#fluesvamp1").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#fluesvamp2").addEventListener("animationiteration", naaetBunden);
    document.querySelector("#fluesvamp3").addEventListener("animationiteration", naaetBunden);

}

function naaetBunden() {
    console.log(this);
    console.log("har nået bunden");

    this.classList.remove("hide");
}

function timeLeftFc() {
    console.log("timeLeft" + timeLeft);
    document.querySelector("#time").innerHTML = timeLeft;

    if (timeLeft > 0) {
        timeLeft--;

        setTimeout(timeLeftFc, 1000);
    } else {
        console.log("Nu er timeLeft = 0");
        gameStatus();
    }
}

function clickSvamp() {
    console.log("click svamp");

    // TODO: giv point!
    point++;
    console.log(point);
    // også TODO: Få det til at virke så mønten starter forfra - det må vente

    //let energy = 3 * point;
    //console.log(energy);

    document.querySelector("#points").textContent = point;

    //Få svampene til at forsinde når man klikker på dem
    console.log(this);
    this.classList.add("hide");

    //Få tingene til at komme random op
    //let myNumber = Math.floor((Math.random() * 5) + 1);
    //console.log("tilfældigt tal: " + myNumber);
    // this.classList = "" + myNumber;

    //her kanlder man på gamestatus så den kan undersøge hver gang hvor mange liv der må være tilbage
    gameStatus();

    document.querySelector("#wuhu").play();
    document.querySelector("#wuhu").currentTime = 0;

}


function clickRedbull() {
    console.log("click redbull");

    // TODO: giv point!
    point = point + 3;
    console.log(point);
    // også TODO: Få det til at virke så mønten starter forfra - det må vente

    // let energy = point;
    // console.log(energy);

    document.querySelector("#points").textContent = point;


    // Få redbull til at forsvinde
    document.querySelector("#redbull").classList.add("hide");

    //her kanlder man på gamestatus så den kan undersøge hver gang hvor mange liv der må være tilbage
    gameStatus();

    document.querySelector("#wuhu").play();
    document.querySelector("#wuhu").currentTime = 0;

}



function clickFluesvamp() {
    console.log("click fluesvamp");

    life--;
    document.querySelector("#energy").innerHTML = life;
    console.log(life);

    // også TODO: Få eksplosionen til at virke igen - det må også vente

    document.querySelector("#points").textContent = point;

    //Få fluesvampe til at forsvinde
    console.log(this);
    this.classList.add("hide");

    //her kalder man på gamestatus så den kan undersøge hver gang hvor mange liv der må være tilbage
    gameStatus();

    document.querySelector("#hvadlaverdu").play();
    document.querySelector("#hvadlaverdu").currentTime = 0;

}

// SETTING KNAP

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings_button").removeEventListener("click", showSettings);
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.remove("fade_out");

    //Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");
    // Vis settings
    document.querySelector("#settings").classList.add("show");

    // Click to exit
    document.querySelector("#exit_button").addEventListener("click", hideSettings);

    //settings music and effects
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
}

function hideSettings() {
    console.log("hideSettings");

    document.querySelector("#exit_button").classList.add("pulse");

    //Fade settingskærm ud
    document.querySelector("#settings").classList.add("fade_out");

    //Fade startskærm ud
    document.querySelector("#start").classList.remove("fade_out");

    // når fade-animationen er færdig -> showstart
    document.querySelector("#settings").addEventListener("animationend", showStart);

}

function toggleSounds() {
    console.log("toggle sounds");
    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();

    } else {
        showSettingsEffektSound = true;
        soundsOn();

    }

}

function soundsOff() {
    console.log("sounds OFF");

    document.querySelector("#soundeffect_button").classList.remove("soundeffect_button_on");
    document.querySelector("#soundeffect_button").classList.add("soundeffect_button_off");

    document.querySelector("#wuhu").muted = true;
    document.querySelector("#hvadlaverdu").muted = true;

}

function soundsOn() {
    console.log("sounds ON");
    document.querySelector("#soundeffect_button").classList.add("soundeffect_button_on");
    document.querySelector("#soundeffect_button").classList.remove("soundeffect_button_off");

    document.querySelector("#wuhu").muted = false;
    document.querySelector("#hvadlaverdu").muted = false;

}

function toggleMusic() {
    console.log("toggle music");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();

    } else {
        showSettingsMusic = true;
        musicOn();

    }
}

function musicOff() {
    console.log("music OFF");

    document.querySelector("#music_button").classList.remove("music_button_on");
    document.querySelector("#music_button").classList.add("music_button_off");

    document.querySelector("#myMusic").pause();

}

function musicOn() {
    console.log("music ON");
    document.querySelector("#music_button").classList.add("music_button_on");
    document.querySelector("#music_button").classList.remove("music_button_off");

    document.querySelector("#myMusic").play();
}

// SPIL SLUTTER

//denne her der skal vurdere om vi har liv tilbage eller mere tid tilbage
function gameStatus() {
    console.log("gameStatus");
    // her definerer man hvornår man dør, når der er x antal liv tilbage
    if (life <= 0) {
        gameOver();
    } else if (timeLeft == 0) {
        levelCompleted();
    }

}

//GAME OVER

function gameOver() {
    console.log("game over");


    // fjern elementer
    document.querySelector("#fluesvamp1").classList.remove("fall_down");
    document.querySelector("#fluesvamp2").classList.remove("fall_down");
    document.querySelector("#fluesvamp3").classList.remove("fall_down");
    document.querySelector("#redbull").classList.remove("fall_down");
    document.querySelector("#godsvamp1").classList.remove("fall_down");
    document.querySelector("#godsvamp2").classList.remove("fall_down");
    document.querySelector("#godsvamp3").classList.remove("fall_down");
    document.querySelector("#godsvamp4").classList.remove("fall_down");


    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game").classList.remove("show");

    document.querySelector("#gameover").classList.add("show");

    //click to play again
    document.querySelector("#menu_button").addEventListener("click", replayFc);

}

//GAME COMPLETE

function levelCompleted() {
    console.log("game complete");

    document.querySelector("#fist_sprite").classList.add("up_down");

    // fjern elementer
    document.querySelector("#fluesvamp1").classList.remove("fall_down");
    document.querySelector("#fluesvamp2").classList.remove("fall_down");
    document.querySelector("#fluesvamp3").classList.remove("fall_down");
    document.querySelector("#redbull").classList.remove("fall_down");
    document.querySelector("#godsvamp1").classList.remove("fall_down");
    document.querySelector("#godsvamp2").classList.remove("fall_down");
    document.querySelector("#godsvamp3").classList.remove("fall_down");
    document.querySelector("#godsvamp4").classList.remove("fall_down");


    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game").classList.remove("show");

    document.querySelector("#levelcomplete").classList.add("show");

    //click to play again
    document.querySelector("#menu_button_complete").addEventListener("click", replayFc);

}

function replayFc() {
    console.log("replay");
    document.location.href = "";
}
