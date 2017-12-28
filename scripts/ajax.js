function showDiv(id) {
    if(document.getElementById(id).style.display=='none') {
      document.getElementById(id).style.display='block';
    }
}

function incProgress(percentage) {
    document.getElementById('progress-bar').style.width = percentage;
}