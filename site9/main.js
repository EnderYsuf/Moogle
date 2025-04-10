// Events
var events = [
    teleport, 
    rotate, 
    acid, 
    big, 
    small, 
    respect, 
    explode, 
    lol,
    talking,
    caps,
    sans,
    alerting,
    randomSound,
    invis,
    rainbow,
    dove,
    loading,
    virus,
    startSnakeGame,
    progress,
    generateValues,
    achieve,
    ouch,
    rickroll,
    chaos,
    blur,
    meow,
    matrix,
    blank,
    // second part
    typeGlitch,
    randomWord,
    textEraser,
    popupCreator,
    nightMode,
    crtMode,
    waterRipple,
    darkFlash,
    textBlur,
    randomJoke,
    update,
    error404,
    consoleLog,
    fullscreen,
    background,
    retroMode,
    timeWarp,
    snowMode,
    neon,
    //dino
];

// Unrepeatable events
var unrepeat = [
    teleport, 
    acid, 
    small, 
    respect, 
    lol,
    talking,
    caps,
    sans,
    alerting,
    invis,
    loading,
    virus,
    progress,
    ouch,
    rickroll,
    chaos,
    matrix,
    typeGlitch,
    randomWord,
    textEraser,
    nightMode,
    crtMode,
    waterRipple,
    darkFlash,
    update,
    fullscreen,
    background,
    retroMode,
    snowMode,
    neon
];

// Event names
var eventNames = [
    "Button is running away!", 
    "Everything rotates upside down!", 
    "This page is now acid!", 
    "Button is 0.5x bigger now!", 
    "Button become more smaller with every click now!", 
    "The button just passed out... Press F to pay respect and continue it's work", 
    "Boom!", 
    "Lol",
    "Button now can talk!", 
    "EVERYTHING IS UPPER CASE NOW!",
    "Now font is a Cursive Comic Sans!",
    "Be alerted everytime for your safety <3!",
    "Just a random sound",
    "Button is invisible now. Try to find it >:D",
    "Rainbow!!!",
    "Let the dove fly!",
    "I think it's laggy here..",
    "Your system is infected!",
    "Let's play some Snake!",
    "If this progress bar gonna be full, you won!",
    "You've got a reaaally suspicious traffic there...",
    "You've got an achievement!",
    "Button became more sensitive. Be careful when clicking it!",
    "You did it! You almost end this game!",
    "You activated chaos mode! Good luck!",
    "I think you forgot your glasses",
    "Meow!",
    "There is no spoon",
    "Oh no, something bad gonna happen!",
    "Inputs got broken :(",
    "Inputs got a words?",
    "Inputs is eating symbols!",
    "Not the Pop-Ups!",
    "Looks like it's getting dark",
    "Let's use CRT monitor instead!",
    "Your clicks is displayed now",
    "Someone is playing with lights",
    "If you can read this, then everything is still good!",
    "Here is a funny joke",
    "New update is available!",
    "Error 404: not found!",
    "There is a secret message somewhere",
    "Let's play in a fullscreen from now!",
    "There is a background!",
    "Back to the past!",
    "Time Warp!",
    "Let it snow!",
    "Let's turn on some neon!",
    "No internet connection!"
];

// Initial events
var initEvents = [
    alerting,
    teleport, 
    small, 
    talking,
    lol,
    caps,
    loading,
    progress,
    ouch,
    randomWord,
    darkFlash,
    fullscreen,
    background
];
var clicked = false;
var currEvents=[];
var rotation = 0;
var body_rotation = 0;
var respect_status = false;
var lol_mode = false;
var acid_mode = false;
var dove_count = 0;
var percent = 0;
var currWidth = 0;
var len = 0;
var size = 0;
var seeyou = new Audio("sounds/iseeyou.mp3");
var chaos_mode = false;
var chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789";
var blurValue = 0;
var night = 0;
var textBlurCurr = 0;

var quotes = [
    "Ouch! Stop poking me!",
    "Hey! That tickles!",
    "Do I look like a doorbell to you?",
    "Careful! I might start charging for this!",
    "One more press and I'm calling for backup!",
    "Easy there, champ! I'm just a button!",
    "Press me again and I might just disappear!",
    "I hope you washed your hands!",
    "That's it, I'm going on strike!",
    "Do you even read what I say?",
    "What do you think I am, a stress ball?",
    "I should start keeping count...",
    "This is why I have trust issues!",
    "Again? You must really like me!",
    "Press me one more time and I'll self-destruct!",
    "Stop it! You're making me dizzy!",
    "If you keep pressing, I'll tell your mom!",
    "I bet you can't press me just once!",
    "This is button abuse!",
    "You press me more than my creator did!",
    "Guess what? Nothing's gonna happen!",
    "I'm not your toy, human!",
    "Why are you so obsessed with me?",
    "You must be really bored...",
    "I was just about to take a nap!",
    "You press me, I judge you!",
    "I dare you to stop pressing me!",
    "If I had feelings, I'd be offended!",
    "Press me a thousand times and something cool *might* happen!",
    "Seriously? Again?",
    "I'm not a magic lamp, you know!",
    "You must really enjoy pressing buttons!",
    "Breaking news: Button feels harassed!",
    "You win! ...Wait, there was no game?",
    "I'm just a button, standing in front of a user, asking to be left alone!",
    "Do I look like the launch button for a rocket?",
    "No refunds for excessive clicking!",
    "Pressing me won't solve your life problems!",
    "You're still pressing me? I admire your dedication!",
    "Maybe I should start telling riddles instead!",
    "Every time you press me, a kitten learns to code!",
    "You pressed me so much, I'm considering therapy!",
    "Keep pressing and I might evolve into a real AI!",
    "Can you press me in a rhythm? Let's make music!",
    "If this was a game, you'd have unlocked a secret level by now!",
    "I get it, I get it! You love pressing buttons!",
    "If I had a nickel for every press, I'd be rich!",
    "Go touch some grass!",
    "What if pressing me caused a butterfly effect? Think about it!",
    "You're now officially the world record holder for button presses!",
    "Press me 999 more times to unlock... absolutely nothing!"
];
const virusQuotes = [
    "Wow, your system is really sick.",
    "Your system caught an illness... Again.",
    "Looks like your system needs a doctor.",
    "Warning: Your system has a fever!",
    "Your system just sneezed... that's not good.",
    "A wild virus appeared! What will you do?",
    "Better grab some digital antibiotics!",
    "Your firewall is coughing… should I be worried?",
    "This isn’t a bug, it’s a full-blown infection!",
    "Uh-oh, your system ran out of immune responses!",
    "Your system just requested a flu shot.",
    "I hope you have antivirus… because this doesn’t look good.",
    "Your system is overheating... or just running a fever?",
    "Error 404: Immune system not found.",
    "Your system is contagious! Stay back!",
    "Warning: Your system just developed a rash.",
    "Malware detected... Do you want to pet it?",
    "Your system just took a sick day. Try again later.",
    "Your memory seems foggy… maybe it’s the virus.",
    "A virus just sneezed on your system.",
    "Your system has a headache. Closing unnecessary thoughts...",
    "Error: System is feeling dizzy. Please restart.",
    "Help! The malware is replicating too fast!",
    "Your system is in quarantine. Please remain calm.",
    "This virus is evolving… It’s super effective!",
    "Warning: Your system just called in sick.",
    "Your system needs soup and rest.",
    "Your processor caught a cold. Expect slow performance.",
    "Your files are shivering… Is your system okay?",
    "Oops! Your system coughed up an error!",
    "Your system seems sluggish... maybe it's under the weather.",
    "Your system's immune system is out of date. Update now?",
    "Your system just sneezed. Bless you?",
    "Your system is feeling lightheaded... shutting down soon.",
    "Your system took a virus test… and failed.",
    "Your system is experiencing chills… better wrap it in updates!"
]

