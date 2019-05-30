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
    let i = 4;
    if (validationString($('#in-first-name-pro').val()) == 0) {
        $($('#firstname-err')).css('display', 'inline');i--;
    }else{$($('#firstname-err')).css('display', 'none');}
    if (validationNumber($('#in-id-pro').val()) == 0) {
        $($('#id-err')).css('display', 'inline');i--;
    }else{$($('#id-err')).css('display', 'none');}
    if (validationString($('#in-surname-pro').val()) == 0) {
        $($('#surname-err')).css('display', 'inline')
        i--;
    }else{$($('#surname-err')).css('display', 'none');}
    if (validationEmail($('#in-email-pro').val()) == 0) {
        $($('#email-err')).css('display', 'inline')
        i--;
    }else{$($('#email-err')).css('display', 'none');}
    console.log(i);
    if (i >= 4) {
        $($('#firstname-err')).css('display', 'none')
        $($('#surname-err')).css('display', 'none')
        $($('#email-err')).css('display', 'none')
        $($('#id-err')).css('display', 'none')

        proPic = fileName;
        proID = $('#in-id-pro').val();
        proBirthdate = $('#in-birthdate-pro').val();
        proFirstName = $('#in-first-name-pro').val();
        proSurName = $('#in-surname-pro').val();
        proGender = $('#in-gender-pro').val();
        proEmail = $('#in-email-pro').val();
        alertImageChange = 0;
        // console.log(proBirthdate);
        $('#profile-name').text(proSurName + ' ' + proFirstName);
        myProfileNavBar();
        $.notify("Profile Updated", "success");
        // $.notify("Record has been updated successfully!", "success");
    } else {
        $.notify("Invalid Value", "fail");
    }
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

const validationString = (str) => {
    var patt = /[^a-z]/gi;
    if (str.match(patt) == null) {
        console.log("valid");
        return 1;
    } else {
        console.log("Invalid");
        //   alert("Invalid Value")
        return 0;
    }
}

const validationNumber = (phone) => {
    var patt = /[^0-9]/gi;
    // var i = 0;
    // if(phone[0] == 0) i = 1;
    if (phone.match(patt) == null) {
        return 1;
    } else {
        return 0;
    }
}

const validationEmail = (email) => {
    // var $email = $('form input[name="email'); //change form to id or containment selector
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (email == '' || !re.test(email)) {
        console.log("email no ")
        return 0;
    } else {
        console.log("Emial OK");
        return 1;
    }
}