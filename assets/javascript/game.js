// team one variables
let teamOneShotsCount = 0;
let teamOneGoalcount = 0;
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneShotSpan = document.querySelector("#teamone-numshots");
const teamOneGoalSpan = document.querySelector("#teamone-numgoals")





// team two variables
let teamTwoShotsCount = 0;
let teamTwoGoalcount = 0;
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoShotSpan = document.querySelector("#teamtwo-numshots");
const teamTwoGoalSpan = document.querySelector("#teamtwo-numgoals")




// reset variables
let resetCount = 0
const resetButton = document.querySelector("#reset-button");
const resetCountSpan = document.querySelector("#num-resets");







// team one event listener
teamOneShootButton.addEventListener("click", function () {
    console.log("hey")

    teamOneShotsCount = teamOneShotsCount + 1;
    teamOneShotSpan.innerHTML = teamOneShotsCount;

    if (Math.random() > .5) {
        console.log("yaaaaaay")
        teamOneGoalcount = teamOneGoalcount + 1;
        teamOneGoalSpan.innerHTML = teamOneGoalcount;
    }
})






// team two event listener
teamTwoShootButton.addEventListener("click", function () {
    console.log("wow")

    teamTwoShotsCount = teamTwoShotsCount + 1;
    teamTwoShotSpan.innerHTML = teamTwoShotsCount;


    if (Math.random() > .5) {
        console.log("great")
        teamTwoGoalcount = teamTwoGoalcount + 1;
        teamTwoGoalSpan.innerHTML = teamTwoGoalcount;

    }



})



// reset event listener
// resetButton.addEventListener("click", function () {
//     console.log("start over")

resetButton.addEventListener("click", function () {
    console.log("start over")

    resetCount = resetCount + 1;
    resetCountSpan.innerHTML = resetCount;

    teamOneShotsCount = 0;
    teamOneShotSpan.innerHTML = teamOneShotsCount;

    teamOneGoalcount = 0;
        teamOneGoalSpan.innerHTML = teamOneGoalcount;


        teamTwoShotsCount = 0;
    teamTwoShotSpan.innerHTML = teamTwoShotsCount;


    teamTwoGoalcount = 0;
    teamTwoGoalSpan.innerHTML = teamTwoGoalcount;
})























