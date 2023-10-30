
//const body = document.querySelector("body");

//const tempSeason = document.querySelector("html").dataset.season;
//console.log(tempSeason);
var tempSeason;

document.querySelector("html").addEventListener("input", function(){

  tempSeason = document.querySelector("html").dataset.season;
  console.log(tempSeason);

});

//별 생성
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


if(tempSeason == "Summer"){

  makeStar();

for (let index = 0; index < 200; index++) {
  makeStar();
}

}

