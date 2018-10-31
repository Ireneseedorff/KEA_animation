window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting

    // -> showStart
    showStart();
}

// START SPIL

function showStart() {
    console.log("showStart");
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
    document.querySelector("#play").classList.add("pulse");
    //Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // når fade-animationen er færdig -> startgame
    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("startGame");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    // Skjul startskærm
    document.querySelector("#start").classList.add("hide");
    // Vis spilskærm
    document.querySelector("#game").classList.add("show");
    document.querySelector("#game_ui").classList.remove("hide");
}


// SETTING KNAP

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings_button").removeEventListener("click", showSettings);
    document.querySelector("#settings").classList.remove("hide");

    // Stop animation på startskærm
    document.querySelector("#settings_button").classList.add("pulse");
    //Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");
    // Vis settings
    document.querySelector("#settings").classList.add("show");
}
