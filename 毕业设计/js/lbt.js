//轮播图开始
var slideIndex = 1;
var slideInterval;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByTagName("img");
  if (n > 5) {slideIndex = 1}
  if (n < 1) {slideIndex = 5}
  for (i = 0; i < 5; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

  // 取消之前的定时器
  clearInterval(slideInterval);
  // 设置定时器，每3秒切换到下一张图片
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 3000);
}
//轮播图结束


var video = document.getElementById("myVideo"); // 获取视频元素
    wh-video.addEventListener("play", function() {
      // 播放视频时执行的操作
      console.log("视频开始播放");
    });
    wh-video.addEventListener("pause", function() {
      // 暂停视频时执行的操作
      console.log("视频已暂停");
    });

