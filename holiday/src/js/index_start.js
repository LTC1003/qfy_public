/*** 开启前的状态3秒钟内没500百毫秒切换一次雪花图。 ***/ 

/***** 音乐自动播放 *****/ 

$(document).ready(function(){
    autoPlayMusic();
    // audioAutoPlay();
});
// function audioAutoPlay(){
//     var player = document.getElementById('bg-music');
//     document.ontouchend = function() {
//         if(player.paused){
//             player.play();
//         } else{
//             player.pause();
//         }
//     }
// }

// 音乐播放
function autoPlayMusic() {
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        document.body.removeEventListener('touchend', musicInBrowserHandler);
        musicPlay(true);
    }
    document.body.addEventListener('touchend', musicInBrowserHandler);
    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        // musicPlay(true);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
    var media = document.querySelector('#bg-music');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}