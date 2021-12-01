$(document).ready(function() {
    var letterWrap = $("#letterWrap");
    var tgTitle = $("#letterTitle");
    var tgContents = $("#lettercontents");
    var saveIdx = "-1";
    var imgW = 400;
    var imgH = 600;
    var tgImgWrap = $(".random-images");
    var tgImg = $(".random-images").find("img");
    var audio = new Audio("./audio/click_sound.mp3");
  
    $(".letter-list .letter").off("click").on("click", function (){
      $(".credit").css("display","none");
      letterWrap.css("display","block");
        var tgIndex = $(this).index();
        saveIdx = tgIndex;
        letterWrap.scrollTop(0);
        if(!$(this).hasClass("active")){
          $(this).siblings().removeClass("active");
          $(this).addClass("active");
          if($("html").eq(0).attr("lang") === "ko") {
            tgTitle.html(letterList.ko[tgIndex].title);
            tgContents.html(letterList.ko[tgIndex].text);
          }
          else if ($("html").eq(0).attr("lang") === "en") {
            tgTitle.html(letterList.en[tgIndex].title);
            tgContents.html(letterList.en[tgIndex].text);
          }
          else if ($("html").eq(0).attr("lang") === "zh-tw") {
            tgTitle.html(letterList.zh[tgIndex].title);
            tgContents.html(letterList.zh[tgIndex].text);
          }
        }
        else {
          $(this).removeClass("active");
        }
    });

    $("#langKo").off("click").on("click", function() {
      $("html").eq(0).attr("lang", "ko");
      $(this).siblings(".lang-btn").removeClass("active");
      $(this).addClass("active");
      if (saveIdx >= 0) {
        tgTitle.html(letterList.ko[saveIdx].title);
        tgContents.html(letterList.ko[saveIdx].text);
        letterWrap.scrollTop(0);
      }
    });

    $("#langEn").off("click").on("click", function() {
      $("html").eq(0).attr("lang", "en");
      $(this).siblings(".lang-btn").removeClass("active");
      $(this).addClass("active");
      if (saveIdx >= 0) {
        tgTitle.html(letterList.en[saveIdx].title);
        tgContents.html(letterList.en[saveIdx].text);
        letterWrap.scrollTop(0);
      }
    });

    $("#langZh").off("click").on("click", function() {
      $("html").eq(0).attr("lang", "zh-tw");
      $(this).siblings(".lang-btn").removeClass("active");
      $(this).addClass("active");
      if (saveIdx >= 0) {
        tgTitle.html(letterList.zh[saveIdx].title);
        tgContents.html(letterList.zh[saveIdx].text);
        letterWrap.scrollTop(0);
      }
    });

    $("#toHome").off("click").on("click", function() {
        $(".credit").css("display","block");
        letterWrap.css("display","none");
        $(".credit").scrollTop(0);
    });
    
    $(".random-img-btn").off("click").on("click", function() {
      var width = $(window).width();
      var height = $(window).height();
      var xNum = width - imgW;
      var yNum = height - imgH;
      var randomImgNum = Math.floor(Math.random() * 71 + 1);
      var x = Math.floor(Math.random() * xNum);
      var y = Math.floor(Math.random() * yNum);
      void window.offsetWidth;
      tgImg.attr("src","./image/thomasson/"+ randomImgNum +".jpg");
      audio.play();
      tgImg.on('load', function () {
        tgImgWrap.fadeIn(200);
        tgImgWrap.css({"top":y,"right":x});
      });
    });
    
    $(document).mouseup(function(e){
      var tgImgWrap = $(".random-images");
      if(tgImgWrap.has(e.target).length === 0){
        tgImgWrap.css("display","none");
      }
    });

    $(".item.letter button img").mouseover(function() {
      $(this).attr("src", $(this).data("animated"));
    })
    $(".item.letter button img").mouseout(function() {
      $(this).attr("src", $(this).data("static"));
    });

    letterWrap.on('mousedown mousemove dragstart', function(event) {
      event.preventDefault();
  });
});

// ie11
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;
  var lazyloadThrottleTimeout;
  var letterTextBox = document.getElementById("letterWrap");
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = letterTextBox.scrollTop; // 스크롤의 위치
        var scrollTop2 = letterTextBox.offsetHeight; // div의 세로 길이(스크롤 되는 영역, 내부 컨텐츠 x)
        lazyloadImages.forEach(function(img) {
          if(img.offsetTop < (scrollTop + scrollTop2 + 150)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          } 
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
        };
    }, 20);
  };
  
  document.getElementById("letterWrap").addEventListener("scroll", function(){
    lazyloadImages = document.querySelectorAll(".lazy");
    lazyload();
  });
});