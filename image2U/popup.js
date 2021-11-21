//Welcome Message
var msg1 = new SpeechSynthesisUtterance("Now you can start to convert image to text! Please click or use the ctrl key to start.");
window.speechSynthesis.speak(msg1);

//mouse event
document.getElementById("myBtn").onclick = function () { displaytext() };

function displaytext() {
    if (document.getElementById("myBtn").innerHTML == 'End') {
        document.getElementById("myBtn").innerHTML = 'Start';
        var msg = new SpeechSynthesisUtterance("Please click or use the ctrl key to start.");
        window.speechSynthesis.speak(msg);
        document.getElementById("result").innerHTML = '';
    }
    else{
        document.getElementById("myBtn").innerHTML = 'End';
        var msg1 = new SpeechSynthesisUtterance("The result is being output. Please click or use the ctrl key to end.");
        var msg_result = new SpeechSynthesisUtterance("Read the result.");
        window.speechSynthesis.speak(msg1);

        window.speechSynthesis.speak(msg_result);
        document.getElementById("result").innerHTML = 'Show results...';
    }
   
}

//keyboard event
document.addEventListener("keydown", keydown);
//Parameter 1: Indicates the event, keydown: Press down on the keyboard; 
//Parameter 2: Indicates the event to be triggered


function keydown(event) {
    switch (event.keyCode) {
        case 17:
            if (document.getElementById("myBtn").innerHTML == 'End') {
                document.getElementById("myBtn").innerHTML = 'Start';
                var msg = new SpeechSynthesisUtterance("Please click or use the ctrl key to start.");
                window.speechSynthesis.speak(msg);
                document.getElementById("result").innerHTML = '';
            }
            else {
                document.getElementById("myBtn").innerHTML = 'End';
                var msg1 = new SpeechSynthesisUtterance("The result is being output. Please click or use the ctrl key to end.");
                var msg_result = new SpeechSynthesisUtterance("Read the result.");
                window.speechSynthesis.speak(msg1);

                window.speechSynthesis.speak(msg_result);
                document.getElementById("result").innerHTML = 'Show results...';
            }

    }
}
