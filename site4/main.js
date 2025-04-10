const goodDestinies = [
    "You will wake up and instantly remember where you left your socks",
    "A pigeon will choose you as its favorite human",
    "You will discover a new way to eat spaghetti efficiently",
    "Your Wi-Fi will never randomly disconnect again",
    "You will always find a shopping cart with perfect wheels",
    "Your favorite song will always play at the right moment",
    "You will sneeze in the most satisfying way possible",
    "The vending machine will never steal your money again",
    "You will never accidentally bite your tongue while eating",
    "Your phone battery will last just a little bit longer than expected",
    "You will become immune to stepping on LEGO bricks",
    "Your pizza will always have the perfect cheese-to-crust ratio",
    "You will never have to deal with tangled earphones again",
    "You will always guess the correct elevator floor first try",
    "Every time you flip a pillow, it will be the perfect cool side",
    "You will win every staring contest without effort",
    "Mosquitoes will collectively decide to leave you alone",
    "You will always find a parking spot right next to the entrance",
    "Your favorite socks will never mysteriously disappear in the laundry",
    "Traffic lights will always turn green as you approach them",
    "You will never spill a drink on yourself again",
    "You will master the art of opening snack bags without struggle",
    "Your ice cream will never drip onto your hands again",
    "You will always pick the fastest moving checkout line at the store",
    "Your shoelaces will never randomly untie themselves",
    "You will always find money in your pockets when you need it",
    "You will never burn your tongue on hot soup again",
    "The toast will always land butter-side up",
    "You will develop a natural talent for making perfect popcorn",
    "You will always know which USB side is the right way up",
    "Your phone screen will never crack, no matter how many times you drop it",
    "You will always hit the perfect snooze time without oversleeping",
    "You will never send a message to the wrong person again",
    "Your shampoo and conditioner bottles will always run out at the same time",
    "You will always guess the right amount of pasta to cook",
    "You will always wake up with your blanket still covering you",
    "You will never get shampoo in your eyes ever again",
    "You will never forget why you walked into a room",
    "You will always win rock-paper-scissors at critical moments",
    "You will always find an extra fry at the bottom of the bag",
    "Your phone will always recognize your fingerprint instantly",
    "You will never run out of toilet paper",
    "You will always find a comfortable seat on public transport",
    "Your coffee will always be at the perfect temperature",
    "Your favorite TV show will never get canceled",
    "You will always find a pen when you need one",
    "You will always remember important dates",
    "Your socks will always match"
];

const badDestinies = [
    "but you will forget why you walked into every room",
    "but it will constantly follow you everywhere",
    "but no one will believe you",
    "but your mobile data will stop working when you need it most",
    "but the store will never have what you came for",
    "but it will always be stuck in your head afterward",
    "but it will always be at the worst possible time",
    "but it will always give you the wrong snack",
    "but you will always burn your mouth on hot food",
    "but your charger will always be in another room",
    "but you will always stub your toe on furniture",
    "but it will always arrive lukewarm",
    "but they will always mysteriously disappear when you need them",
    "but the elevator music will be painfully awkward",
    "but someone will always steal your blanket",
    "but people will think you're really weird",
    "but flies will take their place",
    "but your car alarm will randomly go off",
    "but they will always have a small, annoying hole",
    "but they will turn red for everyone behind you",
    "but you will always drop your spoon into your soup",
    "but they will always be half empty",
    "but it will always melt too fast to enjoy",
    "but the cashier will have to call for a price check",
    "but they will always get wet when you step in a puddle",
    "but it will always be in the form of small change",
    "but you will always forget your drink until it’s cold",
    "but it will always be slightly over-toasted",
    "but you will always forget it in the microwave",
    "but the port will be too tight to plug in smoothly",
    "but it will always be covered in fingerprints",
    "but your alarm will be the most annoying sound imaginable",
    "but you will always type 'ducking' instead of something else",
    "but your soap will always slip out of your hands",
    "but you will never have the right amount of sauce",
    "but your pillow will always be on the floor",
    "but you will always forget to bring a towel into the bathroom",
    "but you will always lose your car keys",
    "but you will always lose coin flips",
    "but it will always be cold",
    "but autocorrect will always ruin your messages",
    "but the roll will always be put on the wrong way",
    "but someone will always sit next to you and talk non-stop",
    "but it will always have just a little too much sugar",
    "but you will always forget to charge your phone",
    "but they will keep making unnecessary spin-offs",
    "but it will always be out of ink",
    "but you will always forget where you parked your car",
    "but they will always be slightly damp for no reason"
];

// Utility functions
function createSeededRNG(seed) {
    return function () {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return (seed >>> 0) / 4294967296;
    };
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) % 4294967296;
    }
    return hash;
}

function getStableDailySeed() {
    const dateSeed = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    return Number(dateSeed); // Removed timezone dependency
}

function randomIndex(rng, arrayLength) {
    return Math.floor(rng() * (arrayLength - 1 + 0.9999999)); // Prevents rounding bias
}

function generateDestiny() {
    const rng = createSeededRNG(getStableDailySeed());
    const goodIndex = randomIndex(rng, goodDestinies.length);
    const badIndex = randomIndex(rng, badDestinies.length);
    return `${goodDestinies[goodIndex]}, ${badDestinies[badIndex]}`;
}

function updateDestinyText() {
    const textElement = document.getElementById("destiny-text");
    textElement.textContent = generateDestiny(); // Show immediately
    setTimeout(updateDestinyText, Math.random() * (10000 - 4000) + 4000);
}

updateDestinyText(); // Start immediately