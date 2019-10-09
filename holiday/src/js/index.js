/********************/ 
// 获取视口高度，包括滚动条
// window.innerHeight || document.documentElement.clientHeight;
// 获取文档高度 不包括滚动条
// document.documentElement.clientHeight
// document.documentElement.scrollHeight
$(document).ready(function(){
    viewHW();
});
function viewHW(viewH,viewW){   
    var vh = document.documentElement.scrollHeight;
    var vw = document.documentElement.scrollWidth;
    viewH = document.getElementById("tv-app").style.height = vh + "px";
    viewW = document.getElementById("tv-app").style.width = vw + "px";
}

// befroe,current,after (后加滑动)
$(".btn-next").on("click", function(e){
    var target, current, before, after, currentName, folders, startUrl;
    // 文件层级
    // console.log(e.target);
    console.log(e.target.className);

    location.folders = location.href.split("/");
    // 页面name
    location.currentName = location.folders.slice(-1);

    location.foldName = location.folders.slice(-2);     
    // 触发按钮的classname
    activeNext(e.target.className);
    // console.log(location.folders.length-1, location.currentName[0], location);

    // 判断触发那一个按钮
    function activeNext(nextName) {
        if(nextName === "btn-last"){
            if(location.currentName[0] === "index_start.html"){
                window.location.href = "activitis/page1949.html";
            }
        }
        if(nextName === "btn-after"){
            // 判断当前页去下一个的url location.href;
            
            if(location.currentName[0] === "page1949.html"){
                
                window.location.href = "page1959.html";
            }
            if(location.currentName[0] === "page1959.html"){
                
                window.location.href = "page1969.html";
            }
            if(location.currentName[0] === "page1969.html"){
                
                window.location.href = "page1979.html";
            }
            if(location.currentName[0] === "page1979.html"){
                
                window.location.href = "page1989.html";
            }
            if(location.currentName[0] === "page1989.html"){
                
                window.location.href = "page1999.html";
            }
            if(location.currentName[0] === "page1999.html"){
                
                window.location.href = "page2009.html";
            }
            if(location.currentName[0] === "page2009.html"){
                
                window.location.href = "page2019.html";
            }
            if(location.currentName[0] === "page2019.html"){
                
                window.location.href = "before.html";
            }
            if(location.currentName[0] === "before.html"){
                
                window.location.href = "after.html";
            }
            if(location.currentName[0] === "after.html" && window.history.length >= 10){
                startUrl = window.location.href.split("activitis/");
                // console.log(startUrl[0]);  
                window.location.href = startUrl[0] + "index_start.html";
            }
        }
        if(nextName === "btn-before"){
            window.history.back(-1);
            if(window.length > 0){
                window.history.back(-1); 
            }
        }
    }
});