const achievements = [
  { title: "Banana Overdrive", description: "Unlocked the power of potassium." },
  { title: "Quantum Spaghetti", description: "Collided two noodles at near-light speed." },
  { title: "Chair Enthusiast", description: "Observed 37 different chairs." },
  { title: "Unicorn Approved", description: "Received a mythical stamp of nonsense." },
  { title: "Pixelated Pancake", description: "Compressed yourself into 16x16 pixels." },
  { title: "Mildly Moist", description: "Achieved the perfect level of dampness." },
  { title: "Flibberflop Master", description: "Executed a flawless flibberflop maneuver." },
  { title: "Oops, All Bees!", description: "Replaced everything with bees." },
  { title: "Existential Noodles", description: "Questioned the meaning of pasta." },
  { title: "Infinite Left Turns", description: "Discovered a circle." },
  { title: "Lawnmower Symphony", description: "Composed a song using only grass clippings." },
  { title: "Socks First, Regret Later", description: "Put on socks before pants." },
  { title: "Void Whispers", description: "Listened carefully to nothing." },
  { title: "Cabbage Initiate", description: "Began the sacred cabbage trials." },
  { title: "Wobble Factor 9000", description: "Achieved maximum wobble velocity." },
  { title: "The end?", description: "You've got all of achievements, but this is not end yet!"}
];
const currAchieve = [];
var achieveCount = 0;

const words = [
  "flibbertigibbet", "gobbledygook", "lollygag", "bumbershoot", "snollygoster",
  "cattywampus", "kerfuffle", "widdershins", "collywobbles", "doohickey",
  "gadzooks", "thingamajig", "skedaddle", "fiddle-faddle", "whippersnapper",
  "malarkey", "dingleberry", "hootenanny", "shenanigans", "hullabaloo",
  "nincompoop", "fandango", "ballyhoo", "poppycock", "balderdash"
];

const popups = [
    "Error 404: Humor not found!",
    "Congratulations! You did absolutely nothing.",
    "Warning: This popup is completely unnecessary.",
    "Achievement unlocked: Wasting time!",
    "System overload: Too much awesomeness detected.",
    "Press OK to continue. Or don't. I'm just a popup.",
    "Fun fact: You just read this popup.",
    "Loading... Just kidding, it's instant!",
    "Oops! Something went wrong... or did it?",
    "This popup is brought to you by boredom.",
    "You've been selected to receive another popup!",
    "Click here for free cookies! (Offer expired.)",
    "Please remain calm. This is only a test.",
    "Error: You are too awesome for this system.",
    "Mission failed successfully!",
    "Are you winning, user?",
    "Guess what? Another popup!",
    "Pro tip: Clicking doesn't always solve problems.",
    "You blinked. That was a mistake.",
    "You found the secret popup! (There's no reward.)",
    "This is a popup. That’s it. That’s the joke.",
    "Error 418: I'm a teapot. No, really.",
    "Congratulations! You've just unlocked another popup!",
    "Did you know? Closing this popup won’t stop more from appearing.",
    "System error: Too many popups detected!",
    "Click here to remove all popups! (Just kidding.)",
    "The cake is a—wait, wrong popup.",
    "You have successfully done absolutely nothing!",
    "Popups love attention. Thanks for reading!",
    "Your free trial of sanity has expired.",
    "Warning: Clicking may cause more popups.",
    "Another popup? You must be really lucky!",
    "Nothing to see here. Move along.",
    "Remember: The more you click, the more you lose."
];

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do Java developers wear glasses? Because they don’t C#.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why was the JavaScript developer sad? Because he didn't ‘null’ his problems.",
  "Why did the developer go broke? Because he used up all his cache.",
  "Why do Python programmers prefer snakes? Because they don't need semicolons.",
  "Why do C++ programmers hate Java? Because they don’t like garbage collection.",
  "Why did the SQL query break up? It had too many relationships.",
  "Why was the function feeling sad? It didn’t get called.",
  "What’s the object-oriented way to become wealthy? Inheritance.",
  "Why did the CSS developer go to therapy? Because he had too many issues with his margin.",
  "Why do programmers hate nature? Too many bugs.",
  "What’s a programmer’s favorite hangout place? The Foo Bar.",
  "Why did the programmer quit his job? He didn’t get arrays.",
  "Why do frontend developers eat alone? Because they don’t like tables.",
  "How does a computer tell you it’s hungry? It says ‘Byte me’.",
  "Why do programmers prefer Linux? Because they don’t like Windows.",
  "Why was the HTML developer a terrible musician? Because he couldn't handle the <head> and <body>.",
  "What do you call a group of 8 bits? A byte of developers.",
  "What is a programmer’s favorite place to sit? A loop.",
  "Why do developers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
  "Why was the Git repository always calm? Because it had no conflicts.",
  "Why did the JavaScript developer stay single? Because he kept 'undefined' relationships.",
  "Why do programmers love the ocean? Because it has a lot of C.",
  "Why was the function so self-conscious? Because it had too many arguments.",
  "Why do C programmers love the outdoors? Because they prefer pointers to references.",
  "Why did the programmer become a baker? Because he was good at JavaScript cookies.",
  "How do you get a developer's attention? Call their function.",
  "Why did the developer lose his job? Because he didn’t commit anything.",
  "Why was the debugger always invited to parties? Because it could break the ice.",
  "Why was the array so humble? Because it knew its index.",
  "Why did the website break up with the developer? Because he had too many dependencies.",
  "Why don’t programmers like to talk about their problems? Because they prefer to debug them.",
  "Why did the Python programmer break up with his girlfriend? Because she had too many imports.",
  "What do you call an IT support team’s favorite snack? Chips and cookies.",
  "Why do programmers love coffee? Because it helps with Java.",
  "Why do programmers always confuse left and right? Because they have trouble with ‘logical OR’."
];

