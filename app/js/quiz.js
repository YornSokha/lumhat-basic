// $(document).ready(function () {
    let interval = null;
    let totalQuestion = 0;

    let startTime;
    let stopTime;

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
        $('.modal-content > .modal-header > .lead').text(header);
        $('.modal-content > .modal-body > div > p').text(text);
        $('.modal-content > .modal-body > div > i').attr('class', icon);
        $('.modal-content > .justify-content-center > a').attr('class', buttonClass).text(button);
    }

    function onTime() {
        clearInterval(interval);
        setupModal('Time up', 'far fa-4x fa-check-circle', 'Please check your result!',
            'CONTINUE', 'btn btn-warning waves-effect calculate');
        $('#start-modal').find('.modal-dialog').removeClass('modal-info').addClass('modal-warning').parent().modal('show');
    }

    function startTimer(duration, display) {
        startTime = Date.now();
        // console.log(startTime);
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

    // $(document).on('click', '.continue', () => {
    //     // alert("CONTINUE")
    // });

    $(document).on('click', '.start', () => {
        // alert();
        startTimer(20 * 60 , $('#clock'))
    });

    /**
     *  dora part
     */
    function loadCollection(collection) {
        let str = "";
        let questionList = collection.questionList;

        let counter = 0;
        for (let question of questionList) {
            str +=
                `<div class=\"question question-item\" id=\"question_id_${counter}\">` +
                `<div class=\"question-title\" id=\"question_description_${counter}\">${counter}. ${question.questionDescription}</div>`;

            let in_counter = 0;
            for (let answer of question.answerList) {
                str +=
                    `<div class=\"form-check form-check-answer answer-item\">` +
                    `<input type=\"radio\" class=\"form-check-input radio-answer option-input radio\" value=\"answer_${in_counter}\" name=\"question_${counter}\" id=\"answer_${counter}_${in_counter}\" is-correct=\"${answer.isCorrect}\">` +
                    `<label class=\"label-answer form-check-label\">${answer.answerDescription}</label>` +
                    `</div>`;
                in_counter++;
            }

            str += `</div>`;
            counter++;
        }
        document.getElementById('question_list').innerHTML = str;

        // Get total question length
        totalQuestion = parseInt($('#question_list').children().length);
        $('#question_count').text(totalQuestion);
    }

    function getAnsweredQuestionCount() {
        let answeredCount = 0;
        for (let i = 0; i < totalQuestion; i++) {
            let question = $(`input[name='question_${i}']:checked`);
            if (question.length === 1)
                answeredCount++;
        }

        // set this line to view caller
        $('#question_active').text(answeredCount);

        return answeredCount;
    }

    function answerListApplyListener() {
        let questionListDiv = $('#question_list');
        let questionItemList = questionListDiv.children();
        let answerListOnly = questionItemList.children(':odd');

        for(let item of answerListOnly) {
            for(let subitem of item.childNodes) {
                $(subitem).hover(mouseEnterHandler, mouseLeaveHandler);
                $(subitem).click(mouseClickHandler);
            }
        }
    }

    function mouseEnterHandler(event) {
        $(this).addClass("default-color");
    }

    function mouseLeaveHandler(event) {
        $(this).removeClass("default-color");
    }

    function mouseClickHandler(event) {
        let input = this.children.item(0);
        input.checked = true;
        setProgressBar(getPercentProgressBar(getAnsweredQuestionCount(), totalQuestion));
    }

    function getPercentProgressBar(answeredCount, total) {
        return answeredCount * 100 / total;
    }

    function setProgressBar(percent) {
        $('#progressbar_answers').attr('aria-valuenow', percent).css('width', percent + '%');
    }

    loadCollection(collection);
    answerListApplyListener();
// });