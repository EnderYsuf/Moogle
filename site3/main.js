const syllables = [
    "ka", "zu", "mo", "ra", "ti", "vo", "xe", "lu", "fi", "ba", 
    "do", "me", "sa", "jo", "ne", "qi", "wa", "re", "si", "po",
    "tu", "go", "ni", "ze", "xa", "fu", "mi", "ke", "ri", "ho",
    "ya", "co", "nu", "de", "vi", "to", "ba", "je", "qu", "so",
    "yu", "fa", "hi", "la", "wa", "mo", "se", "pi", "do", "ro",
    "ge", "no", "ki", "za", "xu", "ma", "te", "yo", "bo", "su",
    "pa", "lo", "ha", "xe", "ju", "fi", "ne", "ri", "va", "da",
    "mu", "co", "ze", "qi", "ta", "wi", "me", "lu", "ro", "ka",
    "hi", "sy", "gu", "vo", "xi", "je", "wo", "ku", "bo", "ye",
    "do", "za", "fu", "ne", "pi", "ru", "va", "ta", "xi", "go"
];

const nameElement = document.getElementById("name");

function generateName() {
    let newName = "";
    let nameLength = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < nameLength; i++) {
        let nextSyllable = syllables[Math.floor(Math.random() * syllables.length)];
        if (i === 0) {
            nextSyllable = nextSyllable.charAt(0).toUpperCase() + nextSyllable.slice(1);
        }
        newName += nextSyllable;
    }
    nameElement.innerHTML = newName;
}