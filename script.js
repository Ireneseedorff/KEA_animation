window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting

    // -> showStart
    showStart();
}

function showStart() {
    console.log("showStart");
    //Vis startskærm

    document.querySelector("#start").classList.add("show");
    // Start animation på startskærm
    document.querySelector("#play").classList.add("pulse");

    //click
    document.querySelector("#play").addEventListener("click", hideStart);
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
    // Skjul startskærm
    document.querySelector("#start").classList.add("hide");
    // Vis spilskærm
    document.querySelector("#game").classList.add("show");


}
