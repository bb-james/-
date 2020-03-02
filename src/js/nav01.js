//下拉菜单 
var myjd = document.querySelector('.position');

 myjd.onmouseover = function () {
 	myjd.children[2].style.display = 'block';
 	myjd.children[3].style.display = 'block';
   
  }
 myjd.onmouseout = function () {
    myjd.children[2].style.display = 'none';
  	myjd.children[3].style.display = 'none';
  }

  // 倒计时
 var h =document.querySelector('.time_01');
 var m =document.querySelector('.time_02');
 var s =document.querySelector('.time_03');
 var iptime =new Date('2020-012-30 19:00:00');
 counttime();
 function counttime() {
 var nowtime = +new Date();
var time = (iptime-nowtime)/1000;
H = parseInt(time/60/60%24);
H = H < 10 ? '0' + H:H;
h.innerHTML = H;
M = parseInt(time/60%60);
M = M < 10 ? '0' + M:M;
m.innerHTML = M;
S = parseInt(time%60);
S = S < 10 ? '0' + S:S;
s.innerHTML = S;
 }
setInterval(counttime,1000);


 

  