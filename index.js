'use strict';

// create Array of Objects for questions and answers
const questionList = [
  {
    number: 1,
    question: 'What year was UCLA founded?',
    'choice-1': '1936',
    'choice-2': '1899',
    'choice-3': '1919',
    'choice-4': '1947',
    correct: 3
  },
  {
    number: 2,
    question: 'This building is known as what?',
    'choice-1': 'Powell Library',
    'choice-2': 'Royce Hall',
    'choice-3': 'John Wooden Center',
    'choice-4': 'Anderson',
    correct: 2
  },
  {
    number: 3,
    question: 'As of 2019, UCLA has how many Nobel Prize Winners?',
    'choice-1': '14',
    'choice-2': '5',
    'choice-3': '23',
    'choice-4': '11',
    correct: 1
  },
  {
    number: 4,
    question: 'As on 2019, UCLA has how many Olympic medals?',
    'choice-1': '190',
    'choice-2': '261',
    'choice-3': '145',
    'choice-4': '215',
    correct: 2
  },
  {
    number: 5,
    question: 'UCLA is located in which neighborhood?',
    'choice-1': 'Santa Monica',
    'choice-2': 'Beverly Hills',
    'choice-3': 'Westwood Village',
    'choice-4': 'Brentwood',
    correct: 3
  },
  {
    number: 6,
    question: 'UCLA\'s female mascot has what name?',
    'choice-1': 'Jacqueline',
    'choice-2': 'Joe',
    'choice-3': 'Lady Bruin',
    'choice-4': 'Josephine',
    correct: 4
  },
  {
    number: 7,
    question: 'UCLA was the first to accomplish which feat?',
    'choice-1': 'Reach 100 national team championships',
    'choice-2': 'Invent the Internet',
    'choice-3': 'Surpass 100k undergraduate, freshman applicants',
    'choice-4': 'All of the above',
    correct: 4
  },
  {
    number: 8,
    question: 'What is the name of UCLA\'s cross-town rival?',
    'choice-1': 'UC Berkeley',
    'choice-2': 'USC',
    'choice-3': 'Stanford',
    'choice-4': 'Cal State Los Angeles',
    correct: 2
  },
  {
    number: 9,
    question: 'UCLA is a...',
    'choice-1': 'Private University',
    'choice-2': 'Community College',
    'choice-3': 'Public University',
    'choice-4': 'Private College',
    correct: 3
  },
  {
    number: 10,
    question: 'UCLA\'s World-renown medical center is called the...',
    'choice-1': 'Ronald Reagan Medical Center',
    'choice-2': 'John R. Wooden Medical Center',
    'choice-3': 'UCLA University Hospital',
    'choice-4': 'John Wooden Health Center',
    correct: 1
  }
];

// User is presented with introduction content

function hideParentDiv(target) {
  target.closest('div').addClass('hidden');

  console.log(`${target} is now hidden`);
}

function showUserQuizStats(target) {
  // target parent, <section class="content-box">
  const targetElement = target.closest('section');
  // Add <div class="user-stats" to current target
  let questionNumberStat = 0;
  let UserScoreStat = 0;
  targetElement.html(`
    <div class="quiz-content">
      <div class="user-stats">
        <div class="stats-question-number">
          <p>Q: ${questionNumberStat}/10</p>
        </div>
        <div class="stats-score">
          <p>Score: ${UserScoreStat}</p>
        </div>
      </div>
    </div>
  `);

  console.log('`showUserQuizStats` ran');
}

function displayQuestion1(target) {
  // target <div class="quiz-content">
  const targetElement = $('.quiz-content');
  //console.log(targetElement);
  // add question 1 from questionList
  // .number and .question keys for <h4>
  targetElement.append(`
    <div class="quiz-question">
      <h4>${questionList[0].number}. ${questionList[0].question}</h4>
    </div>
  `);
  // each answer choice in respective <div>
  // show submit button

  console.log('`displayQuestion1` ran');
}

// User should press Start to begin quiz
function startQuizOnClick() {
  $('.introduction').on('click', '#start-quiz-button', event => {
    const target = $(event.currentTarget);
    // hide parent .introduction <div>
    hideParentDiv(target);
    // target .content-box
    // add new html: <div class="quiz-content">
    // add <div class="user-stats">
    // start question at 1
    // start score at 0
    showUserQuizStats(target);
    // set target to <section class="content-box">
    const targetSection = $('.content-box');
    // add question 1 from questionList
    // .number and .question keys for <h4>
    // each answer choice in respective <div>
    // show submit button
    displayQuestion1(targetSection);

    console.log('`startQuizOnClick` ran');
  });
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