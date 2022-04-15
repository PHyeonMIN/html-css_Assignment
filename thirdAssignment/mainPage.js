// var swiper = new Swiper(".mySwiper", {
//     slidesOffsetBefore: 16,             // 슬라이드 시작 부분 여백
//     slidesPerView: 'auto',              // 한슬라이드에 보여줄 갯수
//     spaceBetween: 8,                    // 슬라이드 사이 여백 - margin값
//     freeMode: true,                     // 슬라이드 넘길 대 위치 고정 여부
//     pagination: {                       // 페이저 버튼 사용자 설정
//       el: ".swiper-pagination",         // 페이저 버튼을 담을 태그
//       clickable: true,                  // 버튼 클릭 여부
//     },
//   });
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,
  },
  loop: true,
  loopAdditionalSlides: 1,
});

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  // autoplay:{
  //     delay:1000,
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  loop: true,
  loopAdditionalSlides: 1,
});

// 스크롤 이벤트-----------------------------------------------------------------------

document.addEventListener("scroll", () => {
  const currentScrollValue = document.documentElement.scrollTop;
  // console.log('currentScrollValue is ' + currentScrollValue);

  const header = document.getElementsByClassName("header")[0];

  if (currentScrollValue > 300) {
    header.className = "header fixed";
  } else {
    header.className = "header";
  }
});

// tab메뉴 이벤트 ---------------------------------------------------------
const tabMenuClick = document.getElementsByClassName("tabMenu");
const tabMenu = document.getElementsByClassName("headerInfo1");

for (let i = 0; i < tabMenuClick.length; i++) {
  
  tabMenuClick[i].addEventListener("mouseover", () => {
    tabMenu[i].style.display = "flex";
  });
  tabMenuClick[i].addEventListener("mouseout", () => {
    setTimeout(() => {
      tabMenu[i].style.display = "none";
    }, 500);
  });


};

for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener("mouseover", () => {
    this.style.display = "block";
  });
  tabMenu[i].addEventListener("mouseout", () => {
    this.style.display = "none";
  });
};

// 패럴렉스 스크롤 ( Parallax Scroll ) ------------------------------------------
document.addEventListener("scroll", () => {
  const currentScrollValue = document.documentElement.scrollTop;
  console.log('currentScrollValue is ' + currentScrollValue);

  const imgOne = document.getElementsByClassName("swiperImgOne")[0];
  if(currentScrollValue > 200){
    console.log(1);
    imgOne.style.transfrom = 'translate(-50%,-50%) rotate(0deg)';
  }else{

  };
});
