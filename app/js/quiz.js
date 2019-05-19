$(document).ready(function () {
    let interval = null;

    function initComponents() {
        setupModal("Let's Start the Quiz", 'far fa-4x fa-clock', 'You have 20 Minutes',
            'START', 'btn btn-outline-primary waves-effect start');
        $('#start-modal').modal('show')
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
        $('#start-modal').removeClass('modal-info').addClass('modal-warning').modal('show');
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
        alert("CONTINUE")
    });

    $(document).on('click', '.start', () => {
        // alert();
        startTimer(6 * 1, $('#clock'))
    });


    /**
     *  dora part
     */
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