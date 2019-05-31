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
var proID = '2019001';
var proBirthdate = '2019-05-30';
var proFirstName = 'Four';
var proSurName = 'Group';
var proGender = 'Other';
var proEmail = 'group_four@kshrd.com';
/* End Fixing */

const addRecord = (subjects, dates, scores, durings, quizs)=>{
    record.push({
        subject: subjects,
        date: dates,//new Date().toLocaleDateString() + ' : ' + new Date().getHours() + ':' + new Date().getMinutes(),
        score: scores,
        during: durings,
        quizN: quizs
    })
}

// addRecord('HTML',new Date(),'20/20','10s','Quiz 1')
// addRecord('HTML',new Date(),'20/20','10s','Quiz 1')
// addRecord('HTML',new Date(),'20/20','10s','Quiz 1')
// addRecord('HTML',new Date(),'20/20','10s','Quiz 1')