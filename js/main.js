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
window.addEventListener("scroll", _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 웹사이트 만들 때 gsap의 에니메이션 효과는 많이 쓴다고 함
    // 뱃지 숨기기
    // 선택한 badgeEl에 style 속성을 사용할 수 있음. 현재 display: none을 적용한 상태!
    // gsap에서 제공하는 에니메이션 처리 방법
    // gsap.to(요소, 지속시간, 옵션);
    // 그러나 시각적으로만 사라진 것이고 실제로는 그대로 있다.
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none"
    });
  }
  else {
    // 뱃지 보여주기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block"
    });
  }
}, 300)); //0.3초. 300ms
// _.throttle(함수, 시간) => 함수에 쓰로틀링 건다는 느낌.


// fade-in 요소 4개임.
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 몇 초 뒤에 실행될 것인지!
    // 처음 index는 0 이니까. 
    // 갈 수록 서서히 나타나는 효과를 주고 싶은 것이기 때문에...
    delay: (index + 1) * .7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .mySwiper", {
  direction: "vertical",
  autoplay: true,
  //반복재생 여부!
  loop: true,
});


new Swiper(".promotion .mySwiper", {
  slidesPerView: 3, // 한번에 보여 줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기!
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

// javascript에선 클래스 추가, 제거 정도로만 제어해서, 
// 애니메이션이 보이고, 없어지고 하는 건 css가 해결할 수 있도록 해주는 것이 좋음!
// transition 같은거는 css가... 
// 조금 복잡할 수 있는 것들은 gsap으로 해결해야 겠지만...서도...

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 프로모션 영역을 숨김 처리!
    promotionEl.classList.add("hide");
  }
  else {
    // 프로모션 영역 보이게 처리!
    promotionEl.classList.remove("hide");
  }
})