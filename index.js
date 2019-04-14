'use strict';

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
    question: 'Which building is one of the original four buildings?',
    'choice-1': 'Murphy Hall',
    'choice-2': 'Royce Hall',
    'choice-3': 'The John R. Wooden Center',
    'choice-4': 'Bunche Hall',
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
    'choice-1': 'Jacqueline Bruin',
    'choice-2': 'Joe Bruin',
    'choice-3': 'Lady Bruin',
    'choice-4': 'Josephine Bruin',
    correct: 4
  },
  {
    number: 7,
    question: 'UCLA was the first to accomplish which feat?',
    'choice-1': 'Reach 100 national team championships',
    'choice-2': 'Invent the Internet',
    'choice-3': 'Surpass 100k freshman applicants',
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

let currentQuestionNumber = 0;
let UserScoreStat = 0;

function hideParentDiv(target) {
  target.closest('div').addClass('hidden');
}

function showQuizContent(target) {
  const targetElement = target.closest('section');
  targetElement.html(`
    <div class="quiz-content">
      <div class="user-stats">
        <div class="stats-question-number">
          <p>Q: <span class="color-blue">${currentQuestionNumber+1}</span> /10</p>
        </div>
        <div class="stats-score">
          <p class="stats-score-text">Score: <span class="color-blue">${UserScoreStat}</span></p>
        </div>
      </div>

      <div class="quiz-form-parent">
        <form class="quiz-form">
          <fieldset>
            <legend class="quiz-question">
              <h4>${questionList[currentQuestionNumber].number}. 
              ${questionList[currentQuestionNumber].question}</h4>
            </legend>
            <label class="answer-choice choice-1">
              <input type="radio" name="answer-choice" id="answer-choice-1" value="0" required>
              <span for="answer-choice-1">${questionList[currentQuestionNumber]['choice-1']}</span>
            </label>
            <label class="answer-choice choice-2">
              <input type="radio" name="answer-choice" id="answer-choice-2" value="1" required>
              <span for="answer-choice-2">${questionList[currentQuestionNumber]['choice-2']}</span>
            </label>
            <label class="answer-choice choice-3">
              <input type="radio" name="answer-choice" id="answer-choice-3" value="2" required>
              <span for="answer-choice-3">${questionList[currentQuestionNumber]['choice-3']}</span>
            </label>
            <label class="answer-choice choice-4" for="answer-choice-4">
              <input type="radio" name="answer-choice" id="answer-choice-4" value="3" required>
              <span for="answer-choice-4">${questionList[currentQuestionNumber]['choice-4']}</span>
            </label>
          </fieldset>

          <button type="submit" id="submit-answer">Submit</button>
        </form>
      </div>
    </div>
  `);
}

function startQuizOnClick() {
  $('.js-introduction').on('click', '#start-quiz-button', event => {
    const target = $(event.currentTarget);
    hideParentDiv(target);
    showQuizContent(target);
    userSubmitAnswerChoice();
  });
}

function showCorrectContent(target) {
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
}

function displayCorrect() {
  $('.quiz-form-parent').remove();
  $('.stats-score-text').html('Score: <span class="color-blue">' + UserScoreStat + '</span>');
  const target = $('.quiz-content');
  showCorrectContent(target);
}

function showIncorrectContent(target) {
  const questionIndex = questionList[currentQuestionNumber];
    target.append(`
    <div class="quiz-answer-result">
      <div class="answer-incorrect">
        <h3>Incorrect!</h3>
        <div class="answer-image answer-incorrect-image"></div>
        <div class="show-correct-answer">
          <h5>Answer:</h5>
          <p>${questionIndex[`choice-${questionIndex.correct}`]}</p>
        </div>
        <button class="next-question">Next</button>
      </div>
    </div>
    `);
}

function displayIncorrect() {
  $('.quiz-form-parent').remove();
  const target = $('.quiz-content');
  showIncorrectContent(target);
}

function checkAnswerChoice(target) {
  const answerChoice = questionList[currentQuestionNumber].correct;
  if ($(`#answer-choice-${answerChoice}`).prop("checked") == true) {
    UserScoreStat++;
    displayCorrect();
  } else {
    displayIncorrect();
  }
  goToNextQuestion();
}

function userSubmitAnswerChoice() {
  $('.quiz-form').on('submit', event => {
    event.preventDefault();
    const targetForm = $('.quiz-form');
    checkAnswerChoice(targetForm);
  })
}

function removeAnswerResult() {
  $('.quiz-answer-result').remove();
}

function showFinalResults() {
  let resultTitle = 'title';
  let resultDescription = 'description';
  if (UserScoreStat > 8) {
    resultTitle = 'TRUE BRUIN';
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

  $('.quiz-content').append(`
    <div class="end-result">
      <p>You are a...</p>
      <h2>${resultTitle}</h3>
      <h4>${resultDescription}</h4>
      <p>Take the quiz again!</p>
      <form id="restart-button">
        <button type="submit" id="restart-button">Restart</a>
      </div>
    </div>
  `);
  }

function goToNextQuestion() {
  $('.next-question').on('click', event => {
    if (currentQuestionNumber < 9) {
      const target = $(event.currentTarget).closest('div');
      currentQuestionNumber++;
      showQuizContent(target);
      userSubmitAnswerChoice();
    } else {
      removeAnswerResult();
      showFinalResults();
      restartQuiz();
    }
  });
}

function restartQuiz() {
  $('.quiz-content').on('submit', '#restart-button', event => {
    event.preventDefault();
    window.location.reload(false);
  });
}

function runQuizApp() {
  startQuizOnClick();
  userSubmitAnswerChoice();
  goToNextQuestion();
  restartQuiz();
}

$(runQuizApp);
