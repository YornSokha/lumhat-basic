$(document).ready(function () {
    $("#topic_header_one").click(function () {
        $("#header_one_dropdown").toggle("slow");
    });

    $("#topic_header_two").click(function () {
        $("#header_two_dropdown").toggle("slow");
    });

    $("#topic_header_three").click(function () {
        $("#header_three_dropdown").toggle("slow");
    });

    function initProgram() {
        let topics = ['C/C++', 'C#', 'Java', 'Spring', 'SQL', 'Laravel'];
        for (let i = 0; i < topics.length; i++) {
            // create list
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action waves-effect subject';
            let listTextNode = document.createTextNode(topics[i]);
            li.appendChild(listTextNode);
            // create a tag
            let a = document.createElement('a');
            a.id = 'topic' + i;
            a.appendChild(li);
            // create ul
            let ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush';
            ul.appendChild(a);
            // append ul
            $('#header_one_dropdown > .card-block').append(ul);
        }
        $("#topic2").attr("href", "java-category.html");
    }

    function initWeb() {
        let web_topics = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Laravel'];
        for (let i = 0; i < web_topics.length; i++) {
            // create list
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action waves-effect subject';
            let listTextNode = document.createTextNode(web_topics[i]);
            li.appendChild(listTextNode);
            // create a tag
            let a = document.createElement('a');
            a.appendChild(li);
            // create ul
            let ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush';
            ul.appendChild(a);
            // append ul
            $('#header_two_dropdown > .card-block').append(ul);
        }
    }

    function initExam() {
        let exam_topcis = ['C/C++', 'C#', 'Java', 'HTML', 'CSS', 'JavaScript'];
        for (let i = 0; i < exam_topcis.length; i++) {
            // create list
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action waves-effect subject';
            let listTextNode = document.createTextNode(exam_topcis[i]);
            li.appendChild(listTextNode)
            // create a tag
            let a = document.createElement('a');
            a.appendChild(li);
            // create ul
            let ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush';
            ul.appendChild(a);
            // append ul
            $('#header_three_dropdown > .card-block').append(ul);
        }
    }
    // $('input[type="checkbox"]').attr("checked", "checked");
    // $('#program0').
    initProgram();
    initWeb();
    initExam();
});