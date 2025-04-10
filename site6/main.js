const questions = [
    { 
        text: "What is your favorite color?", 
        answers: { 
            "Green": ["Cucumber", "Lettuce"], 
            "Red": ["Tomato", "Radish"], 
            "Orange": ["Carrot", "Pumpkin"], 
            "Brown": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "What is your personality?", 
        answers: { 
            "Calm and relaxed": ["Cucumber", "Lettuce"], 
            "Social and fun": ["Tomato", "Corn"], 
            "Energetic and strong-willed": ["Carrot", "Garlic"], 
            "Reliable and supportive": ["Potato", "Pumpkin"] 
        }
    },
    { 
        text: "What is your favorite weather?", 
        answers: { 
            "Sunny and warm": ["Tomato", "Corn"], 
            "Cool and breezy": ["Cucumber", "Lettuce"], 
            "Rainy and peaceful": ["Potato", "Garlic"], 
            "Autumn vibes": ["Carrot", "Pumpkin"] 
        }
    },
    { 
        text: "Which farm animal would you have?", 
        answers: { 
            "Cow": ["Potato", "Garlic"], 
            "Chicken": ["Carrot", "Pumpkin"], 
            "Goat": ["Tomato", "Corn"], 
            "Rabbit": ["Cucumber", "Lettuce"] 
        }
    },
    { 
        text: "What's your ideal vacation?", 
        answers: { 
            "A peaceful retreat": ["Cucumber", "Lettuce"], 
            "An adventure with friends": ["Tomato", "Corn"], 
            "A cozy stay at home": ["Potato", "Garlic"], 
            "A countryside trip": ["Carrot", "Pumpkin"] 
        }
    },
    { 
        text: "How do you handle challenges?", 
        answers: { 
            "Stay calm and think logically": ["Cucumber", "Lettuce"], 
            "Tackle it head-on": ["Carrot", "Garlic"], 
            "Work with others for a solution": ["Tomato", "Corn"], 
            "Take my time and find a way": ["Potato", "Pumpkin"] 
        }
    },
    { 
        text: "Which farm job would you enjoy?", 
        answers: { 
            "Planting crops": ["Cucumber", "Lettuce"], 
            "Taking care of animals": ["Tomato", "Corn"], 
            "Harvesting vegetables": ["Carrot", "Garlic"], 
            "Maintaining the farm": ["Potato", "Pumpkin"] 
        }
    },
    { 
        text: "What's your favorite season?", 
        answers: { 
            "Spring": ["Cucumber", "Lettuce"], 
            "Summer": ["Tomato", "Corn"], 
            "Autumn": ["Carrot", "Pumpkin"], 
            "Winter": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "What's your go-to comfort food?", 
        answers: { 
            "A fresh salad": ["Cucumber", "Lettuce"], 
            "A hearty soup": ["Potato", "Garlic"], 
            "A grilled sandwich": ["Tomato", "Corn"], 
            "A warm pie": ["Carrot", "Pumpkin"] 
        }
    },
    { 
        text: "How do you spend your free time?", 
        answers: { 
            "Relaxing with a book": ["Cucumber", "Lettuce"], 
            "Socializing with friends": ["Tomato", "Corn"], 
            "Doing creative projects": ["Carrot", "Pumpkin"], 
            "Cooking or gardening": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "If you were a tool on a farm, what would you be?", 
        answers: { 
            "A watering can": ["Cucumber", "Lettuce"], 
            "A shovel": ["Potato", "Garlic"], 
            "A pitchfork": ["Carrot", "Pumpkin"], 
            "A tractor": ["Tomato", "Corn"] 
        }
    },
    { 
        text: "What's your favorite farm fruit?", 
        answers: { 
            "Strawberry": ["Tomato", "Corn"], 
            "Apple": ["Carrot", "Pumpkin"], 
            "Blueberry": ["Cucumber", "Lettuce"], 
            "Pear": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "Which farm activity sounds fun?", 
        answers: { 
            "Picking fresh vegetables": ["Carrot", "Pumpkin"], 
            "Feeding animals": ["Tomato", "Corn"], 
            "Tending to plants": ["Cucumber", "Lettuce"], 
            "Working in the soil": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "What's your dream home setting?", 
        answers: { 
            "A cottage in the woods": ["Potato", "Garlic"], 
            "A farmhouse with a garden": ["Carrot", "Pumpkin"], 
            "A cozy cabin by the lake": ["Cucumber", "Lettuce"], 
            "A countryside estate": ["Tomato", "Corn"] 
        }
    },
    { 
        text: "What kind of pet would you have?", 
        answers: { 
            "A dog": ["Carrot", "Pumpkin"], 
            "A cat": ["Cucumber", "Lettuce"], 
            "A bird": ["Tomato", "Corn"], 
            "A rabbit": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "How do you wake up in the morning?", 
        answers: { 
            "Slow and relaxed": ["Cucumber", "Lettuce"], 
            "Energetic and ready": ["Carrot", "Pumpkin"], 
            "With a nice breakfast": ["Potato", "Garlic"], 
            "With coffee and music": ["Tomato", "Corn"] 
        }
    },
    { 
        text: "What's your favorite way to celebrate?", 
        answers: { 
            "A small, peaceful gathering": ["Cucumber", "Lettuce"], 
            "A big, fun party": ["Tomato", "Corn"], 
            "A cozy evening with food": ["Potato", "Garlic"], 
            "A seasonal festival": ["Carrot", "Pumpkin"] 
        }
    },
    { 
        text: "What do you value most in life?", 
        answers: { 
            "Peace and balance": ["Cucumber", "Lettuce"], 
            "Excitement and adventure": ["Tomato", "Corn"], 
            "Hard work and dedication": ["Carrot", "Pumpkin"], 
            "Stability and comfort": ["Potato", "Garlic"] 
        }
    },
    { 
        text: "If you were a type of bread, what would you be?", 
        answers: { 
            "Soft and fluffy white bread": ["Cucumber", "Lettuce"], 
            "Rustic sourdough": ["Potato", "Garlic"], 
            "A hearty whole grain": ["Carrot", "Pumpkin"], 
            "A fresh baguette": ["Tomato", "Corn"] 
        }
    },
    { 
        text: "How do you handle stress?", 
        answers: { 
            "Take a deep breath and relax": ["Cucumber", "Lettuce"], 
            "Talk it out with friends": ["Tomato", "Corn"], 
            "Push through with determination": ["Carrot", "Pumpkin"], 
            "Find comfort in routine": ["Potato", "Garlic"] 
        }
    }
];

const scores = { "Cucumber": 0, "Tomato": 0, "Carrot": 0, "Potato": 0, "Corn": 0, "Garlic": 0, "Lettuce": 0, "Pumpkin": 0, "Radish": 0 };
let currentQuestion = 0;

function showQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        const questionText = document.createElement("div");
        questionText.className = "question";
        questionText.textContent = q.text;
        quizDiv.appendChild(questionText);

        for (const [answer, vegetables] of Object.entries(q.answers)) {
            const button = document.createElement("button");
            button.className = "answer";
            button.textContent = answer;
            button.onclick = () => {
                vegetables.forEach(veg => scores[veg]++);
                nextQuestion();
            };
            quizDiv.appendChild(button);
        }
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function showResult() {
    const maxScore = Math.max(...Object.values(scores));
    const resultVegetables = Object.keys(scores).filter(v => scores[v] === maxScore);
    const chosenVegetable = resultVegetables[Math.floor(Math.random() * resultVegetables.length)];
    
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").textContent = `You are a ${chosenVegetable}!`;
    document.getElementById("resImage").src = `images/${chosenVegetable}.png`;
    document.getElementById("resImage").style.display = "block";
    document.getElementById("nextBtn").remove();
}

document.getElementById("nextButton").addEventListener("click", nextQuestion);

showQuestion();