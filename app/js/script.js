$(document).ready(function () {
    $( "#LH1" ).click(function() { $( "#LHU1" ).toggle( "slow" ); });
    $( "#LH2" ).click(function() { $( "#LHU2" ).toggle( "slow" ); });
    $( "#LH3" ).click(function() { $( "#LHU3" ).toggle( "slow" ); });
    function initProgram() {
        var program = new Array('C/C++', 'C#', 'Java', 'Spring', 'SQL', 'Laravel');
        for (i = 0; i < program.length; i++) {
            // create list
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action waves-effect subject';
            let listTextNode = document.createTextNode(program[i])
            li.appendChild(listTextNode)
            // create a
            let a = document.createElement('a');
            a.id='program'+i;
            a.appendChild(li);
            // create ul
            let ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush'
            ul.appendChild(a);
            // append ul
            $('#LHU1 > .card-block').append(ul);
        }
        $("#program2").attr("href", "java-category.html");
    }
    function initWeb() {
        var web = new Array('HTML', 'CSS', 'JavaScript', 'JQuery', 'Laravel');
        for (i = 0; i < web.length; i++) {
            // create list
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action waves-effect subject';
            let listTextNode = document.createTextNode(web[i])
            li.appendChild(listTextNode)
            // create a
            let a = document.createElement('a');
            a.appendChild(li);
            // create ul
            let ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush'
            ul.appendChild(a);
            // append ul
            $('#LHU2 > .card-block').append(ul);
        }
    }
    function initExam() {
        var exam = new Array('C/C++', 'C#', 'Java', 'HTML', 'CSS', 'JavaScript');
        for (i = 0; i < exam.length; i++) {
            // create list
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action waves-effect subject';
            let listTextNode = document.createTextNode(exam[i])
            li.appendChild(listTextNode)
            // create a
            let a = document.createElement('a');
            a.appendChild(li);
            // create ul
            let ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush'
            ul.appendChild(a);
            // append ul
            $('#LHU3 > .card-block').append(ul);
        }
    }
    // $('input[type="checkbox"]').attr("checked", "checked");
    // $('#program0').
    initProgram();
    initWeb();
    initExam();
})