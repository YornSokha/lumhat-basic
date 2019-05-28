$(document).ready(function () {

    let answeredCount = 0;
    let correctAnswer = 0;
    let totalQuestion;
   $(document).on('click', '.calculate', () =>{
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

       $('.sub-quiz-result').css('display','inherit');
       $('#result-score').text(correctAnswer);
       $('#full-score').text(totalQuestion);

   }) ;
});