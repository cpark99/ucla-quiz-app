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

// start the quiz at question 1 (index 0)
  // this value increments by 1 every new question
let currentQuestionNumber = 0;
// start user score at 0
  // will increment by 1 if question is answered correctly
let UserScoreStat = 0;

function showQuizContent(target) {
  // target parent, <section class="content-box">
  const targetElement = target.closest('section');
  // Add <div class="quiz-content" to current target
  // add user stats
  // add question from questionList
    // .number and .question keys for <h4>
    // each answer choice in respective <div>
    // show submit button
  targetElement.html(`
    <div class="quiz-content">
      <div class="user-stats">
        <div class="stats-question-number">
          <p>Q: ${currentQuestionNumber+1}/10</p>
        </div>
        <div class="stats-score">
          <p class="stats-score-text">Score: ${UserScoreStat}</p>
        </div>
      </div>

      <div class="quiz-form-parent">
        <form class="quiz-form">
          <fieldset>
            <legend class="quiz-question">
              <h4>${questionList[currentQuestionNumber].number}. 
              ${questionList[currentQuestionNumber].question}</h4>
            </legend>
            <label class="answer-choice">
              <input type="radio" name="answer-choice" id="answer-choice-1" value="0">
              <label for="answer-choice-1">${questionList[currentQuestionNumber]['choice-1']}</label>
            </label>
            <label class="answer-choice">
              <input type="radio" name="answer-choice" id="answer-choice-2" value="1">
              <label for="answer-choice-2">${questionList[currentQuestionNumber]['choice-2']}</label>
            </label>
            <label class="answer-choice">
              <input type="radio" name="answer-choice" id="answer-choice-3" value="2">
              <label for="answer-choice-3">${questionList[currentQuestionNumber]['choice-3']}</label>
            </label>
            <label class="answer-choice" for="answer-choice-4">
              <input type="radio" name="answer-choice" id="answer-choice-4" value="3">
              <label for="answer-choice-4">${questionList[currentQuestionNumber]['choice-4']}</label>
            </label>
          </fieldset>

          <button type="submit" id="submit-answer">Submit</button>
        </form>
      </div>
    </div>
  `);
  console.log('`showQuizContent` ran');
}

// User should press Start to begin quiz
function startQuizOnClick() {
  $('.js-introduction').on('click', '#start-quiz-button', event => {
    const target = $(event.currentTarget);
    // hide parent .introduction <div>
    hideParentDiv(target);
    // show quiz content
    showQuizContent(target);
    // set event listener on new form
    userSubmitAnswerChoice();
    console.log('`startQuizOnClick` ran');
  });
}

function showCorrectContent(target) {
  // append div .quiz-answer-result
    // includes div .answer-correct
    target.append(`
    <div class="quiz-answer-result">
      <div class="answer-correct">
        <h3>Correct!</h3>
        <div class="answer-image answer-correct-image"></div>
        <h5>Good job!</h5>
        <button class="next-question">Next</button>
      </div>
    </div>
    `);
  console.log('`showCorrectContent` ran');
}

function displayCorrect() {
  // target form parent div
    // remove div .quiz-form-parent
  $('.quiz-form-parent').remove();
  // target div .stats-score
    // update score <p>
  $('.stats-score-text').text(`Score: ${UserScoreStat}`);
  // target div .quiz-content
  const target = $('.quiz-content');
  // append div for correct answer
  showCorrectContent(target);
  console.log('`displayCorrect` ran');
}

function showIncorrectContent(target) {
  // make variable for current questionList index
  const questionIndex = questionList[currentQuestionNumber];
  // append div .quiz-answer-result
    // includes div .answer-incorrect
    // shows correct answer
    target.append(`
    <div class="quiz-answer-result">
      <div class="answer-incorrect">
        <h3>Incorrect!</h3>
        <div class="answer-image answer-incorrect-image"></div>
        <div class="showCorrectAnswer">
          <h5>Answer:</h5>
          <p>${questionIndex[`choice-${questionIndex.correct}`]}</p>
        </div>
        <button class="next-question">Next</button>
      </div>
    </div>
    `);
  console.log('`showIncorrectContent` ran');
}

