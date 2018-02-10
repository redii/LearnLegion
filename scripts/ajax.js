// FUNCTIONS TO HIDE/SHOW DIV
function showDiv(id) {
    if(document.getElementById(id).style.display=='none') {
      document.getElementById(id).style.display='block'
    }
}

function hideDiv(id) {
    if(document.getElementById(id).style.display=='block') {
        document.getElementById(id).style.display='none'
    }
}

// FUNCTION TO DISMISS ALERT MESSAGE
function dismissAlert() {
    document.getElementById('alert').classList.add('dismiss-alert')
    document.getElementById('welcome').classList.add('dismiss-welcome')
}

// FUNCTION TO INCREASE PROGRESSBAR
function incProgress(j) {
    switch (j) {
        case 'class':
            document.getElementById('progress-bar').style.width = '50%'
            break
        case 'class-mm':
            document.getElementById('progress-bar').style.width = '20%'
            break
        }
}

// COUNT CHECKS FOR MM-SELECT (FORM2)   getUnits(1)
function countChecks(j) {
    var total = 0
    for(var i=0; i < document.form2.checkb.length; i++) {
        if(document.form2.checkb[i].checked) {
            total = total + 1
        }
        if(total > 6) {
            document.form2.checkb[j].checked = ''
            return false
        }
    }
    switch (total) {
        case 1:
            document.getElementById('progress-bar').style.width = '27%'
            break
        case 2:
            document.getElementById('progress-bar').style.width = '36%'
            break
        case 3:
            document.getElementById('progress-bar').style.width = '42%'
            break
        case 4:
            document.getElementById('progress-bar').style.width = '48%'
            break
        case 5:
            document.getElementById('progress-bar').style.width = '55%'
            break
        case 6:
            document.getElementById('progress-bar').style.width = '61%'
            showDiv('enemy-class-selection')
            showDiv('result-div')
            break
    }
}

// COUNT CHECKS FOR ENEMY-SELECT (FORM3)   getUnits(2)
function countChecks2(j) {
    var total = 0
    for(var i=0; i < document.form3.checkb2.length; i++) {
        if(document.form3.checkb2[i].checked) {
            total = total + 1
        }
        if(total > 6) {
            document.form3.checkb2[j].checked = ''
            return false
        }
    }
    switch (total) {
        case 1:
            document.getElementById('progress-bar').style.width = '68%'
            break
        case 2:
            document.getElementById('progress-bar').style.width = '74%'
            break
        case 3:
            document.getElementById('progress-bar').style.width = '81%'
            break
        case 4:
            document.getElementById('progress-bar').style.width = '87%'
            break
        case 5:
            document.getElementById('progress-bar').style.width = '94%'
            break
        case 6:
            document.getElementById('progress-bar').style.width = '100%'
            break
    }
}

// 1. Show all strong Mercs for this Round 2. Highlight those which are especially strong against your enemy units