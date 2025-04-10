const votes = [
    { topic: "Best shape?", options: ["Circle", "Square"] },
    { topic: "Superior color?", options: ["Blue", "Red"] },
    { topic: "Better utensil?", options: ["Fork", "Spoon"] },
    { topic: "Cooler weather?", options: ["Snowy", "Rainy"] },
    { topic: "More powerful?", options: ["Duck", "Goose"] },
    { topic: "Ultimate pet?", options: ["Dog", "Cat"] },
    { topic: "Best button?", options: ["Big", "Small"] },
    { topic: "More interesting?", options: ["Left sock", "Right sock"] },
    { topic: "More satisfying?", options: ["Bubble wrap", "Popping knuckles"] },
    { topic: "Greater sound effect?", options: ["Boing", "Pew Pew"] },
    { topic: "Best snack?", options: ["Chips", "Cookies"] },
    { topic: "Better transportation?", options: ["Bike", "Skateboard"] },
    { topic: "Cooler mythical creature?", options: ["Dragon", "Phoenix"] },
    { topic: "More confusing?", options: ["Time travel", "Parallel universes"] },
    { topic: "Best fruit?", options: ["Apple", "Banana"] },
    { topic: "Superior vegetable?", options: ["Carrot", "Cucumber"] },
    { topic: "Better way to say hello?", options: ["Wave", "Handshake"] },
    { topic: "More dramatic?", options: ["Slow-motion", "Loud music"] },
    { topic: "Most mysterious?", options: ["Aliens", "Ghosts"] },
    { topic: "Better dance move?", options: ["Moonwalk", "Robot"] },
    { topic: "Greater sidekick?", options: ["Robin", "Luigi"] },
    { topic: "More fun?", options: ["Rollercoaster", "Bumper cars"] },
    { topic: "Better fabric?", options: ["Cotton", "Wool"] },
    { topic: "More iconic?", options: ["Pirates", "Ninjas"] },
    { topic: "More annoying?", options: ["Mosquitoes", "Flies"] },
    { topic: "More unnecessary?", options: ["Toothpick", "Shoehorn"] },
    { topic: "Better pasta?", options: ["Spaghetti", "Macaroni"] },
    { topic: "More useful?", options: ["Duct tape", "Zip ties"] },
    { topic: "Best fictional element?", options: ["Adamantium", "Vibranium"] },
    { topic: "Best soft drink?", options: ["Cola", "Lemon-lime soda"] },
    { topic: "Better superpower?", options: ["Invisibility", "Super speed"] },
    { topic: "Best sleeping position?", options: ["Side", "Back"] },
    { topic: "More stylish?", options: ["Hat", "Sunglasses"] },
    { topic: "Most pointless?", options: ["A broken clock", "A doorless car"] },
    { topic: "Better at sneaking?", options: ["Cat", "Ninja"] },
    { topic: "Cooler name?", options: ["Thunder", "Shadow"] },
    { topic: "Better celebration?", options: ["Confetti", "Fireworks"] },
    { topic: "More fun to say?", options: ["Gobble", "Bamboozle"] },
    { topic: "More terrifying?", options: ["Sharks", "Clowns"] },
    { topic: "More powerful?", options: ["Toaster", "Microwave"] },
    { topic: "Tougher decision?", options: ["Pizza or burger?", "Cats or dogs?"] },
    { topic: "More cursed?", options: ["A normal-sized horse with duck feet", "A tiny duck with horse legs"] },
    { topic: "Best way to travel?", options: ["Teleportation", "Jetpack"] },
    { topic: "Which is faster?", options: ["Turtle on a skateboard", "Snail with a jetpack"] },
    { topic: "Best time of day?", options: ["Morning", "Night"] },
    { topic: "Cooler fictional scientist?", options: ["Dr. Frankenstein", "Dr. Doofenshmirtz"] },
    { topic: "More likely to take over the world?", options: ["AI", "Pigeons"] },
    { topic: "More dramatic?", options: ["Slow clap", "Dramatic gasp"] },
    { topic: "Better at surviving?", options: ["Cockroach", "Cactus"] },
    { topic: "More majestic?", options: ["Eagle", "Lion"] }
];
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option1Btn = document.getElementById("option1Btn");
const option2Btn = document.getElementById("option2Btn");
const red = document.getElementById("progressBarRed");
const blue = document.getElementById("progressBarBlue");
const redStat = document.getElementById("option1Stat");
const blueStat = document.getElementById("option2Stat");
const afterVote = document.getElementById("afterVote");
const btnContainer = document.getElementById("btnContainer");
const choosed = document.getElementById("choosed");

var vote1 = 50;
var vote2 = 50;

var index = randomValue(0, votes.length-1);
var currTopic = votes[index].topic;
var opt1 = votes[index].options[0];
var opt2 = votes[index].options[1];
    
document.getElementById("topic").innerHTML = currTopic;
option1.innerHTML = opt1;
option2.innerHTML = opt2;
option1Btn.innerHTML = opt1;
option2Btn.innerHTML = opt2;

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
    setInterval(() => {
        vote1 = randomValue(40, 60);
        vote2 = 100-vote1;
        red.style.width = `${vote1}%`;
        blue.style.width = `${vote2}%`;
        redStat.innerHTML = `${vote1}%`;
        blueStat.innerHTML = `${vote2}%`;
    },randomValue(3,15)*1000);
};

function voteRed() {
    vote1 += randomValue(1, 5);
    vote2 = 100-vote1;
    red.style.width = `${vote1}%`;
    blue.style.width = `${vote2}%`;
    redStat.innerHTML = `${vote1}%`;
    blueStat.innerHTML = `${vote2}%`;
    afterVote.style.display = "block";
    btnContainer.style.display = "none";
    choosed.innerHTML = `Your Vote: ${opt1}`;
}

function voteBlue() {
    vote2 += randomValue(1, 5);
    vote1 = 100-vote2;
    red.style.width = `${vote1}%`;
    blue.style.width = `${vote2}%`;
    redStat.innerHTML = `${vote1}%`;
    blueStat.innerHTML = `${vote2}%`;
    afterVote.style.display = "block";
    btnContainer.style.display = "none";
    choosed.innerHTML = `Your Vote: ${opt2}`;
}