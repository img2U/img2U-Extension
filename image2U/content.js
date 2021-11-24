//content.js

// Test if extension works on chrome webpage
// console.log("정상작동!");

$(document).ready( function () {
    // 여기서 keyup -> 현재 Tab키 읽기
    // keydown -> 직전 Tab키 읽기

    $("*:not(body)").keyup(function(ev){
        //alert(ev.keyCode);
        //console.log($(this));

        $(".highlight").removeClass("highlight");

        $(this).addClass("highlight");

        console.log($(this).find("img").attr("src"));
        ev.stopPropagation();

        if(ev.keyCode==9){ //Tab
            if ($(this).attr('alt') ) { 
                var alttext = $(this).attr("alt");
                //alert($(this).attr("alt"));
                speechSynthesis.cancel();
                speechSynthesis.speak(new SpeechSynthesisUtterance(alttext));
            }
            else if ($(this).find("img").attr("src") ) {

                /////////////////////////////
                // call API to get caption
                /////////////////////////////
                var imgurl=$(this).find("img").prop("src");
                var url="http://localhost:8888/?img="+imgurl;
                // GET CAPTION FROM API
                fetch (url,{mode: 'cors'})
                    .then(response => response.json())
                    .then((json) => {
                      var caption='이미지 입니다.'+json['message']['result']['translatedText'];
                      speechSynthesis.cancel();
                      speechSynthesis.speak(new SpeechSynthesisUtterance(caption));
                    })
                    .catch((error) => {
                      speechSynthesis.cancel();
                      speechSynthesis.speak(new SpeechSynthesisUtterance('캡션생성에 에러가 발생하였습니다. 다른 이미지를 시도해보세요.'));
                    });
            }

            // if not image, read text
            else {
                var elementToText = $(this).text();
                //alert( $(this).text());
                speechSynthesis.cancel();
                speechSynthesis.speak(new SpeechSynthesisUtterance(elementToText));
            }


    }
});
});


// /////////////////////////////////////////////////////////////////////////////////////////////

//// CONTROL THE WEB PAGE BY A BOX USING MOUSE

// // Ensure that the web page has fully loaded and is ready for scripts
// $(document).ready( function () {
//     // Once web page is loaded: indicate when the mouse hovers over the elements on the page:
//     // Attach this hover event for all the DOM elements on the page, except the body */
//     $("*:not(body)").hover(
//         /* Call this function on element when mouse hovers over */
//         function (ev) {
//             $(".highlight").removeClass("highlight");
//             // add red border to the element from css highlight
//             $(this).addClass("highlight");
//             // only want the first element to trigger the outline
//             ev.stopPropagation();

//             // var msg = $(".highlight").text();
//             var read=new SpeechSynthesisUtterance($(".highlight").text());
//             // var read=new SpeechSynthesisUtterance("hello");
            
//             speechSynthesis.speak(read);
//             // speechSynthesis.cancel();
//               // read element content only when a key is pressed
//             $(".highlight").keydown(function (e) {

//                 // Prevent page from moving when spacebar is pressed
//                 e.preventDefault(); // using prevent default to take over spacebar
//                 // alert("run!!");

//                 // if spacebar is pressed, produce speech
//                 if (e.keyCode == 0 || e.keyCode == 32) {
//                     // if image, read alt text if available
//                     if ( $(".highlight").attr('alt') ) { 
//                         var alttext = $(".highlight").attr("alt");
//                         speechSynthesis.speak(new SpeechSynthesisUtterance(alttext));
//                     }
//                     // if image, read source if alt text is NOT available
//                     else if ( $(".highlight").attr('src') ) { 
//                         var srcofimg = $(".highlight").attr("src");
//                         speechSynthesis.speak(new SpeechSynthesisUtterance(srcofimg));
//                     }
//                     // if not image, read text
//                     else {
//                         var elementToText = $(".highlight").text();
//                         window.speechSynthesis.speak(new SpeechSynthesisUtterance(elementToText));
//                     }
//                 }
//             });
//         },

//         /* Call this function on element when mouse STOP hovering over */
//         function (ev) {
//             // remove red-border highlight from the element
//             $(this).removeClass("highlight");
//             // stop producing speech
//             speechSynthesis.cancel();
//         }
//     )

// });
