const subjects = [
    "consciousness", "freedom", "existence", "time", "space",
    "matter", "reality", "truth", "the meaning of life", "fate",
    "chance", "being", "subjectivity", "objectivity", "knowledge",
    "ethics", "morality", "logic", "human reason", "identity",
    "perception", "belief", "emotion", "suffering", "happiness",
    "self-awareness", "choice", "determinism", "the unknown", "dreams",
    "socks", "toasters", "shadows", "banana peels", "empty refrigerators",
    "the wisdom of ducks", "mirrors", "lost pens", "forgotten passwords", "air",
    "stairs", "ceiling fans", "the backrooms", "Wi-Fi signals", "pigeons",
    "gravity", "silent letters", "paradoxes", "the fear of missing out", "randomness"
];

const verbs = [
    "can", "does", "is", "should", "must",
    "could", "will", "may", "might", "shall",
    "why does", "how does", "in what way does", "where does", "when does",
    "who does", "which does", "whom does", "what does", "why is",
    "how is", "where is", "when is", "who is", "what is",
    "why can", "how can", "where can", "when can", "who can",
    "which can", "whom can", "what can",
    "does anyone truly understand", "is it morally wrong to", "why hasn’t science explained",
    "could we ever", "should philosophers debate", "will future generations regret",
    "is it possible to truly grasp", "if aliens exist, would they question",
    "should humans fear", "can we ever escape", "will we ever understand",
    "is it ethical to ignore", "what if we accidentally discovered",
    "how many philosophers have debated", "has anyone ever solved",
    "is it logical to believe in", "could there be hidden meaning in"
];

const objects = [
    "reality", "matter", "consciousness", "the soul", "the self",
    "free will", "determinism", "perception", "language", "ethics",
    "happiness", "morality", "justice", "power", "truth",
    "art", "love", "beauty", "science", "history",
    "technology", "culture", "society", "politics", "wisdom",
    "death", "immortality", "the universe", "God", "the unknown",
    "dreams", "memes", "doors", "why we blink", "whether cereal is soup",
    "the true purpose of socks", "chairs", "why pigeons exist", "imaginary numbers",
    "the reason why people touch wet paint after reading a sign", "Wi-Fi signals",
    "why humans invented clocks just to complain about time", "the flavor of air",
    "whether ghosts get bored", "why thoughts disappear when entering a room",
    "if pineapples belong on pizza", "the secret motives of pigeons",
    "whether doors are just sad, unspun wheels", "why we forget what we were doing mid-walk",
    "if we can ever truly trust autocorrect", "the rules of an imaginary game we all play"
];

const connectors = [
    "depend on", "exist within", "be defined by", "contradict",
    "influence", "shape", "determine", "be limited by", "interact with",
    "be an illusion of", "emerge from", "be a result of", "oppose",
    "be explained by", "be created by", "be a consequence of", "reflect",
    "be controlled by", "be an extension of", "be questioned by", "require",
    "cause", "be bound by", "be misunderstood as", "be proven by",
    "lead to", "resemble", "manifest as", "be confused with", "be necessary for",
    "be irrelevant to", "be secretly controlled by", "be feared by", "disprove",
    "be equivalent to", "replace", "be reduced to", "hide", "whisper to",
    "silently judge", "betray", "laugh at", "pretend to be", "accidentally reveal",
    "be offended by", "secretly envy", "turn into", "mock", "worship",
    "be allergic to", "dream of", "coexist with", "be scared of"
];

function randomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const question = document.getElementById("question");
function generateQuestion() {
    question.innerHTML = `${verbs[randomValue(0, verbs.length-1)]} ${subjects[randomValue(0, subjects.length-1)]} ${connectors[randomValue(0, connectors.length-1)]} ${objects[randomValue(0, objects.length-1)]}?`;
}