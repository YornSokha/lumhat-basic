$(document).ready(function () {
    let interval = null;

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
            questionDescription: "What is A?",
            answerList: [
                {
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
                answerList: [
                    {
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
                answerList: [
                    {
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

    function loadCollection(collection) {
        let questionListDiv = document.getElementById('questionList');
        let questionList = collection.questionList;

        let i = 0;
        for (let question of questionList) {
            let questionItemDiv = document.createElement('div');
            questionItemDiv.className = "question question-item";
            questionItemDiv.id = `question_id_${i}`;

            let questionDescriptionDiv = document.createElement('div');
            questionDescriptionDiv.id = `questionDescription_${i}`;

            let answerListDiv = document.createElement('div');
            answerListDiv.id = `answerList_${i}`;
            questionDescriptionDiv.innerHTML = question.questionDescription;

            let j = 0; // must change when apply with database
            for (let answer of question.answerList) {
                let answerGroup = document.createElement('div');
                let inputAnswer = document.createElement('input');
                let labelAnswer = document.createElement('label');

                answerGroup.className = "form-check form-check-answer";

                inputAnswer.type = "radio";
                inputAnswer.className = "form-check-input";
                inputAnswer.value = answer.answerDescription;
                inputAnswer.name = `question_${i}`; //  inputAnswer.name = `question_${questionId}`;
                inputAnswer.id = `answer_${i}_${j}`;
                inputAnswer.addEventListener('click', () =>{
                
                });

                labelAnswer.className = "form-check-label";
                labelAnswer.innerHTML = answer.answerDescription;

                answerGroup.appendChild(inputAnswer);
                answerGroup.appendChild(labelAnswer);
                answerListDiv.appendChild(answerGroup);

                j++;
            }
            questionItemDiv.appendChild(questionDescriptionDiv);
            questionItemDiv.appendChild(answerListDiv);
            questionListDiv.appendChild(questionItemDiv);

            let radios = document.querySelectorAll('input[type=radio][name="question_' + i + '" ]');
            function changeHandler(event) {
                // if (this.value === '') {
                //     alert("Correct")
                // } else if (this.value === 'transfer') {
                //     console.log('value', 'transfer');
                // }

                console.log(this.value);
            }

            Array.prototype.forEach.call(radios, function (radio) {
                radio.addEventListener('change', changeHandler);
            });
            i++;
        }
    }

    loadCollection(collection);
});