const cons = [
  "This is not a bug, it's a feature!",
  "404: Console humor not found.",
  "Warning: The programmer is out of coffee!",
  "Debugging: The fine art of fixing one bug and creating two more.",
  "If you can read this, you are too nerdy.",
  "JavaScript: Because 'undefined' is not a problem, it's a lifestyle.",
  "console.log() is my favorite debugging tool.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "There are 10 types of people in the world: those who understand binary and those who don't.",
  "Your JavaScript code has been approved by Stack Overflow!",
  "Unexpected '}' found? Nah, it's just a plot twist.",
  "Git commit message: 'Fixed something... I think.'",
  "CSS is just magic with curly braces.",
  "JavaScript: Where 'NaN' is a number and 'null' is an object.",
  "Press F5 to pay respects to my broken code.",
  "Semicolons are optional, just like my sanity.",
  "Error: Keyboard not found. Press F1 to continue.",
  "Code never lies, but comments sometimes do.",
  "Programmers: Turning coffee into code since forever.",
  "My code works… I have no idea why.",
  "I didn't break the code, it was already like this.",
  "Computers are fast; programmers keep them slow.",
  "You had one job: Close the tag properly!",
  "It's not a bug, it's an undocumented feature.",
  "JavaScript: The only place where '5' + 3 equals '53'.",
  "My code is like my fridge—more comments than useful stuff inside.",
  "Commenting code is like taking notes in class: you think you'll remember, but you won't.",
  "I’m not lazy, I’m just on energy-saving mode.",
  "99 bugs in the code, 99 bugs in the code... Take one down, patch it around, 127 bugs in the code.",
  "I use 'let' instead of 'var' because I like to live dangerously.",
  "Stack Overflow is my second brain.",
  "Real programmers count from 0, not 1.",
  "I tried to make a perfect program once… then I woke up.",
  "My JavaScript runs fine… until it doesn’t.",
  "In JavaScript, 'false == []' is true. Welcome to the Twilight Zone.",
  "Code like nobody is watching… because they aren’t.",
  "My debugger is like a detective in a crime movie—always suspecting the wrong variable.",
  "Programming is 10% coding and 90% figuring out why your code doesn’t work.",
  "The fastest way to fix a bug? Complain about it, and it magically works.",
  "Code smarter, not harder. Or just copy from Stack Overflow."
];
// Elements
var button = document.getElementById("button");
var body = document.body;
var eventList = document.getElementById("eventList");
var eventWindow = document.getElementById("eventListWindow");
var eventCount = document.getElementById("eventCount");
var quote = document.getElementById("quotes");
var dialog = document.getElementById("dialog");
var dialogText = document.getElementById("dialogText");
var dialogButton = document.getElementById("dialogButton");
var loading_screen = document.getElementById("loading");
var virusWindow = document.getElementById("virusWindow");
var virusText = document.getElementById("virusText");
var snakeWindow = document.getElementById("snakeWindow");
var goalCount = document.getElementById("goal");
var points = document.getElementById("points");
var progress_bar = document.getElementById("progressBar");
var overlay_loading = document.getElementById("overlayLoading");
var progressWindow = document.getElementById("progressWindow");
var captchaOverlay = document.getElementById("captchaOverlay");
var canvas = document.getElementById("captchaCanvas");
var input = document.getElementById("captchaInput");
var checkButton = document.getElementById("checkCaptcha");
var message = document.getElementById("captchaMessage");
var captchaWindow = document.getElementById("captchaWindow");
var achieveWindow = document.getElementById("achieve");
var achieveTitle = document.getElementById("achieveTitle");
var achieveDesc = document.getElementById("achieveDesc");
var rickWindow = document.getElementById("rick");
var rickText = document.getElementById("rickText");
var rickButton = document.getElementById("rickButton");
var rickImg = document.getElementById("rickImg");
var flashScreen = document.getElementById("flash");
var blurScreen = document.getElementById("bluring");
var nightScreen = document.getElementById("night");
var crtScreen = document.getElementById("crt");
var darkScreen = document.getElementById("darkFlash");
var jokesWindow = document.getElementById("jokeWindow");
var jokesContent = document.getElementById("jokes");
var jokesButton = document.getElementById("jokeButton");
var updateWindow = document.getElementById("updateWindow");
var progressUpdate = document.getElementById("progressBarUpdate");
var updateError = document.getElementById("error");
var snow = document.getElementById("snow");
/*var canvasDino = document.getElementById("game-dino");
var dino_score = document.getElementById("dinoScore");
var dino_goal = document.getElementById("dinoGoal");
var ctxDino = canvasDino.getContext("2d");
var dinoWindow = document.getElementById("dinoWindow");
//dino game
var gameLoop;
var sprImg = new Image();
var dinoObj;
var plat;
var frameInterval = 0;
var scoreInterval = 0;
var dinoScore = 0;
var dinoGoal = 0;
var bool = false;
var frame = 0;
var groundscroll = 0;
var gamespeed = 4;
var multiS = -1;
var multiB = -1;

// Obstacle properties
var obsS = { x: 20, y: canvasDino.height - 80, w: 34, h: 70, scroll: -100, on: false, multi: -1, pic: 0 };
var obsB = { x: 20, y: canvasDino.height - 90, w: 49, h: 100, scroll: -200, on: false, multi: -1, pic: 0 };

// Dino hitbox
var pbox = { x: 0, y: 0, w: 0, h: 0 };
dinoObj = { x: 50, y: canvasDino.height - 120, w: 32, h: 38, vy: 0, gravity: 0.5, onGround: false };
plat = { x: 0, y: canvasDino.height - 50, w: canvasDino.width, h: 5 };  
*/
// Button clicking
function clicking() {
    see();
    let currCount = Number(eventCount.innerHTML) + 1;
    eventCount.innerHTML = currCount;
    let selectedEvent;
    do {
        let a = randomValue(0, events.length - 1);
        if (chaos_mode) {
            chaosClick();
        }
        selectedEvent = events[a];
    } while (unrepeat.includes(selectedEvent) && currEvents.includes(selectedEvent));

    currEvents.push(selectedEvent);
    updateEventList();

    if (initEvents.includes(selectedEvent)) {
        for (let i = 0; i < currEvents.length; i++) {
            if (initEvents.includes(currEvents[i])) {
                currEvents[i]();
            }
        }
    } else {
        selectedEvent();
        for (let i = 0; i < currEvents.length; i++) {
            if (initEvents.includes(currEvents[i])) {
                currEvents[i]();
            }
        }
    }
    console.log(chaos_mode);
}
function chaosClick() {
    let currCount = Number(eventCount.innerHTML) + 1;
    eventCount.innerHTML = currCount;
    let selectedEvent;
    do {
        let a = randomValue(0, events.length - 1);
        selectedEvent = events[a];
    } while (unrepeat.includes(selectedEvent) && currEvents.includes(selectedEvent));

    currEvents.push(selectedEvent);
    updateEventList();
}
// Some important functions
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloatValue(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function updateEventList() {
    if (!clicked) {
        document.getElementById("toDelete").remove();
    }
    clicked = true;
    let lastEvent = currEvents[currEvents.length - 1]; // Get the latest added event
    let index = events.indexOf(lastEvent);

    if (index !== -1) {
        let li = document.createElement("li");
        li.textContent = eventNames[index]; // Use the corresponding event name
        eventList.prepend(li); // Insert at the beginning
    }
}

function continueEvent() {
    dialog.style.display = "none"; 
    document.getElementById("overlay").style.display = "none"; // Hide overlay
}

function dvdAnimation(element, startX, startY) {
  let dx = 2;
  let dy = 2;
  
  function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
  
  function update() {
    startX += dx;
    startY += dy;
    
    if (startX + element.width >= window.innerWidth || startX <= 0) {
      dx *= -1;
      element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    }
    if (startY + element.height >= window.innerHeight || startY <= 0) {
      dy *= -1;
      element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    }
    
    element.style.left = `${startX}px`;
    element.style.top = `${startY}px`;
    
    requestAnimationFrame(update);
  }
  
  update();
}

function flash() {
    flashScreen.style.display = "block";
    let x = 1.0;
    flashScreen.style.opacity = x;
    body.style.backgroundColor ="red";
    const intervalFlash = setInterval(() => {
        if (x > 0.0) {
            x -= 0.1;
            flashScreen.style.opacity = x.toFixed(1);
        } else {
            clearInterval(intervalFlash);
            flashScreen.style.display = "none";
        }
    }, 150);
}

// Random button position (Teleport)
function teleport() {
    button.style.position = "absolute";
    button.style.top = randomValue(0, window.innerHeight - button.clientHeight) + "px";
    button.style.left = randomValue(0, window.innerWidth - button.clientWidth) + "px";
}

// Rotation
function rotate() {
    rotation -= 180;
    button.style.transform = `rotate(${rotation}deg)`;
    eventWindow.style.transform = `rotate(${rotation}deg)`;
    quote.style.transform = `rotate(${rotation}deg)`;
    dialogText.style.transform = `rotate(${rotation}deg)`;
    dialogButton.style.transform = `rotate(${rotation}deg)`;
    progressWindow.style.transform = `rotate(${rotation}deg)`;
    progressBar.style.transform = `rotate(${rotation}deg)`;
}

// Acid Colors
function acid() {
    acid_mode = true;
    captchaWindow.style.borderColor = "#90f";
    captchaWindow.style.backgroundColor = "#cf6";
    captchaMessage.style.color = "#90f";
    canvas.style.backgroundColor = "#cf0";
    input.style.borderColor = "#cf6";
    input.style.backgroundColor = "#cf0";
    input.style.color = "#90f";
    checkButton.style.color = "#70f";
    body.style.backgroundColor = "#cf0";
    eventList.style.color = "#cf0";
    quote.style.color = "#90f";
    dialog.style.backgroundColor = "#cf0";
    dialogText.style.color ="#90f";
    dialogButton.style.color="#90f";
    dialogButton.style.borderColor = "#90f";
    dialog.style.borderColor="#90f";
    dialog.style.boxShadow = "0px 0px 10px rgba(153, 0, 255, 0.3);"
    if (!respect_status) {
        button.style.backgroundColor = "#cf0";
        button.style.color = "#90f";
        button.style.borderColor = "#90f";
    }
    eventWindow.style.borderColor = "#90f";
    eventWindow.style.backgroundColor = "#0ff";
    progressBar.style.backgroundColor = "#6f3";
    progressWindow.style.backgroundColor = "#cf6";
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.filter = "contrast(200%) saturate(300%) hue-rotate(180deg)";
    })
    rickWindow.style.borderColor = "#90f";
    rickWindow.style.backgroundColor = "#cf0";
    rickText.style.color ="#90f";
    rickButton.style.color="#90f";
    rickButton.style.borderColor = "#90f";
    jokesWindow.style.backgroundColor = "#cf0";
    jokesWindow.style.color = "#90f"
    jokesWindow.style.borderColor = "#90f";
    jokesContent.style.color = "#90f";
    jokesButton.style.color = "#90f";
    jokesButton.style.backgroundColor = "#cf0";
    jokesButton.style.borderColor = "#90f";
}
// bigger button
function big() {
    let currFontSize = parseFloat(button.style.fontSize) || 16; // Default to 16px if empty
    let currBorderWidth = parseFloat(button.style.borderWidth) || 1; // Default to 1px if empty

    button.style.fontSize = `${currFontSize * 0.5+currFontSize}px`;
    button.style.borderWidth = `${currBorderWidth * 0.5+currBorderWidth}px`;
}
// small button
function small() {
    let currFontSize = parseFloat(button.style.fontSize) || 16; // Default to 16px if empty
    let currBorderWidth = parseFloat(button.style.borderWidth) || 1; // Default to 1px if empty
    button.style.fontSize = `${currFontSize-1.6}px`;
    button.style.borderWidth = `${currBorderWidth-0.1}px`;
}
// press f
function respect() {
    respect_status = true;
    button.style.backgroundColor = "black";
    button.style.borderColor = "black";
    button.style.color ="yellow";
    button.style.transform ="rotate(0deg)"
    button.style.width ="2em";
    button.style.height ="2em";
    button.style.alignItems="center";
    button.innerHTML = "F";
    quote.innerHTML = " ";
}
// explosion
function explode() {
    let explosion = document.createElement("img");
    explosion.src = "images/explosion.gif";
    explosion.style.position = "absolute";
    if (acid_mode) {
        explosion.style.filter = "contrast(200%) saturate(300%) hue-rotate(180deg)";
    }
    let buttonRect = button.getBoundingClientRect();
    let buttonSize = buttonRect.width; // Use button width for both width & height

    explosion.style.width = `${buttonSize*5}px`;
    explosion.style.height = `${buttonSize*5}px`;

    let explosionX = buttonRect.left + window.scrollX + (buttonRect.width / 2) - (buttonSize * 2.5);
    let explosionY = buttonRect.top + window.scrollY + (buttonRect.height / 2) - (buttonSize * 2.5);

    explosion.style.left = `${explosionX}px`;
    explosion.style.top = `${explosionY}px`;
    explosion.style.zIndex = "21";
    
    document.body.appendChild(explosion);
    let explosionSound = new Audio("sounds/explosion.mp3");
    explosionSound.play();
    setTimeout(() => {
        explosion.remove();
    }, 1700);
};
// lol
function lol() {
    lol_mode = true;
    chars = "LOLlol10"
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        if (element.children.length === 0 && element.textContent.trim()) {  // Only change text nodes
            let newText = '';
            for (let i = 0; i < element.textContent.length; i++) {
                newText += ['l', 'o', 'l'][i % 3];
            }
            element.textContent = newText;
        }
    });
}
//Talking button
function talking() {
    if (!respect_status) {
        let quote_sound = new Audio("sounds/quote.mp3");
        quote_sound.play()
        if (lol_mode) {
            quotes = ["lol"];
        }
        quote.innerHTML = quotes[randomValue(0,quotes.length-1)];
    }
}
// caps
function caps() {
    const elements = document.querySelectorAll("body *");
    elements.forEach(element => {
        if (element.children.length === 0 && element.textContent.trim()) {
            let currText = element.textContent;
            element.textContent = currText.toUpperCase();
        }
    })
}
// sans
function sans() {
    body.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';
}
// alert
function alerting() {
    dialog.style.display = "block"; 
    document.getElementById("overlay").style.display = "block"; // Show overlay
}
// random sounds
function randomSound() {
    let sound = new Audio("sounds/sound"+randomValue(1,16)+".mp3");
    sound.play();
}
// invisible
function invis() {
    button.style.opacity ="0.0";
}
// rainbow!!!
function rainbow() {
    body.style.background = `linear-gradient(${randomValue(0,359)}deg, red, orange, yellow, green, cyan, blue, violet)`
}
// dove
function dove() {
    let dove = document.createElement("img");
    dove.src = "images/dove.gif";
    dove.style.position = "absolute";
    dove.style.width = "50px";
    dove.style.height = "50px";
    document.body.appendChild(dove);
    let buttonRect = button.getBoundingClientRect();
    let buttonSize = buttonRect.width; // Use button width for both width & height
    let doveX = buttonRect.left + window.scrollX + (buttonRect.width / 2) - (buttonSize * 2.5);
    let doveY = buttonRect.top + window.scrollY + (buttonRect.height / 2) - (buttonSize * 2.5);
    
    if (acid_mode) {
        dove.style.filter = "contrast(200%) saturate(300%) hue-rotate(180deg)";
    }
    
    dove.style.left = `${doveX}px`;
    dove.style.top = `${doveY}px`;
    dove.style.zIndex = "1000";
    
    dvdAnimation(dove, doveX, doveY);
}
// loading
function loading() {
    overlay_loading.style.display = "block";
    let x = 110;
    loading_screen.style.height = "100%";
    const loading_interval = setInterval(() => {
        if (x>0) {
            x-=10;
            loading_screen.style.height = `${x}%`;
        } else {
            overlay_loading.style.display = "none";
            clearInterval(loading_interval);
        }
    }, randomValue(200,500))
}
// virus
function virus() {
    setTimeout(() => {
        virusWindow.style.display = "block";
    }, randomValue(3, 20)*1000)
}
function removeVirus() {
    virusText.innerHTML = virusQuotes[randomValue(0, virusQuotes.length-1)]
    virusWindow.style.display = "none";
    setTimeout(() => {
        virusWindow.style.display = "block";
    }, randomValue(3, 20)*1000)
}
// snake
function startSnakeGame() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const box = 20; // Size of each snake segment
    let snake = [{ x: 10 * box, y: 10 * box }];
    let direction = "RIGHT";
    let food = generateFood();
    let score = 0;
    let goal = randomValue(1,10);
    goalCount.innerHTML = `Goal: ${goal}`
    snakeWindow.style.display = "block";
    
    function generateFood() {
        return {
            x: Math.floor(Math.random() * ((canvas.width - 40) / box) + 1) * box,
            y: Math.floor(Math.random() * ((canvas.height - 40) / box) + 1) * box
        };
    }

    function draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = "white";
        ctx.lineWidth = 40;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Draw food
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        // Draw snake
        ctx.fillStyle = "lime";
        for (let i = 0; i < snake.length; i++) {
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }

        let headX = snake[0].x;
        let headY = snake[0].y;

        if (direction === "LEFT") headX -= box;
        if (direction === "UP") headY -= box;
        if (direction === "RIGHT") headX += box;
        if (direction === "DOWN") headY += box;

        if (headX === food.x && headY === food.y) {
            score++;
            points.innerHTML = `Points: ${score}`
            if (score >= goal) {
                alert("Congratulations! You reached the goal.");
                snakeWindow.style.display = "none";
                return;
            }
            food = generateFood();
        } else {
            snake.pop();
        }

        const newHead = { x: headX, y: headY };

        if (headX < 20 || headX >= canvas.width - 20 || headY < 20 || headY >= canvas.height - 20) {
            resetGame();
            return;
        }

        snake.unshift(newHead);
        setTimeout(draw, 170);
    }

    function collision(head, array) {
        return array.some(segment => segment.x === head.x && segment.y === head.y);
    }

    function resetGame() {
        points.innerHTML = "Points: 0"
        alert("Game Over!");
        snake = [{ x: 10 * box, y: 10 * box }];
        direction = "RIGHT";
        score = 0;
        food = generateFood();
        draw();
    }

    document.getElementById("up").addEventListener("click", () => { if (direction !== "DOWN") direction = "UP"; });
    document.getElementById("left").addEventListener("click", () => { if (direction !== "RIGHT") direction = "LEFT"; });
    document.getElementById("down").addEventListener("click", () => { if (direction !== "UP") direction = "DOWN"; });
    document.getElementById("right").addEventListener("click", () => { if (direction !== "LEFT") direction = "RIGHT"; });

    draw();
}
// progress bar
function progress() {
    progressWindow.style.display = "block";
    if (percent == 0) {
        percent = 40;
        currWidth = 10;
    } else {
        percent = percent/2
        currWidth += percent;
    }
    progressBar.style.width = `${currWidth}%`
}
// captcha
function generateValues() {
    len = randomValue(3,10);
    size = randomValue(12,50);
    captcha(len, size, 30000);
}

