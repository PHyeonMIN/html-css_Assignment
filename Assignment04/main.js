// 게시물 동영상 태그됨 탭 변경
const modal = document.querySelector(".modal");
const tabChange = (index) => {
  const liOne = document.getElementsByClassName("tab")[0];
  const liTwo = document.getElementsByClassName("tab")[1];
  const liThree = document.getElementsByClassName("tab")[2];

  const tab1 = document.getElementsByClassName("tab1")[0];
  const tab2 = document.getElementsByClassName("tab2")[0];
  const tab3 = document.getElementsByClassName("tab3")[0];

  if (index == 0) {
    liOne.className = "tab active";
    liTwo.className = "tab";

    tab1.style.display = "flex";
    tab2.style.display = "none";
  } else if (index == 1) {
    liOne.className = "tab";
    liTwo.className = "tab active";

    tab1.style.display = "none";
    tab2.style.display = "flex";
  } else if (index == 2) {
    liThree.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }
};

// 모달 버튼

const overlay = document.querySelector(".modalOverlay");
const closeModal = document.querySelector(".closeIcon");

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 창의 너비
const windowWidth = window.matchMedia("screen and (max-width: 740px)");
if (windowWidth.matches) {
    // tab 글자 없애기
    // const tab = document.querySelectorAll('.tab span');
    // for(let i = 0; i<tab.length ; i++){
    //     tab[i].innerHTML='';
    // }

    // profile dom 구조 바꾸기
    const profileInfoNum = document.querySelector(".profileInfoNum");
    const profileIntro = document.querySelector(".profileIntro");

    // 요소 추가
    const profileIntro2 = document.querySelector('.profileIntro2');
    profileIntro2.innerHTML += profileIntro.innerHTML;

    const profileInfoNum2 = document.querySelector('.profileInfoNum2');
    profileInfoNum2.innerHTML += profileInfoNum.innerHTML;
}

// 화면 사이즈 변경마다 새로고침
window.onresize =  () => {
  document.location.reload();
};
