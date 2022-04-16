var swiper = new Swiper(".mySwiper", {
    slidesOffsetBefore: 16,             // 슬라이드 시작 부분 여백
    slidesPerView: 'auto',              // 한슬라이드에 보여줄 갯수
    spaceBetween: 8,                    // 슬라이드 사이 여백 - margin값
    freeMode: true,                     // 슬라이드 넘길 대 위치 고정 여부
    pagination: {                       // 페이저 버튼 사용자 설정
      el: ".swiper-pagination",         // 페이저 버튼을 담을 태그
      clickable: true,                  // 버튼 클릭 여부
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',              // 한슬라이드에 보여줄 갯수
    pagination: {                       // 페이저 버튼 사용자 설정
      el: ".swiper-pagination",         // 페이저 버튼을 담을 태그
      clickable: true,                  // 버튼 클릭 여부
    },
    spaceBetween: 0,
    autoplay:{
      delay:1000,
    }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesOffsetBefore: 16,             // 슬라이드 시작 부분 여백
    slidesPerView: 'auto',              // 한슬라이드에 보여줄 갯수
    spaceBetween: 8,                    // 슬라이드 사이 여백 - margin값
    freeMode: true,                     // 슬라이드 넘길 대 위치 고정 여부
    pagination: {                       // 페이저 버튼 사용자 설정
      el: ".swiper-pagination",         // 페이저 버튼을 담을 태그
      clickable: true,                  // 버튼 클릭 여부
    }
  });


// $(".swiper-slide").removeAttr("style");

// var test = document.getElementsByClassName("swiper-slide");
// test.style.width=null;