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
window.addEventListener(
  "scroll",
  _.throttle(function () {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 웹사이트 만들 때 gsap의 에니메이션 효과는 많이 쓴다고 함
      // 뱃지 숨기기
      // 선택한 badgeEl에 style 속성을 사용할 수 있음. 현재 display: none을 적용한 상태!
      // gsap에서 제공하는 에니메이션 처리 방법
      // gsap.to(요소, 지속시간, 옵션);
      // 그러나 시각적으로만 사라진 것이고 실제로는 그대로 있다.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기!
      gsap.to("#to-top", 0.2, {
        x: 0, // 버튼이 오른쪽으로 이동할 수 있도록!
      });
    } else {
      // 뱃지 보여주기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기!
      gsap.to("#to-top", 0.2, {
        x: 100, // 버튼이 오른쪽으로 이동할 수 있도록!
      });
    }
  }, 300)
); //0.3초. 300ms
// _.throttle(함수, 시간) => 함수에 쓰로틀링 건다는 느낌.

// fade-in 요소 4개임.

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  // window객체는 페이지가 출력되고 있는 화면 자체. viewport.
  gsap.to(window, 0.7, {
    // 0.7초 동안 0의 위치로 가겠다.
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 몇 초 뒤에 실행될 것인지!
    // 처음 index는 0 이니까.
    // 갈 수록 서서히 나타나는 효과를 주고 싶은 것이기 때문에...
    delay: (index + 1) * 0.7,
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
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .mySwiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
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
  } else {
    // 프로모션 영역 보이게 처리!
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 에니메이션 다시 재생
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  // Scene => ScrollMagic이라고 하는 Javascript Library를 통해 특정 요소를 감시하는 option을 지정해 주는 요소
  // setClassToggle => html class 속성을 넣었다 뺐다 하는 역할을 함.
  // ScrollMagic 라이브러리가 필요한 controller라는 개념의 내용을 추가하기 위해 addTo()가 필요한 것(?).
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // ScrollMagic 라이브러리는 viewport를 위(0)에서 시작해서 밑(1)에서 끝난다고 판단함
    // 만약 내가 감시하려는 요소가 .8이라는 viewport지점에 걸리면 특정 내용이 실행이 된다는 이야기.
    // triggerHook : 내가 감시하는 요소가 viewport의 어떤지점에서 감시되었는가를 판단할 것인가라는 지정해주는 옵션
    // 이 감시하는 옵션을 통해 해당 요소가 화면에 보여진다고 판단이 되면, setClassToggle()을 실행.
  })
    // setClassToggle에는 인수를 2개 적어줄 수 있다.
    // 1: class를 toggle할 요소
    // 2: toggle할 클래스
    .setClassToggle(spyEl, "show")
    // 내부의 controller에 내용을 할당해서 실제 동작할 수 있는 구조로 만들어주는 것.
    // 내부로직을 알지 못하면 이해하기 난해하지만... 일반적으로 외부에서 가져와 사용하는 js 라이브러리 들은 평소 구현하기
    // 매우 어려운 부분들임.
    // 시간을 들여 해당 내용을 충분히 이해하면 좋겠지만 대부분 그런 환경이 아니기 때문에, 최대한 라이브러리 문서에서 말하는대로 진행하는게 좋음.
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
