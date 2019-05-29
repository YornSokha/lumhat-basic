$(document).ready(function () {
    let answeredCount = 0;
    let correctAnswer = 0;
    let totalQuestion;

    function modifyButton() {
        $('.calculate').css('display', 'none');
        $('#btn_home').css('display', 'inline-block');
        $('#btn_profile').css('display', 'inline-block');
    }

    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    $(document).on('click', '.calculate', () => {
        stopTime = Date.now();
        let miliUsed = stopTime - startTime;
        // console.log(millisToMinutesAndSeconds(miliUsed));
        $('#time_finish_blog').text("time: " + millisToMinutesAndSeconds(miliUsed) + 's');
        clearInterval(interval);
        // $('#stop-modal').modal('show')
        // Get total question length
        totalQuestion = parseInt($('#question_list').children().length);
        // console.log("Total Correct :" + totalQuestion);
        for (let i = 0; i < totalQuestion; i++) {
            let question = $(`input[name='question_${i}']:checked`);
            if (question.length === 1) {
                answeredCount++;
                // console.log(typeof (question.attr('is-correct')));
                if (question.attr('is-correct') === 'true') {
                    correctAnswer++;
                }
            }
        }
        modifyButton();
        $('.sub-quiz-result').css('display', 'inherit');
        $('#result_score').text(correctAnswer);
        $('#full_score').text(totalQuestion);
        $('#timer').css('display', 'none');
        $('div').unbind();
        $('input:radio').attr('disabled', true);
    });
});