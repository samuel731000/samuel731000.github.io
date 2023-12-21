/*
Full version:
https://henryegloff.com/kaleidotext/

Info:
https://henryegloff.com/kaleidotext-app/

*/

var elements = document.querySelectorAll(".animation");

anime({
    targets: ".animation",
    rotate: "1turn",
    easing: "linear",
    loop: true,
    duration: 3000
});

setTimeout(function(){
    $('body').fadeOut(500);
    setTimeout(function(){
        window.location = 'page html'
    },500) 
    
},2000)    