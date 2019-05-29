var totalSubject = 0;
var subRecord = []; //Record for each subject
var myStr; //Subject name
//
var record = []; //Total Record
//
//
/* Fixed Data */
var alertImageChange = 1;
var proPic = 'img/imgPro/bgPro.jpg';
var fileName = 'img/imgPro/bgPro.jpg';
var proID = '7th';
var proBirthdate = new Date().toLocaleDateString();
var proFirstName = 'G4';
var proSurName = 'HRD';
var proGender = 'Other';
var proEmail = 'example@ex.co';
/* End Fixing */
/* Use for generate data auto */
const initData = () => {
    for (let i = 0; i < 2; i++)
        record.push({
            subject: 'JS',
            date: new Date().toLocaleDateString() + ' : ' + new Date().getHours() + ':' + new Date().getMinutes(),
            score: '10/10',
            during: '20s',
            quizN: 'Quiz 1'
        })

    for (let i = 0; i < 3; i++)
        record.push({
            subject: 'HTML',
            date: new Date().toLocaleDateString() + ' : ' + new Date().getHours() + ':' + new Date().getMinutes(),
            score: '10/10',
            during: '20s',
            quizN: 'Quiz 1'
        })
    record.push({
        subject: 'CSS',
        date: new Date().toLocaleDateString() + ' : ' + new Date().getHours() + ':' + new Date().getMinutes(),
        score: '10/10',
        during: '20s',
        quizN: 'Quiz 1'
    })

}
/* Count Total Record */
const countRecord = () => {
    let str = '';
    if (record.length == 0) {
        console.log(0)
        totalSubject = 0;
    } else {
        //Sort Data ASC
        record.sort(
            (first, second) => {
                var x = first.subject.toLowerCase();
                var y = second.subject.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            }
        )
        //Make Data to each categories
        str = record[0].subject;
        subRecord.push(str);
        totalSubject = 1;
        for (let i = 0; i < record.length; i++) {
            if (str != record[i].subject) {
                totalSubject++;
                str = record[i].subject
                subRecord.push(str);
            }
        }

    }
}
/* Seperate Data to each category */
const seperateData = () => {
    if (totalSubject == 0) return;
    myStr = new Array(totalSubject);
    for (let n = 0; n < totalSubject; n++) {
        myStr[n] = [];
    }

    let st = 0;
    let str = '';
    str = record[st].subject;

    for (let n = 0; n < totalSubject; n++) {
        while (str.localeCompare(record[st].subject) == 0) {
            myStr[n].push(record[st]);
            st++;
            if (st == record.length) {
                break;
            }
        }
        if (st == record.length) {} else
            str = record[st].subject;
    }
}
/* Insert Data to each Row for any subject */
const insertRow = (subject, cusRecord) => {
    let str = '';

    for (let i = 0; i < cusRecord.length; i++)
        str += `
            <tr class="item-w-100">
                <td>${cusRecord[i].date}</td>
                <td>${cusRecord[i].score}</td>
                <td>${cusRecord[i].during}</td>
                <td><button><a href="${subject}/${cusRecord[i].quizN}">${cusRecord[i].quizN}</a></button></td>
            </tr>
        `
    return str;
}
/* Create a table for a subject */
const insertTable = (subject, cusRecord) => {
    $('#create-new-tbl').append(
        `<tr>
        <td colspan="4">
        <table class="tbl-item table table-striped table-bordered">
            <thead class="inner-tbl-head">
                <tr>
                    <th colspan="4">${subject}</th>
                </tr>
            </thead>
            <tbody class="inner-tbl-body">
                ${insertRow(subject,cusRecord)}
            </tbody>
        </table>
        </td>
        </tr>
    `
    )
}
/* Make big table */
const createTable = () => {
    countRecord();
    seperateData();
    if (totalSubject == 0) {
        console.log('Work');
        $('#start-up-tbl').alert("work")
        $('#start-up-tbl').html(
            `
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Score</th>
                        <th>During</th>
                        <th>Quiz</th>
                    </tr>
                </thead>
                <tbody id="create-new-tbl">
                    <tr>No Record</tr>
                </tbody>
        `
        );
        return
    } else

        for (let i = 0; i < totalSubject; i++) {
            insertTable(subRecord[i], myStr[i]);
        }
}
createTable();
// $('#pro-hover-change').hover(() => {
//     []
// })
/* Just clear record and generate a big table */
const clearBtn = () => {
    record = [];
    createTable();
}
/* Event Click on Btn Clear */
$('#pro-clear-history').click(() => {
    clearBtn();
})
/* Event Click on Btn Generate */
$('#pro-generate-data').click(() => {
    let str = [];
    if (record.length > 1) {
        str = record;
        console.log(str);
        clearBtn();
    }
    initData();
    record = record.concat(str);
    console.log(record);
    createTable();
})
/* Generate to Contact */
const uploadContact = () => {
    if (alertImageChange == 1) {
        $('input[type="file"]').val('');
    }
    document.getElementById("hover-pro-photo").setAttribute('src', proPic)
    $('#in-id-pro').val(proID).trigger("change");
    $('#in-birthdate-pro').val(proBirthdate).trigger("change");
    $('#in-first-name-pro').val(proFirstName).trigger("change");
    $('#in-surname-pro').val(proSurName).trigger("change");
    $('#in-gender-pro').val(proGender);
    $('#in-email-pro').val(proEmail).trigger("change");
    $('#profile-name').text(proSurName + ' ' + proFirstName);
};
/*  */
$('#pills-profile-tab').click(() => {
    document.getElementById("hover-pro-photo").setAttribute('src', proPic)
    $('#profile-name').text(proSurName + ' ' + proFirstName);

})
uploadContact();
/* Event Click Change when changing value */
$('#change-contact-value').click(() => {
    alert('changed')
    proPic = fileName;
    proID = $('#in-id-pro').val();
    proBirthdate = $('#in-birthdate-pro').val();
    proFirstName = $('#in-first-name-pro').val();
    proSurName = $('#in-surname-pro').val();
    proGender = $('#in-gender-pro').val();
    proEmail = $('#in-email-pro').val();
    alertImageChange = 0;
    $('#profile-name').text(proSurName + ' ' + proFirstName);
})
/* Changing Profile Image */
$('#hover-pro-photo').on({
    mouseenter: () => {
        $('#pro-hover-change').removeClass("createHid").addClass("cus-change centered");
        $('#pro-hover-change').on({
            mouseenter: () => {
                $('#pro-hover-change').removeClass("createHid").addClass("cus-change centered");
            },
            mouseleave: () => {
                $('#pro-hover-change').removeClass("cus-change centered").addClass("createHid");
            }
        })
    },
    mouseleave: () => {
        $('#pro-hover-change').removeClass("cus-change centered").addClass("createHid")
    }
})
/* Hover on Image Perform and Pick a picture */
$('input[type="file"]').change(function (e) {
    fileName = 'img/imgPro/' + e.target.files[0].name;
    console.log(document.getElementById("hover-pro-photo").setAttribute('src', fileName))
    alertImageChange = 1;
});