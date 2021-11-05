window.onload = function(){
    window.onkeypress=function(e){
        if(e.charCode == 39){
            alert('Right click')
        }
    }
}
document.getElementById("myBtn").onclick = function () { displaytext() };

function displaytext() {
    if (document.getElementById("myBtn").innerHTML == 'Start') {
        document.getElementById("myBtn").innerHTML = 'End';
        var msg = new SpeechSynthesisUtterance("The result is being output. Please click or use keyboard to end");
        window.speechSynthesis.speak(msg);
        document.getElementById("result").innerHTML = 'Show results...';
    }
    else{
        document.getElementById("myBtn").innerHTML = 'Start';
        var msg1 = new SpeechSynthesisUtterance("Please click or use keyboard to start");
        window.speechSynthesis.speak(msg1);
        document.getElementById("result").innerHTML = '';
    }
   
}
/* Keyboard:
document.getElementById1("myBtn").onkeypress = function () { displaytext1() };
function displaytext1(evt) {
    if (evt.charCode == 70) {
        document.getElementById1("myBtn").innerHTML = 'click or use keyboard to end';
    }
}*/