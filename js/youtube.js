// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 여기서 "player"는 html에서 정의한 
  // <div id="player"></div>를 의미한다.
  // 이 id를 찾게 됨.
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    // 영상을 재생하기 위한 여러가지 변수들
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8" // 반복 재생하기 위해서는 playlist에 id를 또 넣어줘야 함
    },
    events: {
      // 동영상이 재생되는 상황 자체를 데이터로서 event 인자에 넣어서 함수를 
      // 실행시킨다는 개념.
      onReady: function (event) {
        // target은 지금 재생되고 있는 영상을 의미
        event.target.mute() // 음소거
      }
    }
  });
}