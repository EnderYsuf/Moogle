const errors = {
    400: [
        "Bad Request – Your browser just sent nonsense, and the server is judging you.",
        "Bad Request – Are you speaking in riddles? The server is confused.",
        "Bad Request – The server received gibberish and is reconsidering its life choices."
    ],
    401: [
        "Unauthorized – You must be this tall to enter. (Or at least have a login.)",
        "Unauthorized – You forgot the secret handshake.",
        "Unauthorized – You need a password. No, 'password123' won’t work."
    ],
    403: [
        "Forbidden – The website saw you coming and locked the door.",
        "Forbidden – Access denied. Try bribing the server with cookies.",
        "Forbidden – This page is off-limits. No peeking!"
    ],
    404: [
        "Not Found – The page went out for coffee and never came back.",
        "Not Found – The website lost this page in the laundry.",
        "Not Found – Congratulations! You found... nothing."
    ],
    408: [
        "Request Timeout – Your internet moves slower than a sleepy sloth.",
        "Request Timeout – The server got bored and left.",
        "Request Timeout – Are you still there? The server gave up waiting."
    ],
    500: [
        "Internal Server Error – Something exploded, and now we panic.",
        "Internal Server Error – The server accidentally stepped on its own code.",
        "Internal Server Error – A wild bug appeared! The server fainted."
    ],
    502: [
        "Bad Gateway – One server sent your request into the void.",
        "Bad Gateway – The internet gods are displeased.",
        "Bad Gateway – The server tried to talk to another server, but they had a fight."
    ],
    503: [
        "Service Unavailable – The server is on a lunch break.",
        "Service Unavailable – Too many people showed up. The website ran away.",
        "Service Unavailable – The internet hamster stopped running on its wheel."
    ],
    504: [
        "Gateway Timeout – The server got distracted and forgot to respond.",
        "Gateway Timeout – The website’s carrier pigeon took too long to deliver the message.",
        "Gateway Timeout – Another server was supposed to help, but it’s ignoring calls."
    ],
    "DNS_ERROR": [
        "The website's address got lost on the way.",
        "The internet misplaced this page’s home.",
        "Oops, no GPS signal for this site."
    ],
    "NETWORK_ERROR": [
        "Either your Wi-Fi is down, or the router is napping.",
        "Have you tried turning it off and on again?",
        "The internet is playing hide and seek with you."
    ],
    "SSL_ERROR": [
        "The website forgot to renew its security badge.",
        "This site might be dangerous... or just forgetful.",
        "The website’s encryption is feeling insecure."
    ],
    "SCRIPT_ERROR": [
        "The code tripped over itself.",
        "A JavaScript bug just did a victory dance.",
        "Something broke, but it’s not your fault. Probably."
    ],
    "BROWSER_BLOCK": [
        "Your browser just said 'NOPE'.",
        "This site isn't allowed. Maybe it’s grounded?",
        "Your browser thinks it's smarter than you."
    ]
};

const error_names = [400, 401, 402, 403, 404, 408, 500, 502, 503, 504, "DNS_ERROR", "NETWORK_ERROR", "SSL_ERROR", "SCRIPT_ERROR", "BROWSER_BLOCK"];

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateError() {
    var index = randomValue(0, error_names.length-1);
    error_name = error_names[index];
    return { code: error_name, desc: errors[error_name][randomValue(0,2)] };
}



document.addEventListener("DOMContentLoaded", function () {
    let trackedScroll = false; // To track scrolling intent once
    let { code, desc } = generateError();
    // Function to show the error window
    function showErrorWindow() {
        document.getElementById("error_bg").style.display = "block";
        document.getElementById("error_window").classList.add("show");
        document.getElementById("error").innerHTML = code;
        document.getElementById("error_desc").innerHTML = desc;
    }

    // Detect if the user wants to scroll (wheel or touch)
    function detectScrollIntent() {
        if (!trackedScroll) {
            showErrorWindow();
            trackedScroll = true;
        }
    }
    document.addEventListener("wheel", detectScrollIntent, { once: true });
    document.addEventListener("touchmove", detectScrollIntent, { once: true });

    // Detect clicks and hyperlink interactions
    document.addEventListener("click", function (event) {
        let target = event.target.closest("a");
        if (target) {
            showErrorWindow();
        } else {
            showErrorWindow();
        }
    });

    // Detect if the user hovers over a hyperlink before clicking
    document.addEventListener("mouseover", function (event) {
        let target = event.target.closest("a");
        if (target) {
            showErrorWindow();
        }
    });
});