function captcha(length, fontSize, timeLimit) {
    captchaOverlay.style.display = "block";
    captchaWindow.style.display = "block";
    if (!canvas || !input || !checkButton || !message) {
        console.error("Ошибка: не найдены необходимые элементы капчи.");
        return;
    }

    const ctx = canvas.getContext("2d");
    const width = canvas.width, height = canvas.height;

    // Генерация случайного кода
    let captchaText = "";
    for (let i = 0; i < length; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Очистка канваса и отрисовка капчи
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#F0F0F0";
    ctx.fillRect(0, 0, width, height);
    
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "#000";
    
    // Случайное размещение символов
    for (let i = 0; i < captchaText.length; i++) {
        const x = 10 + i * (width / length - 5);
        const y = height / 2 + Math.random() * 10;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.2);
        ctx.fillText(captchaText[i], 0, 0);
        ctx.restore();
    }

    input.value = "";
    message.textContent = "";

    let timeout = setTimeout(() => {
        message.textContent = "Time is up, try again!";
        captcha(length, randomValue(12, 50), 30000);
        input.disabled = true;
        checkButton.disabled = true;
    }, timeLimit);

    checkButton.onclick = () => {
        if (input.value.trim() === captchaText) {
            message.textContent = "You are not a robot. You can go on!";
            setTimeout(() => {
                captchaWindow.style.display = "none";
                captchaOverlay.style.display = "none";
            }, 2000)
        } else {
            message.textContent = "You did a mistake, try again if you're not a robot";
            captcha(length, randomValue(12, 50), 30000);
        }
        clearTimeout(timeout);
    };
}
// achieve
function hasAchieved(id) {
    return currAchieve.includes(achievements[id]);
}

