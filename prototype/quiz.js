$(document).ready(function () {
    const questionSample = "What is your name?";
    const answerSample = ["A", "B", "C", "D"];

    loadQuestion(question, answerSample);

    function loadQuestion(question, answerList) {
        let questionDescription = document.getElementById('questionDescription');
        let answerList = document.getElementById('answerList');
        questionDescription.innerHTML = question;

        let i = 0; // must change when apply with database
        for (let answer in answerList) {
            let answerGroup = document.createElement('div');
            let inputAnswer = document.createElement('input');
            let labelAnswer = document.createElement('label');

            answerGroup.className = "form-check form-check-answer";

            inputAnswer.type = "radio";
            inputAnswer.className = "form-check-input";
            inputAnswer.name = "question_1"; //  inputAnswer.name = `question_${questionId}`;
            inputAnswer.id = `answer_${i}`;

            labelAnswer.className = "form-check-label";
            labelAnswer.id = `answer_description_${i}`;
            labelAnswer.innerHTML = answer;

            answerGroup.appendChild(inputAnswer);
            answerGroup.appendChild(labelAnswer);
            answerList.appendChild(answerGroup);

            i++;
        }
    }
});