$(document).ready(function () {
    let interval = null;
    let totalQuestion = 0;

    function initComponents() {
        setupModal("Let's Start the Quiz", 'far fa-4x fa-clock', 'You have 20 Minutes',
            'START', 'btn btn-outline-primary waves-effect start');
        $('#start-modal').modal({
            backdrop: 'static',
            keyboard: false
        }, 'show')
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
        $('.modal-dialog').removeClass('modal-info').addClass('modal-warning').parent().modal('show');
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
        // alert("CONTINUE")
    });

    $(document).on('click', '.start', () => {
        // alert();
        startTimer(1 * 2, $('#clock'))
    });

    /**
     *  dora part
     */
    const collection = {
        collectionId: 1,
        questionList: [{
                questionId: 1,
                questionDescription: "What is A?",
                answerList: [{
                        answerId: 1,
                        answerDescription: "A",
                        isCorrect: true,
                    },

                    {
                        answerId: 2,
                        answerDescription: "B",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "C",
                        isCorrect: false,
                    },

                    {
                        answerId: 4,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 2,
                questionDescription: "What is B?",
                answerList: [{
                        answerId: 1,
                        answerDescription: "A",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "B",
                        isCorrect: true,
                    },

                    {
                        answerId: 3,
                        answerDescription: "C",
                        isCorrect: false,
                    },

                    {
                        answerId: 4,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 3,
                questionDescription: "What is C?",
                answerList: [{
                        answerId: 1,
                        answerDescription: "A",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "B",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "C",
                        isCorrect: true,
                    },

                    {
                        answerId: 4,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 4,
                questionDescription: "What is C?",
                answerList: [{
                        answerId: 1,
                        answerDescription: "A",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "B",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "C",
                        isCorrect: true,
                    },

                    {
                        answerId: 4,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 5,
                questionDescription: "What is E?",
                answerList: [{
                        answerId: 1,
                        answerDescription: "E",
                        isCorrect: true,
                    },

                    {
                        answerId: 2,
                        answerDescription: "F",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "G",
                        isCorrect: false,
                    },

                    {
                        answerId: 4,
                        answerDescription: "H",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 6,
                questionDescription: "What is H?",
                answerList: [{
                        answerId: 1,
                        answerDescription: "H",
                        isCorrect: true,
                    },

                    {
                        answerId: 2,
                        answerDescription: "Z",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "X",
                        isCorrect: true,
                    },

                    {
                        answerId: 4,
                        answerDescription: "C",
                        isCorrect: false,
                    },
                ],
            }
        ],
    };

    function loadCollection(collection) {
        let str = "";
        let questionList = collection.questionList;

        for (let question of questionList) {
            str +=
                `<div class=\"question question-item\" id=\"question_id_${question.questionId}\">` +
                `<div id=\"questionDescription_${question.questionId}\">${question.questionDescription}</div>` +
                `<div id=\"answerList_${question.questionId}\">`;

            for (let answer of question.answerList) {
                str +=
                    `<div class=\"form-check form-check-answer\">` +
                    `<input type=\"radio\" class=\"form-check-input\" value=\"${answer.answerDescription}\" name=\"question_${question.questionId}\" id=\"answer_${question.questionId}_${answer.answerId}\" is-correct=\"${answer.isCorrect}\">` +
                    `<label class=\"form-check-label\">${answer.answerDescription}</label>` +
                    `</div>`;
            }

            str += `</div></div>`;
        }
        document.getElementById('questionList').innerHTML = str;

        // Get total question length
        totalQuestion = parseInt($('#questionList').children().length);
        $('#questionCount').text(totalQuestion);
    }

    function getAnsweredQuestionCount() {
        let answeredCount = 0;
        for (let i = 1; i <= totalQuestion; i++) {
            let question = $(`input[name='question_${i}']:checked`);
            if (question.length === 1)
                answeredCount++;
        }

        // clean right here
        $('#questionActive').text(answeredCount);

        return answeredCount;
    }

    function applyEvents() {
        let questionListDiv = document.getElementById('questionList');
        let countQuestion = questionListDiv.childElementCount;

        for (let i = 1; i <= countQuestion; i++) {
            let radios = document.querySelectorAll('input[type=radio][name="question_' + i + '"]');

            Array.prototype.forEach.call(radios, function (radio) {
                radio.addEventListener('change', changeHandler);
            });

            function changeHandler(event) {
                // if (this.value === '') {
                //     alert("Correct")
                // } else if (this.value === 'transfer') {
                //     console.log('value', 'transfer');
                // }

                let selectedGroup = $(`input[name="${this.name}"]:checked`).length;
                console.log(selectedGroup);

                let group = $(`input[name="question_${i}"]:checked`);
                console.log(group);

                console.log("i = " + i);
                setProgressBar(getPercentProgressBar(getAnsweredQuestionCount(), totalQuestion));
            }
        }
    }

    function getPercentProgressBar(answeredCount, total) {
        return answeredCount * 100 / total;
    }

    function setProgressBar(percent) {
        $('#progressBarAnswers').attr('aria-valuenow', percent).css('width', percent + '%');
    }

    loadCollection(collection);
    // rename function
    applyEvents();
});