function achieve() {
    if (achieveCount < 15) {
        let newAchieve;
        do {
            newAchieve = randomValue(0, 14);
        } while (hasAchieved(newAchieve)); // Ensure unique achievement

        currAchieve.push(achievements[newAchieve]); // Store acquired achievement
        achieveWindow.style.right = "-10px";
        achieveTitle.innerHTML = achievements[newAchieve].title;
        achieveDesc.innerHTML = achievements[newAchieve].description;
        achieveCount++;

        setTimeout(() => {
            achieveWindow.style.right = "-100%";
        }, 4000);
    } else {
        achieveWindow.style.right = "-10px";
        unrepeat.push("achieve");
        achieveTitle.innerHTML = achievements[15].title;
        achieveDesc.innerHTML = achievements[15].description;

        setTimeout(() => {
            achieveWindow.style.right = "-100%";
        }, 4000);
    }
}
// sensitive button
async function ouch() {
    if (!respect_status) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const response = await fetch("sounds/ouch.mp3");
        const arrayBuffer = await response.arrayBuffer();
     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
    
    // Change pitch without affecting speed
        source.detune.value = randomFloatValue(0, 1200); // ±1200 cents = ±1 octave
    
        source.connect(audioContext.destination);
        source.start();
    }
}
// see you
function see() {
    let a = randomValue(0,100);
    let b = randomValue(0,100);
    if (a==b) {
        seeyou.play()
    }
}
// rickroll
function rickroll() {
    rickWindow.style.display="block";
}

