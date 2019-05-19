class Answer {
    constructor(answerDescription, isCorrect) {
        this.answerDescription = answerDescription;
        this.isCorrect = isCorrect;
    }
}

class Question {
    constructor(questionDescription, answerList) {
        this.questionDescription = questionDescription;
        this.answerList = answerList;
    }
}

class Collection {
    constructor(collectionId, questionList) {
        this.collectionId = collectionId;
        this.questionList = questionList;
    }
}

$(document).ready(function () {

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

    // loadQuestion(questionSample, answerSample);
    loadCollection(collection);

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
});