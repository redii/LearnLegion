var count = 0;

function showDiv(id) {
    if(document.getElementById(id).style.display=='none') {
      document.getElementById(id).style.display='block';
    }
}

function hideUnitSelect() {
    if(document.getElementById('mm-unit-selection').style.display=='block') {
        document.getElementById('mm-unit-selection').style.display='none';
      }
}

function incProgress(percentage) {
    document.getElementById('progress-bar').style.width = percentage;
}

function countChecks(id) {
    console.log(document.getElementById(id));
    if (count <= 3) {
        count += 1;
    } else {
        console.log(document.name.checked);
        document.getElementById(id).checked = false;
    }
}

function test() {
    alert(test);
}
