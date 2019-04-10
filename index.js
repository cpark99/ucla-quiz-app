'use strict';

// User is presented with introduction content

// User should press Start to begin quiz
function startQuizOnClick() {

  console.log('`startQuizOnClick` ran');
}

// User should have question number start at 1
function updateQuestionNumber() {

  console.log('`updateQuestionNumber` ran');
}

// User should have score set to 0
function updateUserScore() {

  console.log('`updateUserScore` ran');
}

// User should be presented with a new screen:
// contains question number, score, and quiz question 1
function displayQuizContent() {

  console.log('`displayQuizContent` ran');
}

// User should be able to check an answer choice
function userCheckAnswerChoice() {

  console.log('`userCheckAnswerChoice` ran');
}

// User should be able to submit selected answer
function userSumbitAnswerChoice() {

  console.log('`userSumbitAnswerChoice` ran');
}

// User should be taken to new screen that displays:
//if correct answer or not
//User should see score updated if correct
function displayAnswerResult() {

  console.log('`displayAnswerResult` ran');
}

// User should be able to press next to go to next question
function goToNextQuestion() {

  console.log('`goToNextQuestion` ran');
}

// User should see question number updated
// User should see next question

// User should see final result page after last question
// User should see their score and a comment
// User should see a button to restart the quiz
function goToResultPage() {

  console.log('`goToResultPage` ran');
}

// User should be presented introduction content if clicked
function restartQuiz() {

  console.log('`restartQuiz` ran');
}

function runQuizApp() {
  startQuizOnClick();
  updateQuestionNumber();
  updateUserScore();
  displayQuizContent();
  userCheckAnswerChoice();
  userSumbitAnswerChoice();
  displayAnswerResult();
  goToNextQuestion();
  goToResultPage();
  restartQuiz();
  console.log('`runQuizApp` ran');
}

$(runQuizApp);