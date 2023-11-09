
const Season = document.querySelector("html").dataset.season;

//🎧 Audio Variables
const spring = document.getElementById("SpringSong");
const summer = document.getElementById("SummerSong");
const fall = document.getElementById("FallSong");
const winter = document.getElementById("WinterSong");

//🎧 Audio Variables
const spring4 = document.getElementById("Spring4");
const summer4 = document.getElementById("Summer4");
const fall4 = document.getElementById("Fall4");
const winter4 = document.getElementById("Winter4");

//✅ Check Is Play
var is_play1 = false;
var is_play2 = false;
var is_play3 = false;
var is_play4 = false;

var is_play5 = false;
var is_play6 = false;
var is_play7 = false;
var is_play8 = false;

console.log("play 실행");

var tempPlay = 0;


//가을
document.querySelector(".FallPlay").addEventListener("click", function()
{

    console.log("안녕 가을아 재생");

     //🚨 이미 켜져 있으면 끄기
     if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    else{
        if(is_play1){
            spring.pause();
            is_play1 = false;
        }

        if(is_play2){
            summer.pause();
            is_play2 = false;
        }

        if(is_play4){
            winter.pause();
            is_play4 = false;
        }

        if(is_play5){
            spring4.pause();
            is_play5 = false;
        }

        if(is_play6){
            summer4.pause();
            is_play6 = false;
        }

        if(is_play7){
            fall4.pause();
            is_play7 = false;
        }

        if(is_play8){
            winter4.pause();
            is_play8 = false;
        }

        fall.loop = true;
        fall.play();
        is_play3 = true;
    }
    
});

document.querySelector(".FallFour").addEventListener("click", function()
{
    console.log("가을 겨울 봄 여름");

     //🚨 이미 켜져 있으면 끄기
     if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    else{

        if(is_play1){
            spring.pause();
            is_play1 = false;
        }

        if(is_play2){
            summer.pause();
            is_play2 = false;
        }

        if(is_play3){
            fall.pause();
            is_play3 = false;
        }

        if(is_play4){
            winter.pause();
            is_play4 = false;
        }

        if(is_play5){
            spring4.pause();
            is_play5 = false;
        }

        if(is_play6){
            summer4.pause();
            is_play6 = false;
        }

        if(is_play8){
            winter4.pause();
            is_play8 = false;
        }

        fall4.loop = true;
        fall4.play();
        is_play7 = true;
    }

    
});


fall.addEventListener("pause", function() {
    is_play3 = false;
});

fall.addEventListener("play", function() {
    is_play3 = true;
});

fall.addEventListener("ended", function(){
    is_play3 = false;
});

fall4.addEventListener("pause", function() {
    is_play7 = false;
});

fall4.addEventListener("play", function() {
    is_play7 = true;
});

fall4.addEventListener("ended", function(){
    is_play7 = false;
});



//여름
document.querySelector(".SummerPlay").addEventListener("click", function(){

    console.log("여름밤 재생");

    //🚨 이미 켜져 있으면 끄기
    if(is_play2){
       summer.pause();
       is_play2 = false;
   }

   else{

    if(is_play1){
        spring.pause();
        is_play1 = false;
    }

    // if(is_play2){
    //     summer.pause();
    //     is_play2 = false;
    // }

    if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    if(is_play4){
        winter.pause();
        is_play4 = false;
    }

    if(is_play5){
        spring4.pause();
        is_play5 = false;
    }

    if(is_play6){
        summer4.pause();
        is_play6 = false;
    }

    if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    if(is_play8){
        winter4.pause();
        is_play8 = false;
    }

       summer.loop = true;
       summer.play();
       is_play2 = true;
   }

});

document.querySelector(".SummerFour").addEventListener("click", function(){

    console.log("여름 가을 겨울 봄");

    //🚨 이미 켜져 있으면 끄기
    if(is_play6){
       summer4.pause();
       is_play6 = false;
   }

   else{

    if(is_play1){
        spring.pause();
        is_play1 = false;
    }

    if(is_play2){
        summer.pause();
        is_play2 = false;
    }

    if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    if(is_play4){
        winter.pause();
        is_play4 = false;
    }

    if(is_play5){
        spring4.pause();
        is_play5 = false;
    }

    // if(is_play6){
    //     summer4.pause();
    //     is_play6 = false;
    // }

    if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    if(is_play8){
        winter4.pause();
        is_play8 = false;
    }

    summer4.loop = true;
    summer4.play();
    is_play6 = true;

   }

});

summer.addEventListener("pause", function() {
    is_play2 = false;
});

summer.addEventListener("play", function() {
    is_play2 = true;
});

