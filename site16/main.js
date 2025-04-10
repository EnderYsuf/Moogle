const questionWords = [
  "What", "How", "Why", "Where", "When", "Who", "Which", "Is", "Are", "Can",
  "Do", "Does", "Did", "Could", "Would", "Should", "Has", "Have", "Had", "May", "Might",
  "Will", "Tell", "Explain", "Describe", "Name", "Give", "Find", "Make", "Create", "Help",
  "Could you", "Would you", "Should I", "Do you", "Is it", "How many", "How much", "Why do",
  "Where can", "What happens", "What is the", "When was", "What if", "How do"
];

const subjects = [
  "your name", "the weather", "the capital of France", "the meaning of life", "the future", 
  "the internet", "a computer", "a cat", "a dog", "a car", "a book", "your favorite movie",
  "the economy", "the environment", "science", "history", "art", "music", "a holiday", "a dream",
  "your job", "your plans", "a smartphone", "the earth", "the galaxy", "a robot", "a spaceship", 
  "a mystery", "a superhero", "the sun", "a park", "the ocean", "a video game", "a poem", "a song",
  "a puzzle", "a person", "a location", "a restaurant", "a phone call", "the universe", "an adventure"
];

const answers = [
  "42", "Paris", "yes", "no", "a long time ago", "tomorrow", "unknown", "not sure", "maybe",
  "because it's complicated", "it depends", "a computer virus", "an astronaut", "a dog person",
  "a cat person", "in the past", "in the future", "on the moon", "it’s a secret", "it’s personal",
  "I don't know", "a dream", "a mystery", "with a twist", "unexpectedly", "by accident", "on purpose",
  "in the next decade", "when the time is right", "it could be worse", "I'll think about it", "let's find out",
  "it was a mistake", "I wish I knew", "we'll see", "in a few years", "who knows", "a long time ago", 
  "just like that", "nothing specific", "not available yet", "ask me later"
];

let new_question;  // Declare globally
let answer_1, answer_2;  // Declare globally

var answer1_btn = document.getElementById("answer1");
var answer2_btn = document.getElementById("answer2");
var question = document.getElementById("question");

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    return `${questionWords[randomValue(0, questionWords.length-1)]} ${subjects[randomValue(0, subjects.length-1)]}?`;
}

function getAnswers() {
    let answer1 = answers[randomValue(0, answers.length-1)];
    let answer2 = answers[randomValue(0, answers.length-1)];
    if (answer1 === answer2) {
        return getAnswers(); // Recursively call until the answers are different
    } else {
        return { answer_1: answer1, answer_2: answer2 };
    }
}

function answer(n) {
    let new_answer = document.createElement("li");
    // Use the globally scoped variables `new_question`, `answer_1`, and `answer_2`
    if (n === 1) {
        new_answer.innerHTML = `${new_question} : ${answer_1}`;
    } else {
        new_answer.innerHTML = `${new_question} : ${answer_2}`;
    }

    // Get the logList element
    var logList = document.getElementById('logList');
    
    // Insert the new_answer at the top of the list
    logList.insertBefore(new_answer, logList.firstChild);
    
    setQuestion(); // Update question and answers after an answer is selected
}

function setQuestion() {
    new_question = generateQuestion(); // Update the global `new_question`
    const { answer_1: new_answer_1, answer_2: new_answer_2 } = getAnswers(); // Destructure answers
    answer_1 = new_answer_1;  // Update the global `answer_1`
    answer_2 = new_answer_2;  // Update the global `answer_2`
    
    question.innerHTML = new_question;
    answer1_btn.innerHTML = answer_1;
    answer2_btn.innerHTML = answer_2;
}

window.onload = function() {
    setQuestion(); // Initialize the question and answers on page load
};