function initButton() {
    let javaQuit = [
        'quiz 1', 'quiz 2', 'quiz 3', 'quiz 4', 'quiz 5', 'quiz 6', 'quiz 7', 'quiz 8', 'quiz 9', 'quiz 10'
    ];

    for (let i = 0; i < javaQuit.length; i++) {
        let button = document.createElement('button');
        let a = document.createElement('a');
        let listTextNode = document.createTextNode(javaQuit[i]);
        button.className = 'btn btn-primary';
        button.appendChild(listTextNode);
        a.id = 'btnBasic' + i;
        a.appendChild(button);
        $('#basic').append(a);
    }

    $("#btnBasic0").attr("href", "quiz-1.html");
    for (let i = 0; i < javaQuit.length; i++) {
        let button = document.createElement('button');
        let a = document.createElement('a');
        let listTextNode = document.createTextNode(javaQuit[i]);
        button.className = 'btn btn-primary';
        button.appendChild(listTextNode);
        a.id = 'btnMedium' + i;
        a.appendChild(button);
        $('#medium').append(a);
    }

    $("#btnMedium0").attr("href", "quiz-2.html");
    for (i = 0; i < javaQuit.length; i++) {
        let button = document.createElement('button');
        let listTextNode = document.createTextNode(javaQuit[i]);
        button.className = 'btn btn-primary';
        button.appendChild(listTextNode);
        $('#advance').append(button);
    }
}

initButton();