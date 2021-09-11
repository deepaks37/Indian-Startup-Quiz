var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
// Welcome //
var userName = readlineSync.question(chalk.green.bgWhiteBright("What's your name? "));
console.log("hii " + userName + " Wellcome to The Indian Startup Quiz ");
console.log(chalk.green("Please select the correct option number and hit Enter button"));
// Game Function//
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!"));
    score = score + 1;
    console.log(score);
  } else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log(chalk.green("_____________________________"));
}
// Array of questions //
var questions = [{
  question: "Which is the most valuable startup in india? -> 1)Paytm  2)Byju's  3)Ola  4)pine labs  ",
  answer: "2"
}, {
  question: "Which is the first unicorn startup in india? -> 1)Oyo rooms  2)Unacademy  3)Inmobi  4)snapdeal  ",
  answer: "3"
}, {
  question: "What is India'a rank in startup ecosystem ? -> 1)first  2)second 3)fourth  4)third  ",
  answer: "4"
}, {
  question: "who is the founder of Cred? -> 1)kunal bhal  2)Vijay shekhar sharma 3)Kunal shah  4)Sachin bansal  ",
  answer: "3"
}, {
  question: "which startup is not bassed out of India? -> 1)Gojek  2)Cred  3)Zomato  4)Dunzo  ",
  answer: "1"
}];
// Loop //
for (var i = 0; i < questions.length; i++) {
  var activeQuestion = questions[i];
  play(activeQuestion.question, activeQuestion.answer)
}
// High scores //
var highScores = [{
  Name: "Deepak",
  Score: "5"
},{
  Name : "Ankit",
  Score : "4"
}];
console.log(chalk.black.bgYellow("Your score: " + score + "  "));
if (score >= 5) {
  console.log(chalk.black.bgWhiteBright("Yay!!, you nailed it, send me the screenshot and I will update the score"))
} else {
  console.log(chalk.black.bgWhiteBright("Beat the high score and send me the screenshot "));
}
console.log(chalk.black.bgGreen("People who scored the highest "));
console.log(highScores[0]);
console.log(highScores[1]);