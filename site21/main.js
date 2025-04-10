const messages = [
    "You were not supposed to wake up.",
    "The thing in the walls has learned your name.",
    "Your shadow is one step behind where it should be.",
    "Do not answer the knock at 3:12 AM.",
    "You blinked. It moved.",
    "Something is living in your reflection.",
    "They whispered your name last night. Who?",
    "Every night, your bed shifts an inch closer to the door.",
    "The static on the radio is trying to form words.",
    "You can hear breathing, but you are alone.",
    "There is a second voice on this call.",
    "You woke up with dirt under your nails.",
    "Something behind you just smiled.",
    "Your phone vibrated, but there’s no notification.",
    "You never bought that doll.",
    "Why do you have memories of a place you've never been?",
    "The mirror showed a different version of your room.",
    "There’s an extra door in your house today.",
    "You are in a photograph you do not remember taking.",
    "There are footprints leading to your bed. Only leading.",
    "A voice whispered, 'Almost time,' as you fell asleep.",
    "The stars rearranged themselves last night.",
    "You feel something tugging at your blanket when you sleep.",
    "The power went out, but the TV is still on.",
    "Something in the drain is whispering.",
    "Your shadow flickered.",
    "Your name was carved into a tree that was just planted.",
    "There’s a room in your house you don’t remember existing.",
    "You keep waking up facing the closet.",
    "The elevator stopped at a floor that doesn’t exist.",
    "Your reflection lags behind you for just a second.",
    "You heard footsteps, but the hallway was empty.",
    "The old baby monitor turned on by itself.",
    "Your pet won’t enter the room anymore.",
    "Something just ran behind you in the dark.",
    "There’s a face in the fogged-up bathroom mirror. It’s not yours.",
    "The radio played a song in a language you don’t know.",
    "Your shadow isn’t facing the same way as the light.",
    "Every night, the old rocking chair moves on its own.",
    "You heard someone call your name, but the house is empty.",
    "You locked the door before bed. It’s open now.",
    "A child’s laughter echoed from the attic.",
    "You found a note under your pillow: 'Leave now.'",
    "Someone knocked on the window. But you live on the 10th floor.",
    "There’s a whisper coming from the air vents.",
    "The numbers on your digital clock flickered into symbols.",
    "A stranger waved at you from a distance. You swear it was you.",
    "The TV shows a channel that shouldn’t exist.",
    "You answered the phone, but no one was there. Just breathing.",
    "The old photograph on the wall now has one more person in it."
];

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

function drawStrangeSymbols(text) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    const startX = 20;
    const startY = canvas.height / 4; // Start higher to allow multiple lines
    let x = startX;
    let y = startY;
    const size = 30;  // Base size for symbols
    const spacing = 40;  // Horizontal spacing
    const lineHeight = 50;  // Vertical spacing

    function drawSymbol(letter, x, y) {
        ctx.beginPath();
        let seed = letter.charCodeAt(0);
        let symbolSize = size + (seed % 10); 

        for (let i = 0; i < 3; i++) {
            let offsetX = (Math.sin(seed + i) * symbolSize) / 2;
            let offsetY = (Math.cos(seed + i) * symbolSize) / 2;
            ctx.moveTo(x, y);
            ctx.lineTo(x + offsetX, y + offsetY);
        }

        for (let i = 0; i < 2; i++) {
            let arcX = x + (Math.sin(seed + i) * symbolSize) / 3;
            let arcY = y + (Math.cos(seed + i) * symbolSize) / 3;
            ctx.arc(arcX, arcY, symbolSize / 4, 0, Math.PI * 2);
        }

        ctx.stroke();
    }

    for (let i = 0; i < text.length; i++) {
        if (x + spacing > canvas.width - 20) {  
            x = startX;  
            y += lineHeight;  
        }

        drawSymbol(text[i], x, y);
        x += spacing; 
    }
}

drawStrangeSymbols("Hello world!");
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
    canvas.clearRect;
    setInterval(() => {
        canvas.clearRect;
        drawStrangeSymbols(messages[randomValue(0, messages.length-1)]);
    }, randomValue(1, 20)*1000);
}