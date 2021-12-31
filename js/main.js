const searchEl = document.querySelector(".sub-menu__search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Logic... 이젠 돋보기를 눌러도 텍스트 칸이 잘 늘어난다! ㅎㅎ
  searchInputEl.focus();
});

// input요소가 focused되면 class="focused" 추가!
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // input요소에 입력할, html속성인 placeholder를 추가해주겠다! 는 라인
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// input요소가 focused 해제되면 (blur), classList에서 class="focused" 제거!
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  // input요소에 입력할, html속성인 placeholder를 추가해주겠다! 는 라인
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
//window -> 브라우저에 열려있는 하나의 탭을 의미
// 브라우저 창이라고 보면 된다. 윈도우 객체. 브라우저가 갖고 있는 여러 명령들을 가지고 있음.
window.addEventListener("scroll", function () {
  console.log("scroll!");
})