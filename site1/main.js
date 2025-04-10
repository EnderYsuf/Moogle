const facts = [
    "Bananas are 103% banana.",
    "If you stack two lasagnas, you still have one lasagna.",
    "The average cloud weighs more than a million pounds but still floats.",
    "A group of flamingos is called a 'flamboyance,' but they refuse to acknowledge it.",
    "Sharks existed before trees, but trees never took it personally.",
    "The moon is moving away from Earth at 3.8 cm per year, like a teenager avoiding chores.",
    "If you remove all the space from an atom, the human race could fit into a sugar cube.",
    "Butterflies taste with their feet, which makes them terrible food critics.",
    "The Eiffel Tower grows over 15 cm in summer due to heat expansion.",
    "Goats have rectangular pupils, so they can see into parallel dimensions (probably).",
    "Cows have best friends, and they get stressed when separated, just like humans and Wi-Fi.",
    "A species of jellyfish is biologically immortal, but it refuses to share its secret.",
    "Lightning is five times hotter than the surface of the sun, yet we worry about sunscreen.",
    "Raisins bounce in carbonated drinks, proving they enjoy roller coasters.",
    "Wombat poop is cube-shaped, and scientists still don’t fully understand why.",
    "Octopuses have three hearts, and they break all of them at once when they fall in love.",
    "Pigs cannot look straight up, meaning they’ve never seen a shooting star.",
    "Honey never spoils. Archaeologists found 3000-year-old honey, and it was still edible.",
    "Suppressing a sneeze can rupture a blood vessel, but sneezing too hard can break a rib.",
    "Bananas are berries, but strawberries are not. The fruit world is full of lies.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "Some fish communicate by farting, making underwater conversations quite awkward.",
    "A single spaghetti noodle is called a 'spaghetto.'",
    "The hashtag symbol (#) is called an octothorpe, but nobody uses that word.",
    "There is enough DNA in the human body to stretch from Earth to the sun and back 600 times.",
    "A day on Venus is longer than a year on Venus.",
    "Sloths can hold their breath longer than dolphins but prefer to keep it a secret.",
    "A shrimp's heart is in its head, meaning it truly thinks with its heart.",
    "The word 'swims' looks the same upside down.",
    "A group of crows is called a 'murder,' but they’ve never been convicted.",
    "Pineapples take up to three years to grow, making them the slowest surprise party decoration.",
    "There is a town in Norway called Hell, and it freezes over every winter.",
    "Giraffes only sleep for about 30 minutes a day and still look tired.",
    "Mosquitoes have existed longer than dinosaurs and refuse to go extinct.",
    "The world's largest desert is Antarctica, proving that deserts aren't always hot.",
    "Jellyfish are 95% water, making them slightly more hydrated than the average college student.",
    "Snails can sleep for up to three years, making them the true masters of procrastination.",
    "If you folded a piece of paper 42 times, it would reach the moon.",
    "There are more fake flamingos in the world than real ones.",
    "The shortest war in history lasted 38 to 45 minutes.",
    "There's a species of fungus that turns ants into zombies.",
    "Sea cucumbers can eject their internal organs as a defense mechanism and regrow them later.",
    "The M’s in M&M’s stand for Mars and Murrie, the founders.",
    "Octopuses can taste things just by touching them.",
    "You can’t hum while holding your nose (try it).",
    "Bubble wrap was originally invented to be wallpaper.",
    "Vending machines kill more people per year than sharks.",
    "It rains diamonds on Jupiter and Saturn.",
    "Sloths move so slowly that algae grow on their fur.",
    "A duel between three people is called a truel.",
    "Cows moo with different accents depending on their region.",
    "The smell of freshly cut grass is actually the plant screaming in distress.",
    "There's a bridge for squirrels in the Netherlands.",
    "A group of porcupines is called a prickle.",
    "You are always technically traveling at the speed of the Earth’s rotation.",
    "Ants stretch when they wake up, just like humans.",
    "The inventor of the microwave only realized it could heat food when a chocolate bar melted in his pocket.",
    "The dot over a lowercase ‘i’ or ‘j’ is called a tittle.",
    "Some turtles can breathe through their butts.",
    "A cat’s meow is its way of talking to humans—cats don’t meow at each other.",
    "There's a village in Wales with a name that’s 58 letters long.",
    "Elephants can’t jump, but they’re still pretty good at dancing.",
    "Bees can recognize human faces, so don’t upset them.",
    "The average person will spend six months of their life waiting for red lights to turn green.",
    "The letter ‘E’ is the most commonly used letter in the English language.",
    "A jiffy is an actual unit of time—1/100th of a second.",
    "Your stomach gets a new lining every few days to prevent digesting itself.",
    "Horses can’t vomit, so they have to be extra careful about what they eat.",
    "Water can boil and freeze at the same time under the right conditions.",
    "The longest hiccuping spree lasted 68 years.",
    "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
    "The ‘Q’ in Q-tips stands for ‘quality.’",
    "The smell of chocolate increases brain waves, making you feel relaxed.",
    "You can’t breathe and swallow at the same time (try it).",
    "Worms can regrow parts of their body if cut correctly.",
    "Tigers have striped skin, not just striped fur.",
    "A crocodile can't stick its tongue out.",
    "The human brain can hold about 2.5 petabytes of information, but still forgets why it walked into a room.",
    "A jellyfish doesn’t have a brain, heart, or bones, and yet it still lives a more peaceful life than most people.",
    "The phrase 'the quick brown fox jumps over the lazy dog' uses every letter in the English alphabet.",
    "Some penguins propose to their mates with pebbles.",
    "Cats can rotate their ears 180 degrees, making them the ultimate eavesdroppers.",
    "You share about 60% of your DNA with bananas, which explains why you sometimes feel a little fruity.",
    "A kangaroo can’t walk backward, but it doesn’t care because it’s always moving forward.",
    "The world’s largest snowflake ever recorded was 15 inches wide.",
    "Coca-Cola would be green if coloring wasn’t added.",
    "The Guinness World Record for the most socks worn on one foot is 184.",
    "There are more stars in the universe than grains of sand on Earth, but only one of them decided to give us a sunburn.",
    "If you shuffle a deck of cards properly, the order has likely never existed before in the history of the universe.",
    "This is the final fact. Knowing it may not change your life, but at least you made it to the end, which is an accomplishment in itself."
];
let currFacts = [];

if (localStorage.currFacts) {
    currFacts = JSON.parse(localStorage.currFacts);
}

const fact = document.getElementById("fact");
const fact_button = document.getElementById("factButton");
// getting fact
function showFact() {
    if (currFacts.length >= facts.length - 1) {
        fact.innerHTML = facts[facts.length - 1];
        fact_button.style.opacity = "0.0";
        setTimeout(() => {
            fact_button.remove();
        }, 600);
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * (facts.length - 1));
    } while (currFacts.includes(randomIndex));

    fact.innerHTML = facts[randomIndex];
    currFacts.push(randomIndex);
    localStorage.currFacts = JSON.stringify(currFacts);
}
// debug
function clearFacts() {
    currFacts = [];
    localStorage.currFacts = JSON.stringify(currFacts);
}