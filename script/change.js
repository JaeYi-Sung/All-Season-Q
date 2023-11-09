
let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
const body = document.querySelector("body");

//let month = 12;
//var tempSeason;
console.log(month);

if( 3<=month && month<=5){
    document.querySelector("html").dataset.season="Spring";
}

else if (6<=month && month<=8){
    document.querySelector("html").dataset.season="Summer";
    isSummer();
}

else if (9<=month && month<=11){
    document.querySelector("html").dataset.season="Fall";
}

else{
    document.querySelector("html").dataset.season="Winter";
}

//Fall Move
document.querySelector(".FallToSpring").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Spring";
});

document.querySelector(".FallToSummer").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Summer";
    isSummer();
});

document.querySelector(".FallToWinter").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Winter";
});


//Summer Move
document.querySelector(".SummerToSpring").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Spring";
    isNotSummer();
    
});

document.querySelector(".SummerToFall").addEventListener("click", function(){
    console.log("Fall click")
    document.querySelector("html").dataset.season="Fall";
    isNotSummer();
    
});

document.querySelector(".SummerToWinter").addEventListener("click", function(){
    //console.log("winter click")
    document.querySelector("html").dataset.season="Winter";
    isNotSummer();
    
});

//Spring Move
document.querySelector(".SpringToSummer").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Summer";
    isSummer();
});

document.querySelector(".SpringToFall").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Fall";
});

document.querySelector(".SpringToWinter").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Winter";
});

//Winter Move
document.querySelector(".WinterToSummer").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Summer";
    isSummer();
});

document.querySelector(".WinterToFall").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Fall";
});

document.querySelector(".WinterToSpring").addEventListener("click", function(){
    document.querySelector("html").dataset.season="Spring";
});

//BackGround Effect
// const tempSeason = document.querySelector("html").dataset.season.addEventListener("change")
//console.log(tempSeason);

// //별 생성
const windowWidth = screen.width;
const windowHeight = screen.height;

function makeStar() {
  const star = document.createElement("div");

  const initialOpacity = Math.random() * 2/3 ; //투명도
  const duration = Math.random() * 100 ;  //반짝이는 시간
  const size = Math.random() * 3 + 0.5; //크기
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);


  star.classList.add("star");
  star.style.left = `${x}vw`;
  star.style.top = `${y}vh`;
  star.style.opacity = initialOpacity;
  star.style.animation = `twinkle ${duration}%`;
  star.style.boxShadow = `0px 0px 2px 2px #ffffff`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;


  body.appendChild(star);

}

function isSummer() {
    makeStar();

for (let index = 0; index < 250; index++) {
  makeStar();
}
}

function isNotSummer(){
    const stars = document.getElementsByClassName("star");
    while(stars.length > 0){
        body.removeChild(stars[0]);
    }
}