summer.addEventListener("ended", function(){
    is_play2 = false;
});

summer4.addEventListener("pause", function() {
    is_play6 = false;
});

summer4.addEventListener("play", function() {
    is_play6 = true;
});

summer4.addEventListener("ended", function(){
    is_play6 = false;
});

//봄
document.querySelector(".SpringPlay").addEventListener("click", function(){

    console.log("여름밤 재생");

    //🚨 이미 켜져 있으면 끄기
    if(is_play1){
       spring.pause();
       is_play1 = false;
   }

   else{

    // if(is_play1){
    //     spring.pause();
    //     is_play1 = false;
    // }

    if(is_play2){
        summer.pause();
        is_play2 = false;
    }

    if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    if(is_play4){
        winter.pause();
        is_play4 = false;
    }

    if(is_play5){
        spring4.pause();
        is_play5 = false;
    }

    if(is_play6){
        summer4.pause();
        is_play6 = false;
    }

    if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    if(is_play8){
        winter4.pause();
        is_play8 = false;
    }
        
       spring.loop = true;
       spring.play();
       is_play1 = true;
   }

});

document.querySelector(".SpringFour").addEventListener("click", function(){

    console.log("봄 여름 가을 겨울");

    //🚨 이미 켜져 있으면 끄기
    if(is_play5){
       spring4.pause();
       is_play5 = false;
   }

   else{

    if(is_play1){
        spring.pause();
        is_play1 = false;
    }

    if(is_play2){
        summer.pause();
        is_play2 = false;
    }

    if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    if(is_play4){
        winter.pause();
        is_play4 = false;
    }

    // if(is_play5){
    //     spring4.pause();
    //     is_play5 = false;
    // }

    if(is_play6){
        summer4.pause();
        is_play6 = false;
    }

    if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    if(is_play8){
        winter4.pause();
        is_play8 = false;
    }

       spring4.loop = true;
       spring4.play();
       is_play5 = true;
   }

});

spring.addEventListener("pause", function() {
    is_play1 = false;
});

spring.addEventListener("play", function() {
    is_play1 = true;
});

spring.addEventListener("ended", function(){
    is_play1 = false;
});

spring4.addEventListener("pause", function() {
    is_play5 = false;
});

spring4.addEventListener("play", function() {
    is_play5 = true;
});

spring4.addEventListener("ended", function(){
    is_play5 = false;
});


//겨울
document.querySelector(".WinterPlay").addEventListener("click", function(){

    console.log("청춘 재생");

    //🚨 이미 켜져 있으면 끄기
    if(is_play4){
       winter.pause();
       is_play4 = false;
   }

   else{

    if(is_play1){
        spring.pause();
        is_play1 = false;
    }

    if(is_play2){
        summer.pause();
        is_play2 = false;
    }

    if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    // if(is_play4){
    //     winter.pause();
    //     is_play4 = false;
    // }

    if(is_play5){
        spring4.pause();
        is_play5 = false;
    }

    if(is_play6){
        summer4.pause();
        is_play6 = false;
    }

    if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    if(is_play8){
        winter4.pause();
        is_play8 = false;
    }

       winter.loop = true;
       winter.play();
       is_play4 = true;
   }

});

document.querySelector(".WinterFour").addEventListener("click", function(){

    console.log("겨울 봄 여름 가을");

    //🚨 이미 켜져 있으면 끄기
    if(is_play8){
       winter4.pause();
       is_play8 = false;
   }

   else{

    if(is_play1){
        spring.pause();
        is_play1 = false;
    }

    if(is_play2){
        summer.pause();
        is_play2 = false;
    }

    if(is_play3){
        fall.pause();
        is_play3 = false;
    }

    if(is_play4){
        winter.pause();
        is_play4 = false;
    }

    if(is_play5){
        spring4.pause();
        is_play5 = false;
    }

    if(is_play6){
        summer4.pause();
        is_play6 = false;
    }

    if(is_play7){
        fall4.pause();
        is_play7 = false;
    }

    // if(is_play8){
    //     winter4.pause();
    //     is_play8 = false;
    // }

       winter4.loop = true;
       winter4.play();
       is_play8 = true;
   }

});

winter.addEventListener("pause", function() {
    is_play4 = false;
});

winter.addEventListener("play", function() {
    is_play4 = true;
});

winter.addEventListener("ended", function(){
    is_play4 = false;
});

winter4.addEventListener("pause", function() {
    is_play8 = false;
});

winter4.addEventListener("play", function() {
    is_play8 = true;
});

winter4.addEventListener("ended", function(){
    is_play8 = false;
});