$(document).ready(function () {
    let answeredCount = 0;
    let correctAnswer = 0;
    let totalQuestion;

    function modifyButton() {
        $('#btn_done').css('display', 'none');
        $('#btn_home').css('display', 'inline-block');
        $('#btn_profile').css('display', 'inline-block');
    }

    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    $(document).on('click', '#btn_done', () => {
        $('#modal-done').modal('show');
    });

    function setNewLayout() {
        $('#modal-done').css('display', 'none');
        $('#start-modal').css('display', 'none');
        $('.modal-backdrop').remove();
        $('.quiz-title').css('display', 'none');
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    }

    $(document).on('click', '.calculate', () => {
        setNewLayout();
        stopTime = Date.now();
        let miliUsed = stopTime - startTime;
        $('#time_finish_blog').text("time: " + millisToMinutesAndSeconds(miliUsed) + 's');
        clearInterval(interval);
        let questions = $("#question_list").children(".question");

        let totalQuestion = parseInt(questions.length);
        console.log(totalQuestion);
        let correctAnswer = 0;

        for (let i = 0; i < totalQuestion; i++) {
            let answersLength = (questions[i].children).length;

            let isSkipped = true;
            let isWrong = true;
            let currentAnswerTemp;
            let rightAnswerTemp;

            for (let a = 1; a < answersLength; a++) {
                let answer = questions[i].children[a];

                let isChecked = answer.children[0]["checked"];
                let rightAnswer = answer.children[0]["attributes"]["is-correct"]["value"];

                if (isChecked) {
                    if (rightAnswer === 'true') {
                        // setQuestionRight(answer);
                        correctAnswer++;
                        isWrong = false;
                        rightAnswerTemp = answer;
                    }
                    isSkipped = false;
                    currentAnswerTemp = answer;
                }

                if (rightAnswer === 'true') {
                    rightAnswerTemp = answer;
                }

            }

            if (isSkipped) {
                setQuestionSkip(rightAnswerTemp, questions[i]);
            } else if (isWrong) {
                setQuestionWrong(currentAnswerTemp, rightAnswerTemp);
            }

        }

        //Old Code
        // $('#time_finish_blog').text("time: " + millisToMinutesAndSeconds(miliUsed) + 's');
        // clearInterval(interval);
        //
        // totalQuestion = parseInt($('#question_list').children().length);
        // // console.log("Total Correct :" + totalQuestion);
        // for (let i = 0; i < totalQuestion; i++) {
        //     let question = $(`input[name='question_${i}']`);
        //     console.log(question);
        //
        //     if (question.length === 1) {
        //         answeredCount++;
        //
        //         if (question.attr('is-correct') === 'true') {
        //             correctAnswer++;
        //         }else{
        //             question.parent().addClass('wrong-answer')
        //         }
        //     }else{
        //         //TODO append span skip
        //         // question.parent().parent().parent().addClass('wrong-answer');
        //         console.log(question);
        //     }
        // }
        //
        // let answer = $('input[is-correct="true"]');
        // answer.parent().addClass('default-color');

        modifyButton();
        $('.sub-quiz-result').css('display', 'inherit');
        $('#result_score').text(correctAnswer);
        $('#full_score').text(totalQuestion);
        $('#timer').css('display', 'none');
        $('div').unbind();
        $('input:radio').attr('disabled', true);
    });

    function setQuestionRight(rightAnswer) {
        $('.form-check-label').css('width', 'initial');
        $(rightAnswer.children[1]).css({
            "background-color": "#d1f2dc",
            "padding-right": "10px",
            "border-radius": "10px"
        });
    }

    function setQuestionWrong(wrongAnswer, rightAnswer) {
        $('.form-check-label').css('width', 'initial');
        $(rightAnswer.children[1]).css({
            "background-color": "#d1f2dc",
            "padding-right": "10px",
            "border-radius": "10px"
        });
        $(wrongAnswer.children[1]).css({
            "background-color": "#ffdad0",
            "padding-right": "10px",
            "border-radius": "10px"
        });
    }

    function setQuestionSkip(answer, question) {
        $('.form-check-label').css('width', 'initial');
        $(answer.children[1]).css({
            "background-color": "#d1f2dc",
            "padding-right": "10px",
            "border-radius": "10px"
        });
        $(question).append('<p class="skipped" >Skipped</p>');
    }
});