function ricked() {
    let rickAudio = new Audio("sounds/rick.mp3");
    let rickDismiss = document.getElementById("rickDismiss");
    rickText.innerHTML = "RickRolled!!!";
    rickDismiss.style.display = "none";
    rickButton.style.display = "none";
    rickImg.style.display = "block";
    rickAudio.play();
    setTimeout(() =>{
        rickWindow.remove();
    },17000);
}

function hideRicked() {
    rickWindow.remove();
}
// chaos
function chaos() {
    let chaosAudio = new Audio("sounds/chaos.mp3");
    chaosAudio.play()
    chaos_mode = true;
    flash();
}
// blur 
function blur() {
    blurValue += 0.5;
    blurScreen.style.backdropFilter = `blur(${blurValue}px)`;
    blurScreen.style.WebkitBackdropFilter = `blur(${blurValue}px)`;
}
// car jumscare very scary
function meow() {
    let catOpacity = 1.0;
    let catSize = 480;
    let cat = document.createElement("img");
    cat.src = "images/cat.png";
    cat.style.position = "absolute";
    cat.style.width = `${catSize}px`;
    cat.style.height = `${catSize}px`;

    if (typeof acid_mode !== "undefined" && acid_mode) {
        cat.style.filter = "contrast(200%) saturate(300%) hue-rotate(180deg)";
    }

    let buttonRect = button.getBoundingClientRect();
    let buttonSize = buttonRect.width;

    let catX = buttonRect.left + window.scrollX + (buttonRect.width / 2) - (buttonSize * 2.5);
    let catY = buttonRect.top + window.scrollY + (buttonRect.height / 2) - (buttonSize * 2.5);

    cat.style.left = `${catX}px`;
    cat.style.top = `${catY}px`;
    cat.style.zIndex = "21";

    document.body.appendChild(cat);

    let meowSound = new Audio("sounds/meow.mp3");
    meowSound.play();

    let screamer = setInterval(() => {
        catSize += 5;
        catOpacity -= 0.1;
        cat.style.opacity = catOpacity;
        cat.style.width = `${catSize}px`;
        cat.style.height = `${catSize}px`; // Maintain aspect ratio

        if (catOpacity <= 0) {
            clearInterval(screamer);
            cat.remove();
        }
    }, 50); // Added interval time (50ms)
}
// matrix
function matrix() {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");
    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    window.matrixInterval = setInterval(drawMatrix, 50);
}
// blank
function blank() {
}
// typeGlitch
function typeGlitch() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            let glitchedText = inputElement.value.split("").map(char => {
                return Math.random() < 0.01 ? String.fromCharCode(33 + Math.random() * 94) : char;
            }).join("");
            inputElement.value = glitchedText;
        });
    })
}
// words
function randomWord() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(inputElement => {
        inputElement.value = words[randomValue(0,words.length-1)];
    })
}
// erasing text
function textEraser() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            let inputInterval = setInterval(() => {
                let text = inputElement.value;
                if (text.length > 0) {
                    let index = Math.floor(Math.random() * text.length); // Pick a random index
                    inputElement.value = text.slice(0, index) + text.slice(index + 1); // Remove the character
                }
            }, randomValue(15,20)*1000); // Adjust speed as needed
        });
    });
}
// popups
function createDialog(title, message, x, y) {
    let dialogWin = document.createElement("div");
    dialogWin.style.position = "fixed";
    dialogWin.style.left = `${x}px`;
    dialogWin.style.top = `${y}px`;
    dialogWin.style.background = "white";
    dialogWin.style.border = "1px solid #ccc";
    dialogWin.style.borderRadius = "8px";
    dialogWin.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    dialogWin.style.padding = "20px";
    dialogWin.style.minWidth = "220px";
    dialogWin.style.zIndex = "1050";
    dialogWin.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    let titleElem = document.createElement("div");
    titleElem.innerText = title;
    titleElem.style.fontSize = "18px";
    titleElem.style.fontWeight = "bold";
    titleElem.style.color = "#0078D7";
    titleElem.style.marginBottom = "10px";

    let messageElem = document.createElement("div");
    messageElem.innerText = message;
    messageElem.style.fontSize = "14px";
    messageElem.style.color = "#333";
    messageElem.style.marginBottom = "20px";

    let buttonWin = document.createElement("button");
    buttonWin.innerText = "OK";
    buttonWin.style.background = "#0078D7";
    buttonWin.style.color = "white";
    buttonWin.style.border = "none";
    buttonWin.style.padding = "8px 16px";
    buttonWin.style.borderRadius = "4px";
    buttonWin.style.cursor = "pointer";
    buttonWin.style.fontSize = "14px";
    buttonWin.style.float = "right";
    buttonWin.onclick = () => dialogWin.remove();

    dialogWin.appendChild(titleElem);
    dialogWin.appendChild(messageElem);
    dialogWin.appendChild(buttonWin);
    
    document.body.appendChild(dialogWin);
}

