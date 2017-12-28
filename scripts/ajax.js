function showDiv(id) {
    if(document.getElementById(id).style.display=='none') {
      document.getElementById(id).style.display='block';
    }
}

function incProgress(percentage) {
    p = document.getElementById('progress-bar').style.width.substr(0,2);
    p = parseInt(p) + percentage;
    p = p + '%';
    document.getElementById('progress-bar').style.width = p;
}