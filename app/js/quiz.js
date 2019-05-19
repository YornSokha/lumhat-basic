$(document).ready(function () {
    let interval = null;

    function initComponents() {
        setupModal("Let's Start the Quiz", 'far fa-4x fa-clock', 'You have 20 Minutes',
            'START', 'btn btn-outline-primary waves-effect start');
        $('#start-modal').modal('show')
    }

    initComponents();
    $('.calculate-score').on('click', () => {
        alert("Total Score");
    });

    function setupModal(header, icon, text, button, buttonClass) {
        $('.modal-content > .modal-header > p').text(header);
        $('.modal-content > .modal-body > div > p').text(text);
        $('.modal-content > .modal-body > div > i').attr('class', icon);
        $('.modal-content > .modal-footer > a').attr('class', buttonClass).text(button);
    }

    function onTime() {
        clearInterval(interval);
        setupModal('Time up', 'far fa-4x fa-check-circle', 'Please check your result!',
            'CONTINUE', 'btn btn-warning waves-effect continue');
        $('#start-modal').removeClass('modal-info').addClass('modal-warning').modal('show');
    }

    function startTimer(duration, display) {
        let timer = duration,
            minutes, seconds;
        interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                // timer = duration;
                onTime();
            }

        }, 1000);
    }

    $(document).on('click', '.continue', () => {
        alert("CONTINUE")
    });

    $(document).on('click', '.start', () => {
        // alert();
        startTimer(ew * 1, $('#clock'))
    });
});

/**
 *  dora part
 */
const collection = {
    collectionId: 1,
    questionList: [{
            questionDescription: "What is A?",
            answerList: [{
                    answerDescription: "A",
                    isCorrect: true,
                },

                {
                    answerDescription: "B",
                    isCorrect: false,
                },

                {
                    answerDescription: "C",
                    isCorrect: false,
                },

                {
                    answerDescription: "D",
                    isCorrect: false,
                },
            ],
        },

        {
            questionDescription: "What is B?",
            answerList: [{
                    answerDescription: "A",
                    isCorrect: false,
                },

                {
                    answerDescription: "B",
                    isCorrect: true,
                },

                {
                    answerDescription: "C",
                    isCorrect: false,
                },

                {
                    answerDescription: "D",
                    isCorrect: false,
                },
            ],
        },

        {
            questionDescription: "What is C?",
            answerList: [{
                    answerDescription: "A",
                    isCorrect: false,
                },

                {
                    answerDescription: "B",
                    isCorrect: false,
                },

                {
                    answerDescription: "C",
                    isCorrect: true,
                },

                {
                    answerDescription: "D",
                    isCorrect: false,
                },
            ],
        }
    ],
};

// loadCollection(collection);

function loadCollection(collection) {
    let questionListDiv = document.getElementById('questionList');
    let questionList = collection.questionList;

    let i = 0;
    for (let question of questionList) {
        let questionItemDiv = document.createElement('div');
        questionItemDiv.className = "question question-item";
        questionItemDiv.id = `question_id_${i}`;

        let questionDescriptionDiv = document.createElement('div');
        questionDescriptionDiv.id = `questionDescription`;

        let answerListDiv = document.createElement('div');
        answerListDiv.id = "answerList";
        questionDescriptionDiv.innerHTML = question.questionDescription;

        let j = 0; // must change when apply with database
        for (let answer of question.answerList) {
            let answerGroup = document.createElement('div');
            let inputAnswer = document.createElement('input');
            let labelAnswer = document.createElement('label');

            answerGroup.className = "form-check form-check-answer";

            inputAnswer.type = "radio";
            inputAnswer.className = "form-check-input";
            inputAnswer.name = "question_1"; //  inputAnswer.name = `question_${questionId}`;
            inputAnswer.id = `answer_${j}`;

            labelAnswer.className = "form-check-label";
            labelAnswer.id = `answer_description_${j}`;
            labelAnswer.innerHTML = answer.answerDescription;

            answerGroup.appendChild(inputAnswer);
            answerGroup.appendChild(labelAnswer);
            answerListDiv.appendChild(answerGroup);

            j++;
        }
        questionItemDiv.appendChild(questionDescriptionDiv);
        questionItemDiv.appendChild(answerListDiv);
        questionListDiv.appendChild(questionItemDiv);
        i++;
    }
}