function createDialogs(count, title, message, positions) {
    for (let i = 0; i < count; i++) {
        let pos = positions[i] || [
            Math.random() * (window.innerWidth - 250), 
            Math.random() * (window.innerHeight - 120)
        ];
        createDialog(title, message, pos[0], pos[1]);
    }
}

function popupCreator() {
    let currMessages = [];
    for (let j=0; j<randomValue(1,15); j++) {
        let currPopup = randomValue(0,popups.length-1)
        if (!currMessages.includes(popups[currPopup])) {
            console.log(j)
            currMessages.push(popups[currPopup]);
            createDialogs(1, "Just an annoying pop-up", popups[currPopup], [randomValue(0,window.width-250), randomValue(0,window.length)]);
        }
    }
}
// night mode
function nightMode() {
    let nightInterval = setInterval(() => {
        if (night < 0.8) {
            console.log(night.toFixed(1));
            nightScreen.style.opacity = night.toFixed(1);
            night += 0.1;
        } else {
            clearInterval(nightInterval);
        }
    }, 1500)
}
// crt
function crtMode() {
    crtScreen.style.display = "block";
}
// water ripple
function waterRipple() {
    document.addEventListener("click", function (event) {
        let ripple = document.createElement("div");
        ripple.classList.add("ripple");
    
        ripple.style.left = `${event.clientX - 5}px`;
        ripple.style.top = `${event.clientY - 5}px`;

        document.querySelector(".ripple-container").appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
}
// lights off
function darkFlash() {
    let isDark = randomValue(1,100);
    if (isDark>79) {
        darkScreen.style.display = "block";
        setTimeout(() => {
            darkScreen.style.display = "none";
        }, randomValue(2000,10000))
    }
}
// blurred text
function textBlur() {
    textBlurCurr += 0.1;
    let elementsText = document.querySelectorAll("body *");
    elementsText.forEach(element => {
        if (element.children.length === 0 && element.textContent.trim()) {
            element.style.filter = `blur(${textBlurCurr}px)`
        }
    })
}
// random jokes
function randomJoke() {
    jokesWindow.style.display = "block";
    jokesContent.innerHTML = jokes[randomValue(0,jokes.length-1)];
}

function closeJokes() {
    jokesWindow.style.display = "none";
}
// update!!!
function update() {
    let updateCount = 0;
    updateWindow.style.display = "block";
    let updateInterval = setInterval(() => {
        updateCount += randomValue(1,10);
        console.log(updateCount);
        progressUpdate.style.width = `${updateCount}%`;
        if (updateCount > 50) {
            clearInterval(updateInterval);
            updateError.style.display = "block";
        }
    }, randomValue(3, 5)*1000)
}

function updateErrorFunc() {
    updateWindow.style.display = "none";
    
    if (button) {
        button.remove();
    }

    let newButton = document.createElement("button");
    newButton.onclick = clicking;
    newButton.id = "button";
    newButton.textContent = "Click me";

    // Apply inline styles for centering
    newButton.style.position = "absolute";
    newButton.style.top = "50%";
    newButton.style.left = "50%";
    newButton.style.transform = "translate(-50%, -50%)";
    newButton.style.padding = "10px 20px";
    newButton.style.fontSize = "16px";

    document.body.appendChild(newButton);
}
// not found
function error404() {
    let elementsError = Array.from(document.body.children).filter(el => el.id !== "button");
    
    if (elementsError.length === 0) return; // Prevent errors if no removable elements exist.

    let elementNotFound = Math.floor(Math.random() * elementsError.length);
    let removedElement = elementsError[elementNotFound];

    let currId = removedElement.id || ""; // Preserve ID if available
    let computedStyle = window.getComputedStyle(removedElement); // Get all styles before removal
    
    removedElement.remove();

    let notFound = document.createElement("p");
    notFound.id = currId;
    notFound.textContent = "ERROR 404";

    // Copy all computed styles
    for (let prop of computedStyle) {
        notFound.style[prop] = computedStyle.getPropertyValue(prop);
    }

    document.body.appendChild(notFound);
}
// console
function consoleLog() {
    console.log(cons[0,(randomValue(0,cons.length-1))]);
}
// fullscreen
function fullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}
// background
function background() {
    body.style.backgroundImage = `url("images/bg${randomValue(0,19)}.png")`;
    body.style.backgroundSize = "100% 100%";
}
// retro mode
function retroMode() {
    let elementsRetro = document.querySelectorAll("body");
    elementsRetro.forEach(element => {
        element.classList.add("retro-mode");
    })
}
// speed changing
function timeWarp() {
    document.querySelector("*").style.transition = `${randomValue(100, 1000) / 100}s ease-in-out`;
    console.log(document.querySelector("*").style.transition)
}
// snow
function snowMode() {
    snow.style.display = "block";
}
// neon border
function neon() {
    let elementsFire = document.querySelectorAll("*"); // Select all elements
    elementsFire.forEach(element => {
        let borderWidth = parseFloat(window.getComputedStyle(element).borderWidth); // Convert to number
        if (borderWidth > 0) {
            element.classList.add("neon-border"); // Add class
        }
    });
}
/* dino Game (cancelled)
function dino() {
    dinoWindow.style.display = "block";
    gameLoop = setInterval(update, 1000 / 60);
    dinoGoal = randomValue(100, 400);
    dino_goal.innerHTML = `Goal: ${dinoGoal}`;

    sprImg.src = "images/sprite.png";
    sprImg.onload = function () {
        console.log("Sprite image loaded!");
        plat = { x: 0, y: canvasDino.height - 50, w: canvasDino.width, h: 5 };
        canvasDino.addEventListener("click", jump);
    };
}

function jump() {
    if (dinoObj.onGround) {
        dinoObj.vy = -9;
        dinoObj.onGround = false;
    }
}

function update() {
    ctxDino.clearRect(0, 0, canvasDino.width, canvasDino.height);
    frameInterval++;
    scoreInterval++;

    // Dino animation
    if (frameInterval > 5) {
        bool = !bool;
        frameInterval = 0;
    }
    if (scoreInterval > 7) {
        dinoScore++;
        dino_score.innerHTML = `Score: ${dinoScore}`;
        if (dinoScore >= dinoGoal) {
            clearInterval(gameLoop);
            dinoWindow.style.display = "none";
        }
        scoreInterval = 0;
    }
    frame = bool && dinoObj.onGround ? 1514 : !bool && dinoObj.onGround ? 1602 : 1338;

    // Apply gravity
    dinoObj.vy += dinoObj.gravity;
    dinoObj.y += dinoObj.vy;

    // Check ground collision
    if (dinoObj.y + dinoObj.h >= plat.y) {
        dinoObj.y = plat.y - dinoObj.h;
        dinoObj.vy = 0;
        dinoObj.onGround = true;
    } else {
        dinoObj.onGround = false;
    }

    // Update hitbox
    pbox.x = dinoObj.x;
    pbox.y = dinoObj.y;
    pbox.w = dinoObj.w-5;
    pbox.h = dinoObj.h-8;

    // Check collision with obstacles
    let obsBX = canvasDino.width - obsB.scroll;
    let obsSX = canvasDino.width - obsS.scroll;

    if (pbox.x + pbox.w > obsSX && pbox.x < obsSX + (14 * multiS) &&
    pbox.y + pbox.h > obsS.y) {
    gameover();
}

if (pbox.x + pbox.w > obsBX && pbox.x < obsBX + (19 * multiB) &&
    pbox.y + pbox.h > obsB.y) {
    gameover();
}

    // Update ground scrolling
    groundscroll = (groundscroll + gamespeed) % 2404;

    // Draw ground
    ctxDino.drawImage(sprImg, 0, 104, 2404, 18, -groundscroll, plat.y - 18, 2404, 18);
    ctxDino.drawImage(sprImg, 0, 104, 2404, 18, -groundscroll + 2404, plat.y - 18, 2404, 18);

    // Draw dino
    ctxDino.drawImage(sprImg, frame, 0, 88, 94, dinoObj.x, dinoObj.y, dinoObj.w, dinoObj.h);

    // Draw hitboxes (for debugging)
    drawHitbox();

    // Handle obstacles
    handleObstacles();
}

function drawHitbox() {
    ctxDino.strokeStyle = "red"; // Red for dino
    ctxDino.lineWidth = 2;
    ctxDino.strokeRect(pbox.x, pbox.y, pbox.w, pbox.h);

    ctxDino.strokeStyle = "blue"; // Blue for obstacles

    // Big obstacle hitbox
    if (obsB.on) {
        let obsBX = canvas.width - obsB.scroll;
        ctxDino.strokeRect(obsBX, obsB.y, 19 * multiB, obsB.h);

    }

    // Small obstacle hitbox
    if (obsS.on) {
        let obsSX = canvas.width - obsS.scroll;
        ctxDino.strokeRect(obsSX, obsS.y, 14 * multiS, obsS.h);
    }
}

function handleObstacles() {
    if (!obsB.on && !obsS.on && Math.random() < 0.01) { obsS.on = true; rngS(); }
    if (obsS.on) {
        ctxDino.drawImage(sprImg, obsS.pic, 2, obsS.w * multiS, obsS.h, canvasDino.width - obsS.scroll, obsS.y, 14 * multiS, 28);
        obsS.scroll += gamespeed;
        if (obsS.scroll > canvasDino.width + obsS.w * 3) resetObstacle(obsS);
    }

    if (!obsS.on && !obsB.on && Math.random() < 0.01) { obsB.on = true; rngB(); }
    if (obsB.on) {
        ctxDino.drawImage(sprImg, 652, 2, obsB.w * multiB, obsB.h, canvasDino.width - obsB.scroll, obsB.y, 19 * multiB, 38);
        obsB.scroll += gamespeed;
        if (obsB.scroll > canvasDino.width + obsB.w * 3) resetObstacle(obsB);
    }
}

function rngS() {
    multiS = Math.floor(Math.random() * 3) + 1;
    obsS.pic = 446 + (Math.floor(Math.random() * 2) * 102);
    obsS.scroll = -(Math.random() * 300 + 100);
    console.log("Spawned small obstacle");
}

function rngB() {
    multiB = Math.floor(Math.random() * 3) + 1;
    obsB.pic = 652 + (Math.floor(Math.random() * 2) * 150);
    obsB.scroll = -(Math.random() * 300 + 200);
    console.log("Spawned big obstacle");
}

function resetObstacle(obs) {
    obs.scroll = -(Math.random() * 300 + 100);
    obs.on = false;
    multiS = -1;
    multiB = -1;
}

function gameover() {
    console.log("Game Over!");
    gamespeed = 0;

    // Stop the update loop
    clearInterval(gameLoop);

    setTimeout(() => {
        resetGame();
    }, 3000);
}

function resetGame() {
    dinoObj.x = 50;
    dinoObj.y = canvas.height - 120;
    dinoObj.vy = 0;
    dinoObj.onGround = false;

    obsS.on = false;
    obsB.on = false;
    obsS.scroll = -100;
    obsB.scroll = -200;
    multiS = -1;
    multiB = -1;

    groundscroll = 0;
    gamespeed = 4;

    // Restart the game loop
    gameLoop = setInterval(update, 1000 / 60);
}*/
// Welcome Message Fade
window.onload = function() {
    let x = 1.0;
    const welcome = document.getElementById("welcome");
    welcome.style.opacity = x;

    const interval = setInterval(() => {
        if (x > 0.0) {
            x -= 0.1;
            welcome.style.opacity = x.toFixed(1);
        } else {
            clearInterval(interval);
        }
    }, 50);
};
