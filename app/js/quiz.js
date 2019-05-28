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

    // initComponents();
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
    function Collection(collectionId, questionList) {
        this._collectionId = collectionId;
        this._questionList = questionList;
    }

    function QuestionList(questionId, questionDescription, answerList) {
        this._questionId = questionId;
        this._questionDescription = questionDescription;
        this._answerList = answerList;
    }

    function AnswerList(answerId, answerDescription, isCorrect) {
        this._answerId = answerId;
        this._answerDescription = answerDescription;
        this._isCorrect = isCorrect;
    }

    const collection = {
        collectionId: 0,
        questionList: [{
                questionId: 0,
                questionDescription: "What is A?",
                answerList: [{
                        answerId: 0,
                        answerDescription: "A",
                        isCorrect: true,
                    },

                    {
                        answerId: 1,
                        answerDescription: "B",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "C",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 1,
                questionDescription: "What is B?",
                answerList: [{
                        answerId: 0,
                        answerDescription: "A",
                        isCorrect: false,
                    },

                    {
                        answerId: 1,
                        answerDescription: "B",
                        isCorrect: true,
                    },

                    {
                        answerId: 2,
                        answerDescription: "C",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 2,
                questionDescription: "What is C?",
                answerList: [{
                        answerId: 0,
                        answerDescription: "A",
                        isCorrect: false,
                    },

                    {
                        answerId: 1,
                        answerDescription: "B",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "C",
                        isCorrect: true,
                    },

                    {
                        answerId: 3,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 3,
                questionDescription: "What is C?",
                answerList: [{
                        answerId: 0,
                        answerDescription: "A",
                        isCorrect: false,
                    },

                    {
                        answerId: 1,
                        answerDescription: "B",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "C",
                        isCorrect: true,
                    },

                    {
                        answerId: 3,
                        answerDescription: "D",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 4,
                questionDescription: "What is E?",
                answerList: [{
                        answerId: 0,
                        answerDescription: "E",
                        isCorrect: true,
                    },

                    {
                        answerId: 1,
                        answerDescription: "F",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "G",
                        isCorrect: false,
                    },

                    {
                        answerId: 3,
                        answerDescription: "H",
                        isCorrect: false,
                    },
                ],
            },

            {
                questionId: 5,
                questionDescription: "What is H?",
                answerList: [{
                        answerId: 0,
                        answerDescription: "H",
                        isCorrect: true,
                    },

                    {
                        answerId: 1,
                        answerDescription: "Z",
                        isCorrect: false,
                    },

                    {
                        answerId: 2,
                        answerDescription: "X",
                        isCorrect: true,
                    },

                    {
                        answerId: 3,
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
        for (let i = 0; i < totalQuestion; i++) {
            let question = $(`input[name='question_${i}']:checked`);
            if (question.length === 1)
                answeredCount++;
        }

        // set this line to view caller
        $('#questionActive').text(answeredCount);

        return answeredCount;
    }

    function answerListApplyListener() {
        let questionListDiv = $('#questionList');
        let questionItemList = questionListDiv.children();
        let answerListOnly = questionItemList.children(':odd');

        for(let item of answerListOnly) {
            for(let subitem of item.childNodes) {
                $(subitem).hover(mouseEnterHandler, mouseLeaveHandler);
                $(subitem).click(mouseClickHandler);
            }
        }
    }

    function mouseEnterHandler(event) {
        $(this).addClass("default-color");
    }

    function mouseLeaveHandler(event) {
        $(this).removeClass("default-color");
    }

    function mouseClickHandler(event) {
        let input = this.children.item(0);
        input.checked = true;
        setProgressBar(getPercentProgressBar(getAnsweredQuestionCount(), totalQuestion));
    }

    function getPercentProgressBar(answeredCount, total) {
        return answeredCount * 100 / total;
    }

    function setProgressBar(percent) {
        $('#progressBarAnswers').attr('aria-valuenow', percent).css('width', percent + '%');
    }

    loadCollection(collection);
    answerListApplyListener();
});