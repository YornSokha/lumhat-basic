class Collection {
    let _questionList;

    constructor() {
        this._questionList = [];
    }

    function addQuestionList(questionList) {
        this._questionList.push(questionList);
    }
}

class QuestionList {

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
                    isCorrect: false,
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