const forgottenObjects = [
  "umbrella", "phone", "wallet", "keys", "bag", "sunglasses", "watch", "notebook", "headphones", "gloves",
  "scarf", "jacket", "water bottle", "charger", "pen", "earrings", "hat", "shoes", "laptop", "flash drive",
  "credit card", "book", "passport", "lip balm", "makeup bag", "bus pass", "lighter", "camera", "coffee mug", "lunchbox",
  "shopping bag", "hairbrush", "toothbrush", "socks", "towel", "power bank", "ticket", "ID card", "spoon",
  "glasses", "headband", "perfume", "chewing gum", "USB cable", "face mask", "remote control", "medicine"
];

const forgottenTasks = [
  "lock the door", "turn off the stove", "feed the pet", "pay the bills", "set an alarm", "charge the phone",
  "take medicine", "buy groceries", "call back a friend", "reply to an email", "water the plants",
  "return a borrowed item", "pick up laundry", "send a birthday message", "bring lunch", "take out the trash",
  "do the dishes", "switch off lights", "close the windows", "attend a meeting", "do homework",
  "prepare for an exam", "pick up a parcel", "write a report", "check the mailbox", "book an appointment",
  "renew a subscription", "refuel the car", "bring an umbrella", "pack a charger", "submit paperwork",
  "take vitamins", "exercise", "charge a laptop", "print a document", "pack a gift", "take ID",
  "clean the house", "sign a document", "bring a notebook", "turn off notifications", "wear a watch",
  "save a file", "close an app", "finish a project", "check the schedule", "respond to texts", "buy a ticket", "pack lunch"
];

const randomForgottenThings = [
  "someone’s name", "where you parked", "why you entered a room", "a password", "a PIN code",
  "a joke’s punchline", "what day it is", "a dream", "a song’s name", "an important date",
  "where you left your phone", "where you placed your glasses", "to bring a gift", "a meeting time",
  "a Wi-Fi password", "a deadline", "the lyrics to a song", "to eat breakfast", "to pay rent", "a grocery list",
  "to save progress in a game", "to mute your mic in a call", "to turn off the oven", "where you put your keys",
  "to drink water", "the name of a movie", "a social media password", "to take a shower", "to set an alarm",
  "to reply to a message", "your own phone number", "why you’re standing up", "to send an email",
  "to return a call", "what you were thinking about", "a friend’s birthday", "a homework deadline",
  "your own address", "to charge your phone", "to bring a mask", "where you stored a document",
  "a family member’s birthday", "a doctor’s appointment", "your own age", "the meaning of a dream",
  "what you were about to say", "an online order", "to check notifications", "to turn off the lights"
];

function generateForgottenSentence() {
  const sentenceTypes = [
    () => `You forgot ${forgottenObjects[Math.floor(Math.random() * forgottenObjects.length)]}.`,
    () => `You forgot to ${forgottenTasks[Math.floor(Math.random() * forgottenTasks.length)]}.`,
    () => `You forgot ${randomForgottenThings[Math.floor(Math.random() * randomForgottenThings.length)]}.`,
    () => "I don't know.",
    () => "You forgot something, but I can't remember what."
  ];
  
  return sentenceTypes[Math.floor(Math.random() * sentenceTypes.length)]();
}

function apply() {
    document.getElementById("forgotten").innerHTML = generateForgottenSentence();
    document.getElementById("forgetBtn").innerHTML = "What did i also forgot?";
}