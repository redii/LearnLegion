var count = 0;

function showDiv(id) {
    if(document.getElementById(id).style.display=='none') {
      document.getElementById(id).style.display='block';
    }
}

function hideDiv(id) {
    if(document.getElementById(id).style.display=='block') {
        document.getElementById(id).style.display='none';
    }
}

function incProgress(percentage) {
    document.getElementById('progress-bar').style.width = percentage;
}

// countChecks() for form2
function countChecks(j) {
    var total = 0;
    for(var i=0; i < document.form2.checkb.length; i++) {
        if(document.form2.checkb[i].checked) {
            total = total + 1;
        }
        if(total > 6) {
            document.form2.checkb[j].checked = '';
            return false;
        }
    }
    if(total == 6) {
        showDiv('enemy-class-selection');
        showDiv('result-div');
    }
}

// countChecks2() for form3
function countChecks2(j) {
    var total = 0;
    for(var i=0; i < document.form3.checkb.length; i++) {
        if(document.form3.checkb[i].checked) {
            total = total + 1;
        }
        if(total > 6) {
            document.form3.checkb[j].checked = '';
            return false;
        }
    }
}

function test() {
    alert(test);
}
