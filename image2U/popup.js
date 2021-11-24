//Welcome Message
var msg1 = new SpeechSynthesisUtterance("control키를 사용하여 extension을 시작하세요");
window.speechSynthesis.speak(msg1);

//mouse event
document.getElementById("myBtn").onclick = function () { displaytext() };

function displaytext() {
    if (document.getElementById("myBtn").innerHTML == 'End') {
        document.getElementById("myBtn").innerHTML = 'Start';
        var msg = new SpeechSynthesisUtterance("control키를 사용하여 extension을 시작하세요");
        window.speechSynthesis.speak(msg);
        document.getElementById("result").innerHTML = '';
    }
    else{
        document.getElementById("myBtn").innerHTML = 'End';
        var msg1 = new SpeechSynthesisUtterance("extension이 작동 중입니다. 웹 페이지를 사용하세요");
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
                var msg = new SpeechSynthesisUtterance("control키를 사용하여 extension을 시작하세요");
                window.speechSynthesis.speak(msg);
                document.getElementById("result").innerHTML = '';
            }
            else {
                document.getElementById("myBtn").innerHTML = 'End';
                var msg1 = new SpeechSynthesisUtterance("결과 출력 중입니다. 잠시만 기다려주세요.");
                var msg_result = new SpeechSynthesisUtterance("Read the result.");
                window.speechSynthesis.speak(msg1);

                window.speechSynthesis.speak(msg_result);
                document.getElementById("result").innerHTML = 'Show results...';
            }

    }
}



///////////////////////////////////////////////////////