function displayIncorrect() {
  // target form parent div
    // remove div .quiz-form-parent
    $('.quiz-form-parent').remove();
  // target div .quiz-content
  const target = $('.quiz-content');
  // append div for incorrect answer
  showIncorrectContent(target);
  console.log('`displayIncorrect` ran');
}

function checkAnswerChoice(target) {
  // get question number stat, assign to variable
  console.log('current question: ' + currentQuestionNumber);
  // get correct answer from questionList
  const answerChoice = questionList[currentQuestionNumber].correct;
  // if correct answer is chosen
      // increase score by 1
      // update score
      // move to answer correct div
  //console.log(target);
  // $("input[value='2']");
  console.log('correct answer: ' + answerChoice);
  if ($(`#answer-choice-${answerChoice}`).prop("checked") == true) {
    console.log('answer correct');
    UserScoreStat++;
    console.log('score updated');
    displayCorrect();
  // else move to answer incorrect div
  } else {
    console.log('answer incorrect');
    displayIncorrect();
  }
  // re-initiate next click listening event
  goToNextQuestion();
  console.log('`checkAnswerChoice` ran');
}

// User should be able to submit selected answer
function userSubmitAnswerChoice() {
  // listen for event submit
  // prevent default submission
  $('.quiz-form').on('submit', event => {
    event.preventDefault();
    // target quiz-form
    const targetForm = $('.quiz-form');
    // check if answer is correct or not
    checkAnswerChoice(targetForm);
  })
  console.log('`userSubmitAnswerChoice` ran');
}

function removeAnswerResult() {
  // if current question number indexed on questionList is
  // undefined, then remove quiz content
  $('.quiz-answer-result').remove();
  console.log('`removeAnswerResult` ran');
}

// User should see final result page after last question
  // User should see their score and a comment
  // User should see a button to restart the quiz
function showFinalResults() {
  // result headers determined by UserScoreStat
  let resultTitle = 'title';
  let resultDescription = 'description';
  if (UserScoreStat > 8) {
    // set h2
    resultTitle = 'TRUE BRUIN';
    // set h4
    resultDescription = 'A champion among champions!';
  } else if (UserScoreStat > 6) {
    resultTitle = 'LOYAL BRUIN';
    resultDescription = 'A leader among followers!';
  } else if (UserScoreStat > 3) {
    resultTitle = 'BRUIN CUB';
    resultDescription = 'Better than most, almost there!';
  } else if (UserScoreStat > 0) {
    resultTitle = 'BRUIN BABY';
    resultDescription = 'How adorable... Try Harder!';
  } else {
    resultTitle = 'TROJAN';
    resultDescription = 'A crying baby among babies!';
  }
    // append quiz results
      // with reset link/button
    $('.quiz-content').append(`
      <div class="end-result">
        <p>You are a...</p>
        <h2>${resultTitle}</h3>
        <h4>${resultDescription}</h4>
        <p>Take the quiz again!</p>
        <form id="restart-button">
          <button type="submit" class="restart-button">Restart</a>
        </div>
      </div>
    `);
    console.log('`showFinalResults` ran');
  }

// User should be able to press next to go to next question
  // User should see question number updated
  // User should see next question
function goToNextQuestion() {
  // listen for next click event
  $('.next-question').on('click', event => {
    console.log('clicked');
    // see if quiz is complete
    if (currentQuestionNumber < 9) {
      // target .quiz-content
      const target = $(event.currentTarget).closest('div');
      // increase question number counter by 1
      currentQuestionNumber++;
      // display new quiz content
      showQuizContent(target);
      // re-initiate submit listening event
      userSubmitAnswerChoice();
    } else {
      // remove .quiz-answer-result
      removeAnswerResult();
      // add final result content
      showFinalResults();
    }
  });
  console.log('`goToNextQuestion` ran');
}

function runQuizApp() {
  startQuizOnClick();
  userSubmitAnswerChoice();
  goToNextQuestion();
  console.log('`runQuizApp` ran');
}

$(runQuizApp);