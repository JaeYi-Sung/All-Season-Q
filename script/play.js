
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
