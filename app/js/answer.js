$(document).ready(function () {

    let answeredCount = 0;
    let correctAnswer = 0;
    let totalQuestion;

    function modifyButton(){
        $('.calculate').css('display','none');
        $('#btn-home').css('display', 'inline-block');
        $('#btn-profile').css('display', 'inline-block');
    }

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

   $(document).on('click', '.calculate', () =>{
       stopTime = Date.now();
       let miliUsed = stopTime - startTime;
       $('#time-finish-blog').text(millisToMinutesAndSeconds(miliUsed + 's'));
       clearInterval(interval);
       // $('#stop-modal').modal('show')
       // Get total question length
       totalQuestion = parseInt($('#questionList').children().length);
       console.log("Total q :" + totalQuestion);
       for (let i = 0; i < totalQuestion; i++) {
           let question = $(`input[name='question_${i}']:checked`);
           if (question.length === 1){
               answeredCount++;
               console.log(typeof (question.attr('is-correct')));
               if(question.attr('is-correct') === 'true'){
                   correctAnswer++;
               }
           }
       }
        modifyButton();
       $('.sub-quiz-result').css('display','inherit');
       $('#result-score').text(correctAnswer);
       $('#full-score').text(totalQuestion);
       $('#timer').css('display', 'none');

   }) ;
});