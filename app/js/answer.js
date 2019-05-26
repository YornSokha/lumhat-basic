function initDoneQuiz() {

    // Change Header quiz
    setHeaderScore();

    // Check Answers
    checkQuestions();

    // Hide the timer progress bar in buttom
    $('#clock').css("display", "none");

    // After quiz the user can't interact questions
    disableQuestion();

    // Stop timer
    stopTimer();

    // Scroll to the top
    topFunction();

    setViewAfterDoneQuiz();



}

function insertRecord(score, duration) {
    var record = {
        score       : score,
        duration    : duration,
        quiz        : {id:quizId},
        userId     : userId
    };


    $.ajax({
        url:"/do-quiz",
        type:"POST",
        data:JSON.stringify(record),
        contentType:"application/json",
        success:function (record) {
        },
        error:function (error) {
        }

    })
}


function checkQuestions() {
    var questions = $("#question-container").children("#question-blog").children(".question");

    var questionLength = parseInt(questions.length);
    var score = 0;

    for (var i = 0; i < questionLength; i++ ) {
        var answersLength = (questions[i].children).length;

        var isSkipped = true;
        var isWrong = true;
        var currentAnswerTemp;
        var rightAnswerTemp;

        for (var a = 1; a < answersLength; a++) {
            var answer = questions[i].children[a];
            var isChecked = answer.children[0]["checked"];
            var rightAnswer = answer.children[0]["attributes"]["is-correct"]["value"];

            if (isChecked){
                if (rightAnswer=='true'){
                    setQuestionRight(answer);
                    score++;
                    isWrong = false;
                }
                isSkipped = false;
                currentAnswerTemp = answer;
            }

            if (rightAnswer=='true'){
                rightAnswerTemp = answer;
            }

        }

        if (isSkipped){
            setQuestionSkip(rightAnswerTemp, questions[i]);
        }else if (isWrong){
            setQuestionWrong(currentAnswerTemp, rightAnswerTemp);
        }
    }

    setScore(score, questionLength);
    setFinishTime(calculateFinishTimer());
    insertRecord(score, calculateFinishTimer())
}

function setQuestionRight(rightAnswer) {
    $('.form-check-label').css('width','initial');
    $(rightAnswer.children[1]).css({"background-color": "#d1f2dc", "padding-right":"10px","border-radius":"10px"});
}

function setQuestionWrong(wrongAnswer, rightAnswer) {
    $('.form-check-label').css('width','initial');
    $(rightAnswer.children[1]).css({"background-color": "#d1f2dc", "padding-right":"10px","border-radius":"10px"});
    $(wrongAnswer.children[1]).css({"background-color": "#ffdad0", "padding-right":"10px","border-radius":"10px"});
}

function setQuestionSkip(answer,question) {
    $('.form-check-label').css('width','initial');
    $(answer.children[1]).css({"background-color": "#d1f2dc", "padding-right":"10px","border-radius":"10px"});
    $(question).append('<p id="skipped" >Skipped</p>');
}

function disableQuestion() {
    var questions = $("#question-container").children("#question-blog").children(".question");
    var questionLength = parseInt(questions.length);

    for (var i = 0; i < questionLength; i++ ) {
        var answersLength = (questions[i].children).length;

        for (var a = 1; a < answersLength; a++) {
            var question = questions[i].children[a].children[0];
            $(question).attr("disabled","");

        }
    }

    $('.form-check').hover(function () {
        $(this).css('background','initial');
    });
}

function setHeaderScore(){
    $('.sub-quiz-result').css("display","inherit");
    $('.sub-quiz').css("display","none")
}

function setScore(resultScore, fullScore) {
    $('#result-score').text(resultScore);
    $('#full-score').text(fullScore);
}

function setFinishTime(second) {
    var min = Math.floor(second / 60);
    var sec = second % 60;
    if (min<=0){
        $('#time-finish-blog').text("Time: " + sec + "s" )
    }else{
        $('#time-finish-blog').text("Time: " + min + "mn : " + sec + "s" )
    }
}

function topFunction() {
    (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    })();
}


function setViewAfterDoneQuiz() {
    $("#btn-home").css("display","inline-block");
    $("#btn-profile").css("display","inline-block");
    $("#btn-done").css("display","none");
}

// Scroll To Top
$(".scrollTop").hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollTop').fadeIn();
    } else {
        $('.scrollTop').fadeOut();
    }
});

$('.scrollTop').click(function () {
    "use strict";
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
/** END BACK TO TOP **/

