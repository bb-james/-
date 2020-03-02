var Images = document.querySelector('.js_lunbo');
var Inum = Images.children.length;/*图片没克隆前的数量*/
var dots = document.querySelector('.dots');/*圆点*/
var btn_r = document.querySelector('.btn_right');
var btn_l = document.querySelector('.btn_left');
var num = 0; var index; var circle = 0; var timer;
//创建圆点元素，设置属性
for(var i = 0;i<=Inum-1;i++){
	var li = document.createElement('li');
	li.setAttribute('index',i);
	dots.appendChild(li);
	li.addEventListener('click',function(){
		for(var j =0; j<= Inum-1; j++){
 		dots.children[j].className = '';
 	}
		this.className = 'current';
		index = this.getAttribute('index');		
		Images.style.left = -590 * index + 'px';
		num = index;
		animation(Images,-590*num,20);
	})
	


}
//初始第一个圆点
dots.children[0].className = 'current';
var first = Images.children[0].cloneNode(true);//克隆后代则为true
Images.appendChild(first);

btn_r.addEventListener('click',function(){

	setTimeout(function(){
		if(num==Images.children.length-1){
		Images.style.left = 0 + 'px';
		num=0;
		}
		num++;	
		circle = num; /*小圆点和图片跳转同步*/
		if(circle>Inum-1){circle=0;}	/*小圆点跳转*/		
		animation(Images,-590*num,20);	/*图片跳转*/
		for(var j =0; j<= Inum-1; j++){
 		dots.children[j].className = '';
 		}
		dots.children[circle].className = 'current';

		
		
	},0)
	
})
btn_l.addEventListener('click',function(){/* 左键*/

	setTimeout(function(){
	
	if(num==0){
		Images.style.left = -590 * (Images.children.length-1)+ 'px';
		num=Images.children.length-1;
		}
		num--;
	 animation(Images,-590*num,20);
	 circle = num; /*小圆点和图片跳转同步*/
		if(circle>Inum-1){circle=0;}	/*小圆点跳转*/		
		animation(Images,-590*num,20);	/*图片跳转*/
		for(var j =0; j<= Inum-1; j++){
 		dots.children[j].className = '';
 		}
		dots.children[circle].className = 'current';		
	},0)
	
})


timer = setInterval(function(){
	btn_r.click()
},2000)
Images.addEventListener('mouseenter',function(){
 	clearInterval(timer);
 	
 })
Images.addEventListener('mouseleave',function(){
 	
 	timer = setInterval (function (){
 	btn_r.click();
 },2000)
 })
dots.addEventListener('mouseenter',function(){
 	clearInterval(timer); 	
 })
dots.addEventListener('mouseleave',function(){
 	timer = setInterval (function (){
 	btn_r.click();
 },2000) 	
 })
btn_l.addEventListener('mouseenter',function(){
 	clearInterval(timer); 	
 })
btn_l.addEventListener('mouseleave',function(){

 	timer = setInterval (function (){

 	btn_r.click();
  },2000)
 })	
btn_r.addEventListener('mouseenter',function(){
 	clearInterval(timer);	
 })
btn_r.addEventListener('mouseleave',function(){

 	timer = setInterval (function (){

 	btn_r.click();
  },2000)
 })	
