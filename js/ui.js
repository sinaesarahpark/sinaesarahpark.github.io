$(document).ready((function(){var t=$("#letterWrap"),e=$("#letterTitle"),o=$("#lettercontents"),l="-1",i=$(".random-images"),n=$(".random-images").find("img"),s=new Audio("./audio/click_sound.mp3");$(".letter-list .letter").off("click").on("click",(function(){$(".credit").css("display","none"),t.css("display","block");var i=$(this).index();l=i,t.scrollTop(0),$(this).hasClass("active")?$(this).removeClass("active"):($(this).siblings().removeClass("active"),$(this).addClass("active"),"ko"===$("html").eq(0).attr("lang")?(e.html(letterList.ko[i].title),o.html(letterList.ko[i].text)):"en"===$("html").eq(0).attr("lang")?(e.html(letterList.en[i].title),o.html(letterList.en[i].text)):"zh-tw"===$("html").eq(0).attr("lang")&&(e.html(letterList.zh[i].title),o.html(letterList.zh[i].text)))})),$("#langKo").off("click").on("click",(function(){$("html").eq(0).attr("lang","ko"),$(this).siblings(".lang-btn").removeClass("active"),$(this).addClass("active"),l>=0&&(e.html(letterList.ko[l].title),o.html(letterList.ko[l].text),t.scrollTop(0))})),$("#langEn").off("click").on("click",(function(){$("html").eq(0).attr("lang","en"),$(this).siblings(".lang-btn").removeClass("active"),$(this).addClass("active"),l>=0&&(e.html(letterList.en[l].title),o.html(letterList.en[l].text),t.scrollTop(0))})),$("#langZh").off("click").on("click",(function(){$("html").eq(0).attr("lang","zh-tw"),$(this).siblings(".lang-btn").removeClass("active"),$(this).addClass("active"),l>=0&&(e.html(letterList.zh[l].title),o.html(letterList.zh[l].text),t.scrollTop(0))})),$("#toHome").off("click").on("click",(function(){$(".credit").css("display","block"),t.css("display","none"),$(".credit").scrollTop(0)})),$(".random-img-btn").off("click").on("click",(function(){var t=$(window).width()-400,e=$(window).height()-600,o=Math.floor(71*Math.random()+1),l=Math.floor(Math.random()*t),a=Math.floor(Math.random()*e);window.offsetWidth,n.attr("src","./image/thomasson/"+o+".jpg"),s.play(),n.on("load",(function(){i.fadeIn(200),i.css({top:a,right:l})}))})),$(document).mouseup((function(t){var e=$(".random-images");0===e.has(t.target).length&&e.css("display","none")})),$(".item.letter button img").mouseover((function(){$(this).attr("src",$(this).data("animated"))})),$(".item.letter button img").mouseout((function(){$(this).attr("src",$(this).data("static"))})),t.on("mousedown mousemove dragstart",(function(t){t.preventDefault()}))})),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),document.addEventListener("DOMContentLoaded",(function(){var t,e,o=document.getElementById("letterWrap");function l(){e&&clearTimeout(e),e=setTimeout((function(){var e=o.scrollTop,i=o.offsetHeight;t.forEach((function(t){t.offsetTop<e+i+150&&(t.src=t.dataset.src,t.classList.remove("lazy"))})),0==t.length&&document.removeEventListener("scroll",l)}),20)}document.getElementById("letterWrap").addEventListener("scroll",(function(){t=document.querySelectorAll(".lazy"),l()}))}));